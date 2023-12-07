import { SCREEN_URL } from '../../constants/screen';
import {
  CartPage,
  CheckoutPage,
  DetailPage,
  HomePage,
  LoginPage,
  RegisterPage,
} from '../loadableRoutes/customerLoadable';

// Config layout customer
export const layoutCustomer = [
  {
    path: SCREEN_URL.HOME,
    component: HomePage,
    isHeader: true,
    isFooter: true,
    title: 'Trang chủ',
  },
  {
    path: SCREEN_URL.LOGIN,
    component: LoginPage,
    isHeader: true,
    isFooter: true,
    title: 'Đăng nhập',
  },
  {
    path: SCREEN_URL.REGISTER,
    component: RegisterPage,
    isHeader: true,
    isFooter: true,
    title: 'Đăng ký',
  },
  {
    path: SCREEN_URL.DETAILS,
    component: DetailPage,
    isHeader: true,
    isFooter: true,
    title: 'Chi tiết',
  },
  {
    path: SCREEN_URL.CART,
    component: CartPage,
    isHeader: true,
    isFooter: true,
    title: 'Giỏ hàng',
  },
  {
    path: SCREEN_URL.CHECKOUT,
    component: CheckoutPage,
    isHeader: true,
    isFooter: true,
    title: 'Thanh toán',
  },
];
