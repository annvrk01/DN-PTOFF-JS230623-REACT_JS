import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { SCREEN_URL } from '../../../../constants/screen';
import { UsersTable } from './UsersTable';
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
import Loading from '../../../../components/Loading';
import UploadIcon from '@mui/icons-material/Upload';
import AddIcon from '@mui/icons-material/Add';
import * as XLSX from 'xlsx';
import { fetchUsers } from '../../../../api/userApi';
import moment from 'moment';

UsersPage.propTypes = {};

function UsersPage() {
  const users = useSelector((state) => state.users);
  const dispatch = useDispatch();
  const [search, setSearch] = useState('');
  const [filters, setFilters] = useState([]);
  const [select, setSelect] = useState({
    order: '',
    spent: '',
  });

  useEffect(() => {
    dispatch(fetchUsers());
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
      console.log(parsedData);
      return parsedData;
    };
  };

  const handleSearchUser = (e) => setSearch(e.target.value);
  const handleFilterProductBySelect = (e) => setFilters(e.target.value);

  const sortUsers = (users, sortBy) =>
    [...users].sort((a, b) => {
      if (sortBy === 'sortProduct|desc') {
        return a.fullName.localeCompare(b.fullName);
      } else if (sortBy === 'sortProduct|asc') {
        return b.fullName.localeCompare(a.fullName);
      } else if (sortBy === 'updatedAt|desc') {
        return moment(b.updatedAt).diff(moment(a.updatedAt));
      } else if (sortBy === 'updatedAt|asc') {
        return moment(a.updatedAt).diff(moment(b.updatedAt));
      }
    });

  const usersFilter = useMemo(() => {
    let filteredUsers = users.data.filter(
      (user) =>
        search === '' ||
        user.fullName.toLowerCase().includes(search.toLowerCase()) ||
        user.email.toLowerCase().includes(search.toLowerCase())
    );

    if (filters) {
      filteredUsers = sortUsers(filteredUsers, filters);
    }

    return filteredUsers;
  }, [search, filters, users]);

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
              <Stack direction="row" alignItems="center" justifyContent="space-between" spacing={4}>
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
                <Button
                  component={Link}
                  to={SCREEN_URL.ADMIN_CREATE_USER}
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
                    placeholder="Search customer"
                    onChange={handleSearchUser}
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
                <UsersTable users={usersFilter} />
              </Card>
            </Stack>
          </Container>
        </Box>
      )}
    </div>
  );
}

export default UsersPage;
