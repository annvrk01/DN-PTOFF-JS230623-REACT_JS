import { Routes, Route } from "react-router-dom";
import AdminHome from "../components/organisms/admin";

function RoutesForAdmin() {
  return (
    <Routes>
      <Route path="/admin" element={<AdminHome />} /> 
      <Route path="/admin/product" element={<AdminHome />} />
      <Route path="/admin/user" element={<AdminHome />} />
    </Routes>
  );
}
export default RoutesForAdmin