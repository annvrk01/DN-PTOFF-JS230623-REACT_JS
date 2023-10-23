import { SCREEN_URL } from '../../constants/screen';
import {
  HomeAdminPage,
  LoginAdminPage,
  UsersAdminPage,
  UserUpdateAdminPage,
  UserDetailAdminPage,
  ProductAdminPage,
  ProductUpdateAdminPage,
} from '../loadableRoutes/adminLoadable';

// Config layout admin
export const layoutAdmin = [
  {
    path: SCREEN_URL.ADMIN_HOME,
    component: HomeAdminPage,
    isHeader: true,
    isSidebar: true,
    title: 'Trang chủ',
  },
  {
    path: SCREEN_URL.ADMIN_USERS,
    component: UsersAdminPage,
    isHeader: true,
    isSidebar: true,
    title: 'Quản lý người dùng',
  },
  {
    path: SCREEN_URL.ADMIN_CREATE_USER,
    component: UserUpdateAdminPage,
    isHeader: true,
    isSidebar: true,
    title: 'Tạo thông tin người dùng',
  },
  {
    path: SCREEN_URL.ADMIN_DETAIL_USER,
    component: UserDetailAdminPage,
    isHeader: true,
    isSidebar: true,
    title: 'Chi tiết thông tin người dùng',
  },
  {
    path: SCREEN_URL.ADMIN_EDIT_USER,
    component: UserUpdateAdminPage,
    isHeader: true,
    isSidebar: true,
    title: 'Cập nhật thông tin người dùng',
  },
  {
    path: SCREEN_URL.ADMIN_PRODUCT,
    component: ProductAdminPage,
    isHeader: true,
    isSidebar: true,
    title: 'Quản lý sản phẩm',
  },
  {
    path: SCREEN_URL.ADMIN_CREATE_PRODUCT,
    component: ProductUpdateAdminPage,
    isHeader: true,
    isSidebar: true,
    title: 'Tạo thông tin sản phẩm',
  },
  {
    path: SCREEN_URL.ADMIN_EDIT_PRODUCT,
    component: ProductUpdateAdminPage,
    isHeader: true,
    isSidebar: true,
    title: 'Chỉnh sửa thông tin sản phẩm',
  },
  {
    path: SCREEN_URL.ADMIN_LOGIN,
    component: LoginAdminPage,
    isHeader: false,
    isSidebar: false,
    title: 'Đăng nhập',
  },
];
