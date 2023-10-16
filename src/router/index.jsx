import React from "react";
import { BrowserRouter, Outlet, Route, Routes } from "react-router-dom";
import HomePage from "../pages/site-customer/pages/HomePage";
import Header from "../pages/site-customer/components/organisms/Header";
import Footer from "../pages/site-customer/components/organisms/Footer";
import ErrorsPage from "../pages/site-customer/pages/ErrorsPage";
import LoginPage from "../pages/site-customer/pages/LoginPage";
import RegisterPage from "../pages/site-customer/pages/RegisterPage";
import ProductPage from "../pages/site-customer/pages/ProductPage";
import NavBarHome from "../pages/site-admin/components/Navbar";
import USerManage from "../pages/site-admin/components/user-manager/UserManage";
import CreateUserForm from "../pages/site-admin/components/user-manager/CreateUser";
import ShowUserDetail from "../pages/site-admin/components/user-manager/ShowUser";
function AppRouter() {
  return (
    <BrowserRouter>
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
          <Route path="/" element={<HomePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/product" element={<ProductPage />} />
        </Route>
        <Route path="/admin">
          <Route path="/admin" element={<NavBarHome />} />
          <Route path="/admin/user" element={<USerManage />} />
          <Route path="/admin/user/add" element={<CreateUserForm />} />
          <Route path="/admin/user/edit/:id" element={<CreateUserForm />} />
          <Route path="/admin/user/detail/:id" element={<ShowUserDetail />} />
        </Route>
        <Route path="/*" element={<ErrorsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default AppRouter;
