import { screenUrl } from '../constants/screen/screenUrl';
import {
  CartPage,
  DetailPage,
  HomeAdminPage,
  HomePage,
  LoginAdminPage,
  LoginPage,
  ProductAdminPage,
  RegisterPage,
  UpdateProductAdminPage,
  UpdateUserAdminPage,
  UsersAdminPage,
} from './loadableRoutes';

// Config layout customer
export const layoutCustomer = [
  {
    path: screenUrl.HOME,
    component: HomePage,
    isHeader: true,
    isFooter: true,
    title: 'Trang chủ',
  },
  {
    path: screenUrl.LOGIN,
    component: LoginPage,
    isHeader: true,
    isFooter: true,
    title: 'Trang đăng nhập',
  },
  {
    path: screenUrl.REGISTER,
    component: RegisterPage,
    isHeader: true,
    isFooter: true,
    title: 'Trang đăng ký',
  },
  {
    path: screenUrl.DETAILS,
    component: DetailPage,
    isHeader: true,
    isFooter: true,
    title: 'Trang chi tiết',
  },
  {
    path: screenUrl.CART,
    component: CartPage,
    isHeader: true,
    isFooter: true,
    title: 'Trang giỏ hàng',
  },
];

// Config layout admin
export const layoutAdmin = [
  {
    path: screenUrl.ADMIN_HOME,
    component: HomeAdminPage,
    isHeader: true,
    isSidebar: true,
    title: 'Trang chủ',
  },
  {
    path: screenUrl.ADMIN_USERS,
    component: UsersAdminPage,
    isHeader: true,
    isSidebar: true,
    title: 'Quản lý người dùng',
  },
  {
    path: screenUrl.ADMIN_CREATE_USER,
    component: UpdateUserAdminPage,
    isHeader: true,
    isSidebar: true,
    title: 'Tạo thông tin người dùng',
  },
  {
    path: screenUrl.ADMIN_EDIT_USER,
    component: UpdateUserAdminPage,
    isHeader: true,
    isSidebar: true,
    title: 'Cập nhật thông tin người dùng',
  },
  {
    path: screenUrl.ADMIN_PRODUCT,
    component: ProductAdminPage,
    isHeader: true,
    isSidebar: true,
    title: 'Quản lý sản phẩm',
  },
  {
    path: screenUrl.ADMIN_CREATE_PRODUCT,
    component: UpdateProductAdminPage,
    isHeader: true,
    isSidebar: true,
    title: 'Tạo thông tin sản phẩm',
  },
  {
    path: screenUrl.ADMIN_EDIT_PRODUCT,
    component: UpdateProductAdminPage,
    isHeader: true,
    isSidebar: true,
    title: 'Chỉnh sửa thông tin sản phẩm',
  },
  {
    path: screenUrl.ADMIN_LOGIN,
    component: LoginAdminPage,
    isHeader: false,
    isSidebar: false,
    title: 'Đăng nhập',
  },
];
