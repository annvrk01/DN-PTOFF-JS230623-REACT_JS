import React from 'react';
import {
  Box,
  Button,
  Card,
  Container,
  InputAdornment,
  MenuItem,
  OutlinedInput,
  Paper,
  Stack,
  SvgIcon,
  TextField,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import UploadIcon from '@mui/icons-material/Upload';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { SCREEN_URL } from '../../../../constants/screen';
import * as XLSX from 'xlsx';
import { useSelector } from 'react-redux';
import { ProductsTable } from './ProductsTable';
import { useState } from 'react';
import { useMemo } from 'react';
import moment from 'moment/moment';

ProductPage.propTypes = {};

function ProductPage() {
  const products = useSelector((state) => state.products);

  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState('');

  const handleExportFile = () => {
    var wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(products);
    XLSX.utils.book_append_sheet(wb, ws, 'product');
    XLSX.writeFile(wb, 'product_excel.xlsx');
  };

  const handleImportFile = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = async (e) => {
      const data = e.target.result;
      const workbook = XLSX.read(data, { type: 'binary' });
      const sheetName = workbook.SheetNames[0];
      const sheet = workbook.Sheets[sheetName];
      const parsedData = XLSX.utils.sheet_to_json(sheet);
      return parsedData;
    };
  };

  const handleSearchProduct = (e) => setSearch(e.target.value);
  const handleFilterProductBySelect = (e) => setFilters(e.target.value);

  const sortProducts = (products, sortBy) => {
    return [...products].sort((a, b) => {
      if (sortBy === 'sortProduct|desc') {
        return a.productName.localeCompare(b.productName);
      } else if (sortBy === 'sortProduct|asc') {
        return b.productName.localeCompare(a.productName);
      } else if (sortBy === 'updatedAt|desc') {
        return moment(b.updatedAt).diff(moment(a.updatedAt));
      } else if (sortBy === 'updatedAt|asc') {
        return moment(a.updatedAt).diff(moment(b.updatedAt));
      }
    });
  };

  const productsFilter = useMemo(() => {
    let filteredProducts = products.data.filter(
      (product) =>
        search === '' ||
        product.productName.toLowerCase().includes(search.toLowerCase()) ||
        product.categoryName.toLowerCase().includes(search.toLowerCase())
    );

    if (filters) {
      filteredProducts = sortProducts(filteredProducts, filters);
    }

    return filteredProducts;
  }, [search, filters, products]);

  return (
    <Box
      component="main"
      sx={{
        flexGrow: 1,
        py: 8,
      }}
    >
      <Container maxWidth="xl">
        <Stack spacing={3}>
          <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={4}>
            <Stack spacing={1}>
              <Typography variant="h4">Quản lý Sản phẩm</Typography>
              <Stack alignItems="center" direction="row" spacing={1}>
                <Button
                  color="inherit"
                  component="label"
                  startIcon={
                    <SvgIcon fontSize="small">
                      <UploadIcon />
                    </SvgIcon>
                  }
                >
                  Import
                  <input type="file" hidden onChange={handleImportFile} />
                </Button>
                <Button
                  color="inherit"
                  filename="users table"
                  sheet="users"
                  onClick={handleExportFile}
                  startIcon={
                    <SvgIcon fontSize="small">
                      <FileDownloadIcon />
                    </SvgIcon>
                  }
                >
                  Export
                </Button>
              </Stack>
            </Stack>
            <Button
              component={Link}
              to={SCREEN_URL.ADMIN_CREATE_PRODUCT}
              startIcon={
                <SvgIcon fontSize="small">
                  <AddIcon />
                </SvgIcon>
              }
              variant="contained"
            >
              Thêm
            </Button>
          </Stack>
          <Card sx={{ borderRadius: 5 }} component={Paper} elevation={3}>
            <Stack sx={{ p: 2 }} direction="row" justifyContent="space-between">
              <OutlinedInput
                fullWidth
                placeholder="Tìm kiếm sản phẩm"
                onChange={handleSearchProduct}
                startAdornment={
                  <InputAdornment position="start">
                    <SvgIcon color="action" fontSize="small">
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                }
                sx={{ maxWidth: 800, borderRadius: 3, mb: 2 }}
              />
              <TextField
                id="outlined-select-currency"
                sx={{
                  width: 250,
                  borderRadius: 3,
                  '.MuiInputBase-root': {
                    borderRadius: '10px',
                  },
                }}
                select
                label="Select"
                defaultValue="updatedAt|desc"
                onChange={handleFilterProductBySelect}
              >
                <MenuItem value="sortProduct|desc">Sắp xếp theo tăng dần (A-Z)</MenuItem>
                <MenuItem value="sortProduct|asc">Sắp xếp theo giảm dần (Z-A)</MenuItem>
                <MenuItem value="updatedAt|desc">Cập nhật lần cuối (Mới nhất)</MenuItem>
                <MenuItem value="updatedAt|asc">Cập nhật lần cuối (Cũ nhất)</MenuItem>
              </TextField>
            </Stack>
            <ProductsTable products={productsFilter} />
          </Card>
        </Stack>
      </Container>
    </Box>
  );
}

export default ProductPage;
