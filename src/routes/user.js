import React from "react";
import { Routes,  Route } from "react-router-dom";

import Home from './../components/molecules/home';

import StudentManage from './../pages/site-admin/student-management/StudentManage'
import CreateStudentForm from './../pages/site-admin/student-management/CreateStudentForm'
import ShowStudentDetail from './../pages/site-admin/student-management/ShowStudentDetail'

import MyComponent from './../components/molecules/example/MyComponent'
import User from "./../pages/site-admin/user/index";
import UserAdd from "./../pages/site-admin/user/add";

import Sanpham from "../pages/site-admin/sanpham";
import SanphamAdd from "../pages/site-admin/sanpham/add";
// import history from "./history"

import TrangChu from "../pages/site-user/trangchu";
import DangNhap from "../pages/site-user/trangchu/dangnhap/index";
import DangKi from "../pages/site-user/trangchu/dangki/index";

function RoutesUser() {
    return (
        <Routes  >
                <Route path="/" element={<TrangChu />} />
                <Route path="/dangnhap" element={<DangNhap />} />
                <Route path="/dangki" element={<DangKi />} />
          </Routes>
      );
    }
  export default RoutesUser