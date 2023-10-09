import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { screenUrl } from '../../../../constants/screen/screenUrl';
import { UsersTable } from './UsersTable';
import { getUsers } from '../../api/userApi';
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
import Loading from '../../components/atoms/Loading';
import * as XLSX from 'xlsx';

UsersPage.propTypes = {};

function UsersPage() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());

    // return () => promise.abort();
  }, []);

  const handleExportFile = () => {
    var wb = XLSX.utils.book_new(),
      ws = XLSX.utils.json_to_sheet(users.data);
    XLSX.utils.book_append_sheet(wb, ws, 'MySheet1');
    XLSX.writeFile(wb, 'MyExcel.xlsx');
  };

  const handleImportFile = (e) => {
    const reader = new FileReader();
    reader.readAsBinaryString(e.target.files[0]);
    reader.onload = (e) => {
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
      {users.isLoading ? (
        <Loading />
      ) : (
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
                  <Typography variant="h4">Quản lý Người dùng</Typography>
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
                    to={screenUrl.ADMIN_CREATE_USER}
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
              <Card sx={{ borderRadius: 5 }} component={Paper} elevation={3}>
                <Stack sx={{ p: 2 }} direction="row" justifyContent="space-between">
                  <OutlinedInput
                    fullWidth
                    placeholder="Search customer"
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
                  >
                    <MenuItem value="updatedAt|desc">Last update (newest)</MenuItem>
                    <MenuItem value="updatedAt|asc">Last update (oldest)</MenuItem>
                    <MenuItem value="totalOrders|desc">Total orders (highest)</MenuItem>
                    <MenuItem value="totalOrders|asc">Total orders (lowest)</MenuItem>
                  </TextField>
                </Stack>
                <UsersTable />
              </Card>
            </Stack>
          </Container>
        </Box>
      )}
    </div>
  );
}

export default UsersPage;
