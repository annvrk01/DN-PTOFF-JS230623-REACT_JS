import { useSelector } from 'react-redux';
import {
  Box,
  Card,
  Checkbox,
  IconButton,
  Paper,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TablePagination,
  TableRow,
} from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Link } from 'react-router-dom';
import { screenUrl } from '../../../../../constants/screen/screenUrl';
import { green, red } from '@mui/material/colors';

export const ProductsTable = () => {
  const products = useSelector((state) => state.products);

  return (
    <Card component={Paper} elevation={3} sx={{ borderRadius: 5 }}>
      <Box sx={{ minWidth: 800 }}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell padding="checkbox">
                <Checkbox />
              </TableCell>
              <TableCell>Tên sản phẩm</TableCell>
              <TableCell>Số lượng</TableCell>
              <TableCell>Giá</TableCell>
              <TableCell>Trạng thái</TableCell>
              <TableCell>Danh mục</TableCell>
              <TableCell>Ngày tạo</TableCell>
              <TableCell>Ngày cập nhật</TableCell>
              <TableCell>Chức năng</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {products?.map(
              ({
                id,
                name,
                quantity,
                imageUrl,
                price,
                category,
                status,
                createdDate,
                lastUpdatedDate,
              }) => (
                <TableRow key={id} hover>
                  <TableCell padding="checkbox">
                    <Checkbox />
                  </TableCell>
                  <TableCell>
                    <Stack direction="row" alignItems="center" gap={2}>
                      <img
                        src={imageUrl[0]}
                        alt={name}
                        width={48}
                        height={48}
                        style={{ objectFit: 'cover', borderRadius: '10px' }}
                      />
                      <span
                        style={{
                          width: 150,
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                        }}
                      >
                        {name}
                      </span>
                    </Stack>
                  </TableCell>
                  <TableCell>{quantity}</TableCell>
                  <TableCell>
                    {price.toLocaleString('vi-VN', { style: 'currency', currency: 'VND' })}
                  </TableCell>
                  <TableCell
                    sx={{ color: status.toLowerCase() === 'còn hàng' ? green[500] : red[500] }}
                  >
                    {status}
                  </TableCell>
                  <TableCell>
                    <span
                      style={{
                        width: 150,
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                        display: '-webkit-box',
                        WebkitLineClamp: 1,
                        WebkitBoxOrient: 'vertical',
                      }}
                    >
                      {category}
                    </span>
                  </TableCell>
                  <TableCell>{createdDate}</TableCell>
                  <TableCell>{lastUpdatedDate}</TableCell>
                  <TableCell>
                    <Stack direction="row" gap="2">
                      <IconButton
                        color="primary"
                        component={Link}
                        to={`${screenUrl.ADMIN_PRODUCT}/${id}`}
                      >
                        <EditIcon />
                      </IconButton>
                      <IconButton color="red">
                        <DeleteIcon />
                      </IconButton>
                    </Stack>
                  </TableCell>
                </TableRow>
              )
            )}
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
    </Card>
  );
};

ProductsTable.propTypes = {};
