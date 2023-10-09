import loadable from '@loadable/component';
import Loading from '../../pages/site-admin/components/atoms/Loading';

export const HomeAdminPage = loadable(() => import('../../pages/site-admin/pages/HomePage'), {
  fallback: <Loading />,
});
export const LoginAdminPage = loadable(() => import('../../pages/site-admin/pages/LoginPage'), {
  fallback: <Loading />,
});
export const RegisterAdminPage = loadable(
  () => import('../../pages/site-admin/pages/RegisterPage'),
  {
    fallback: <Loading />,
  }
);
export const UsersAdminPage = loadable(() => import('../../pages/site-admin/pages/UsersPage'), {
  fallback: <Loading />,
});
export const UpdateUserAdminPage = loadable(
  () => import('../../pages/site-admin/pages/UpdateUserPage'),
  {
    fallback: <Loading />,
  }
);
export const ProductAdminPage = loadable(() => import('../../pages/site-admin/pages/ProductPage'), {
  fallback: <Loading />,
});
export const UpdateProductAdminPage = loadable(
  () => import('../../pages/site-admin/pages/UpdateProductPage'),
  {
    fallback: <Loading />,
  }
);

export const ErrorPage = loadable(() => import('../../pages/site-customer/pages/ErrorPage'), {
  fallback: <Loading />,
});
