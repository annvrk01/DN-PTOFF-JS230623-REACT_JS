// AppRouter.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom';
import { screenUrl } from '../constants/screen/screenUrl';
import { Box, Stack } from '@mui/material';
import Header from '../pages/site-customer/components/organisms/Header';
import Footer from '../pages/site-customer/components/organisms/Footer';
import SidebarAdmin from '../pages/site-admin/components/organisms/SidebarAdmin';
import HeaderAdmin from '../pages/site-admin/components/organisms/HeaderAdmin';
import { CartPage, DetailPage, HomePage, LoginPage, RegisterPage } from './customer';
import {
  ErrorPage,
  HomeAdminPage,
  LoginAdminPage,
  ProductAdminPage,
  RegisterAdminPage,
  UpdateProductAdminPage,
  UpdateUserAdminPage,
  UsersAdminPage,
} from './admin';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Header />
              <Outlet />
              <Footer />
            </>
          }
        >
          <Route path={screenUrl.HOME} element={<HomePage />} />
          <Route path={screenUrl.LOGIN} element={<LoginPage />} />
          <Route path={screenUrl.REGISTER} element={<RegisterPage />} />
          <Route path={screenUrl.DETAILS} element={<DetailPage />} />
          <Route path={screenUrl.CART} element={<CartPage />} />
        </Route>

        <Route
          path="/admin"
          element={
            <Stack direction="row">
              <SidebarAdmin />
              <Box sx={{ width: '100%', ml: '280px' }}>
                <HeaderAdmin />
                <Outlet />
              </Box>
            </Stack>
          }
        >
          <Route path={screenUrl.ADMIN_HOME} element={<HomeAdminPage />} />
          <Route path={screenUrl.ADMIN_USERS} element={<UsersAdminPage />} />
          <Route path={screenUrl.ADMIN_CREATE_USER} element={<UpdateUserAdminPage />} />
          <Route path={screenUrl.ADMIN_EDIT_USER} element={<UpdateUserAdminPage />} />
          <Route path={screenUrl.ADMIN_PRODUCT} element={<ProductAdminPage />} />
          <Route path={screenUrl.ADMIN_CREATE_PRODUCT} element={<UpdateProductAdminPage />} />
          <Route path={screenUrl.ADMIN_EDIT_PRODUCT} element={<UpdateProductAdminPage />} />
        </Route>
        <Route path={screenUrl.ADMIN_LOGIN} element={<LoginAdminPage />} />
        <Route path={screenUrl.ADMIN_REGISTER} element={<RegisterAdminPage />} />

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
