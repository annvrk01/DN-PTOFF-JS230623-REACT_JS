import loadable from '@loadable/component';

export const HomePage = loadable(() => import('../../pages/site-customer/pages/HomePage'), {
  fallback: <p>Loading HomePage</p>,
});
export const LoginPage = loadable(() => import('../../pages/site-customer/pages/LoginPage'), {
  fallback: <p>Loading LoginPage</p>,
});
export const DetailPage = loadable(() => import('../../pages/site-customer/pages/DetailPage'), {
  fallback: <p>Loading DetailPage</p>,
});
export const RegisterPage = loadable(() => import('../../pages/site-customer/pages/RegisterPage'), {
  fallback: <p>Loading RegisterPage</p>,
});
export const CartPage = loadable(() => import('../../pages/site-customer/pages/CartPage'), {
  fallback: <p>Loading CartPage</p>,
});
