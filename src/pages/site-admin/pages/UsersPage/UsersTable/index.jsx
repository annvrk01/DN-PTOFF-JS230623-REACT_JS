import { useState } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { screenUrl } from '../../../../../constants/screen/screenUrl';
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
import ModalRemoveUser from './ModalRemoveUser';

export const UsersTable = () => {
  const users = useSelector((state) => state.users);

  const [open, setOpen] = useState(false);
  const [selectAll, setSelectAll] = useState(false);
  const [selectedItems, setSelectedItems] = useState([]);

  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const handleClearSelected = () => {
    setSelectAll(false);
    setSelectedItems([]);
  };

  const handleSelectAll = () => {
    setSelectAll(!selectAll);
    const allUserIds = users?.data?.map((user) => user.id);

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
                  <TableCell style={{ padding: '0 12px' }}>Đã chọn {selectedItems.length}</TableCell>
                  <TableCell style={{ padding: 0 }}></TableCell>
                  <TableCell style={{ padding: 0 }}></TableCell>
                  <TableCell style={{ padding: 0 }}></TableCell>
                  <TableCell style={{ padding: 0 }}></TableCell>
                  <TableCell style={{ padding: '10px 16px', textAlign: 'center' }}>
                    <IconButton color="black" onClick={handleOpen}>
                      <DeleteOutlineOutlinedIcon />
                    </IconButton>
                  </TableCell>
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
            {users?.data?.map(({ id, fullName, avatar, email, address, phone, order, spent }) => (
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
                  <IconButton color="black" component={Link} to={`${screenUrl.ADMIN_USERS}/${id}`}>
                    <CreateOutlinedIcon />
                  </IconButton>
                  <IconButton color="black">
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
        count={0}
        page={0}
        rowsPerPage={0}
        rowsPerPageOptions={[5, 10, 25]}
        onPageChange={() => {}}
      />

      <ModalRemoveUser
        open={open}
        selectedItems={selectedItems}
        handleClose={handleClose}
        handleClearSelected={handleClearSelected}
      />
    </Card>
  );
};

UsersTable.propTypes = {};
