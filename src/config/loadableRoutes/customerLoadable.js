import { createLoadable } from './createLoadable';

// Customer router
export const HomePage = createLoadable(() => import('../../pages/site-customer/pages/HomePage'), {
  toggleBgColor: true,
});
export const CartPage = createLoadable(() => import('../../pages/site-customer/pages/CartPage'), {
  toggleBgColor: true,
});
export const CheckoutPage = createLoadable(() => import('../../pages/site-customer/pages/CheckoutPage'), {
  toggleBgColor: true,
});
export const LoginPage = createLoadable(() => import('../../pages/site-customer/pages/LoginPage'), {
  toggleBgColor: true,
});
export const DetailPage = createLoadable(() => import('../../pages/site-customer/pages/DetailPage'), {
  toggleBgColor: true,
});
export const RegisterPage = createLoadable(() => import('../../pages/site-customer/pages/RegisterPage'), {
  toggleBgColor: true,
});

export const ErrorPage = createLoadable(() => import('../../pages/site-customer/pages/ErrorPage'));
