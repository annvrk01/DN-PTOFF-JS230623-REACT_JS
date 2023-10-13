import loadable from '@loadable/component';
import Loading from '../components/Loading';

const createLoadableComponent = (importStatement, props) =>
  loadable(importStatement, {
    fallback: <Loading {...props} />,
  });

// Customer router
export const HomePage = createLoadableComponent(() => import('../pages/site-customer/pages/HomePage'), {
  toggleBgColor: true,
});
export const LoginPage = createLoadableComponent(() => import('../pages/site-customer/pages/LoginPage'), {
  toggleBgColor: true,
});
export const DetailPage = createLoadableComponent(() => import('../pages/site-customer/pages/DetailPage'), {
  toggleBgColor: true,
});
export const RegisterPage = createLoadableComponent(() => import('../pages/site-customer/pages/RegisterPage'), {
  toggleBgColor: true,
});
export const CartPage = createLoadableComponent(() => import('../pages/site-customer/pages/CartPage'), {
  toggleBgColor: true,
});

// Admin router
export const HomeAdminPage = createLoadableComponent(() => import('../pages/site-admin/pages/HomePage'));
export const LoginAdminPage = createLoadableComponent(() => import('../pages/site-admin/pages/LoginPage'));
export const UsersAdminPage = createLoadableComponent(() => import('../pages/site-admin/pages/UsersPage'));
export const UpdateUserAdminPage = createLoadableComponent(() => import('../pages/site-admin/pages/UpdateUserPage'));
export const ProductAdminPage = createLoadableComponent(() => import('../pages/site-admin/pages/ProductPage'));
export const UpdateProductAdminPage = createLoadableComponent(() =>
  import('../pages/site-admin/pages/UpdateProductPage')
);

export const ErrorPage = createLoadableComponent(() => import('../pages/site-customer/pages/ErrorPage'));
