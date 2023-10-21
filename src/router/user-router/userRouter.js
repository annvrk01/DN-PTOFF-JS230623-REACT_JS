import React from "react";
import Homepage from "../../pages/user/HomePage/homepage";
import { Route, Routes, Outlet, Router } from "react-router-dom";
import ProductDetail from "../../pages/user/ProductPage/ProductDetail";
import Header from "../../pages/user/theme/header/Header";
import Menubar from "../../component/menuBar/Menubar";
import Footer from "../../pages/user/theme/footer/Footer";
import LoginRegister from "../../pages/login-reg/LoginRegister";
import Cart from "../../pages/user/cart/Cart";
import CategoryPage from "../../pages/user/categoryPage/CategoryPage";
const renderUserRouter = () => {
    const userRouters = [
        {
            path: "/",
            component: <Homepage/>
        },
        {
            path: "/sanpham/:id/:title",
            component: <ProductDetail />
        },
        {
            path:"danh-muc-san-pham/:link",
            component:<CategoryPage/>
        },
        {
            path:"/gio-hang",
            component:<Cart/>
        }
    ]
    return (
        <Routes>
            <Route path="/" element={
                <>
                    <Header />
                    <Menubar />
                    <Outlet />
                    <Footer />
                </>
            } >
                {userRouters.map((item, key) => (
                    <Route key={key} path={item.path} element={item.component} />
                ))}

            </Route>
            <Route path="/" element={
                <>
                <Header/>
                <Menubar/>
                <Outlet/>
                <Footer/>
                </>
            }
            >
            <Route path="/them-vao-gio-hang" element={<Cart/>}/>
            </Route>
            <Route path="/dangnhap" element={<LoginRegister/>}/>
        </Routes>
    )
}
const RouterCustom = () => {
    return renderUserRouter()
}
export default RouterCustom