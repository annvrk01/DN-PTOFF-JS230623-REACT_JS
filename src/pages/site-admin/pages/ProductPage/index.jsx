import React from 'react';
import {
  Box,
  Button,
  Card,
  Container,
  InputAdornment,
  OutlinedInput,
  Paper,
  Stack,
  SvgIcon,
  Typography,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FileDownloadIcon from '@mui/icons-material/FileDownload';
import UploadIcon from '@mui/icons-material/Upload';
import AddIcon from '@mui/icons-material/Add';
import { Link } from 'react-router-dom';
import { screenUrl } from '../../../../constants/screen/screenUrl';
import * as XLSX from 'xlsx';
import { useSelector } from 'react-redux';
import { ProductsTable } from './ProductsTable';

ProductPage.propTypes = {};

function ProductPage() {
  const products = useSelector((state) => state.products);

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

  return (
    <div>
      <Box
        component="main"
        sx={{
          flexGrow: 1,
          py: 8,
        }}
      >
        <Container maxWidth="xl">
          <Stack spacing={3}>
            <Stack direction="row" justifyContent="space-between" spacing={4}>
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
              <div>
                <Button
                  component={Link}
                  to={screenUrl.ADMIN_CREATE_PRODUCT}
                  startIcon={
                    <SvgIcon fontSize="small">
                      <AddIcon />
                    </SvgIcon>
                  }
                  variant="contained"
                >
                  Thêm
                </Button>
              </div>
            </Stack>
            <Card sx={{ p: 2 }} component={Paper} elevation={3}>
              <OutlinedInput
                defaultValue=""
                fullWidth
                placeholder="Tìm kiếm sản phẩm"
                startAdornment={
                  <InputAdornment position="start">
                    <SvgIcon color="action" fontSize="small">
                      <SearchIcon />
                    </SvgIcon>
                  </InputAdornment>
                }
                sx={{ maxWidth: 500 }}
              />
            </Card>
            <ProductsTable />
          </Stack>
        </Container>
      </Box>
    </div>
  );
}

export default ProductPage;
