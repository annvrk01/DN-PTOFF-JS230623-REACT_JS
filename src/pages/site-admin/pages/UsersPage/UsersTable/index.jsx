import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { SCREEN_URL } from '../../../../../constants/screen';
import {
  Avatar,
  Box,
  Card,
  Checkbox,
  IconButton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
  Typography,
} from '@mui/material';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import { deleteUser } from '../../../../../api/userApi';
import ModalRemove from '../../../components/molecules/ModalRemove';

export const UsersTable = (props) => {
  const { users } = props;
  const dispatch = useDispatch();

  console.log(users);

  const [open, setOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);
  const [currentPage, setCurrentPage] = useState(0);
  const [itemsPerPage, setItemsPerPage] = useState(5);

  const handleChangePage = (event, newPage) => {
    setCurrentPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setItemsPerPage(parseInt(event.target.value, 10));
    setCurrentPage(0);
  };

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClearSelected = () => {
    setSelectAll(false);
    setSelectedItems([]);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const allUserIds = users?.map((user) => user.id);

    if (selectAll) {
      setSelectedItems([]);
    } else {
      setSelectedItems(allUserIds);
    }
  };

  const handleSelectItem = (itemId) => {
    const index = selectedItems.indexOf(itemId);
    if (index === -1) {
      setSelectedItems([...selectedItems, itemId]);
    } else {
      const updatedItems = [...selectedItems];
      updatedItems.splice(index, 1);
      setSelectedItems(updatedItems);
    }
  };

  const handleRemoveUser = () => {
    selectedItems.forEach((userId) => {
      dispatch(deleteUser(userId));
    });
    handleClose();
    handleClearSelected();
  };

  return (
    <Card>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow sx={{ bgcolor: 'rgba(0, 0, 0, 0.045)' }}>
              <TableCell padding="checkbox">
                <Checkbox checked={selectAll} onChange={handleSelectAll} />
              </TableCell>
              {selectedItems.length > 0 ? (
                <>
                  <TableCell style={{ padding: '10px 12px' }}>
                    <Stack gap={1} direction="row" alignItems="center">
                      <Typography mr={1}>Đã chọn {selectedItems.length}</Typography>
                      <Typography>|</Typography>
                      <IconButton color="black" onClick={handleOpen}>
                        <DeleteOutlineOutlinedIcon />
                      </IconButton>
                    </Stack>
                  </TableCell>
                  <TableCell style={{ padding: 0 }}></TableCell>
                  <TableCell style={{ padding: 0 }}></TableCell>
                  <TableCell style={{ padding: 0 }}></TableCell>
                  <TableCell style={{ padding: 0 }}></TableCell>
                  <TableCell style={{ padding: '10px 16px', textAlign: 'center' }}></TableCell>
                </>
              ) : (
                <>
                  <TableCell>Tên</TableCell>
                  <TableCell>Địa chỉ</TableCell>
                  <TableCell>Điện thoại</TableCell>
                  <TableCell>Số lượng</TableCell>
                  <TableCell>Đã mua</TableCell>
                  <TableCell sx={{ textAlign: 'center' }}>Chức năng</TableCell>
                </>
              )}
            </TableRow>
          </TableHead>
          <TableBody>
            {users?.map(({ id, fullName, avatar, email, address, phone, order, spent }) => (
              <TableRow key={id} hover selected={selectedItems.includes(id)}>
                <TableCell padding="checkbox">
                  <Checkbox checked={selectedItems.includes(id)} onChange={() => handleSelectItem(id)} />
                </TableCell>
                <TableCell>
                  <Stack alignItems="center" direction="row" spacing={2}>
                    <Avatar src={avatar}>C</Avatar>
                    <Stack>
                      <Typography variant="subtitle2">{fullName}</Typography>
                      <Typography variant="body2" style={{ color: '#777' }}>
                        {email}
                      </Typography>
                    </Stack>
                  </Stack>
                </TableCell>
                <TableCell>{address}</TableCell>
                <TableCell>{phone}</TableCell>
                <TableCell>{order}</TableCell>
                <TableCell>{spent.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}</TableCell>
                <TableCell sx={{ textAlign: 'center' }}>
                  <IconButton color="black" component={Link} to={`${SCREEN_URL.ADMIN_USERS}/${id}`}>
                    <CreateOutlinedIcon />
                  </IconButton>
                  <IconButton color="black" component={Link} to={SCREEN_URL.ADMIN_DETAIL_USER.replace(':userId', id)}>
                    <ArrowForwardRoundedIcon />
                  </IconButton>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </Box>
      <TablePagination
        component="div"
        count={users?.length}
        page={currentPage}
        rowsPerPage={itemsPerPage}
        rowsPerPageOptions={[5, 10, 25]}
        onPageChange={handleChangePage}
        onRowsPerPageChange={handleChangeRowsPerPage}
      />

      <ModalRemove
        open={open}
        selectedItems={selectedItems}
        handleClose={handleClose}
        handleRemove={handleRemoveUser}
      />
    </Card>
  );
};

UsersTable.propTypes = {};
