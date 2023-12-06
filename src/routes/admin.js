import { Routes, Route } from "react-router-dom";
import AdminHome from "../components/organisms/admin";
import HomeCopy from "../components/organisms/admin/homeCopy/homeCopy";
import Services from "../components/organisms/admin/services/service";
import LineChart from "../components/organisms/admin/charts/lineChart";
import { PieChart } from "react-minimal-pie-chart";
import Search from "../components/organisms/admin/search/search";
import UserManagement from "../components/organisms/admin/CurdTable/userManagement";
import ProductManagement from "../components/organisms/admin/CurdTable/productManagement";
import SideNav, { NavItem, NavIcon, NavText } from "@trendmicro/react-sidenav";

import homeicon from "./home.png";
import serviceicon from "./liquidity.png";
import assisticon from "./CustAssist_n.png";
import searchicon from "./magnifying-glass-2.png";
import addUsericon from "./user.png";
import Chart from 'chart.js/auto';

function RoutesForAdmin() {
  return (
    <Routes>      
      <Route path="/admin/home" element={<HomeCopy/>} />
      <Route path="/admin/Services" element={<Services />} />
      <Route path="/admin/LineChart" element={<LineChart />} />
      <Route path="/admin/PieChart" element={<PieChart />} />
      <Route path="/admin/Search" element={<Search />} />
      <Route path="/admin/AddUser" element={<UserManagement />} />
      <Route path="/admin/AddProduct" element={<ProductManagement />} />
    </Routes>
  );
}
export default RoutesForAdmin