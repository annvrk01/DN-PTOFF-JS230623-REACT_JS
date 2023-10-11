import React from "react";
import Homepage from "../../pages/user/HomePage/homepage";
import MasterLayout from "../../pages/user/theme/masterlayout/MasterLayout";
import { Route, Routes } from "react-router-dom";
import ProductDetail from "../../pages/user/ProductPage/ProductDetail";
const renderUserRouter = () => {
    const userRouters = [
        {
            path: "/",
            component: <Homepage />
        },
        {
            path:"/chi-tiet-san-pham/:id",
            component:<ProductDetail/>
        }
    ]
    return (
                <Routes>
                    {userRouters.map((item, key) => (
                        <Route key={key} path={item.path} component={item.component} />
                        // <PrivateLayout path="/my-page" component={MyPage} exact />
                    ))}
                </Routes>

    )
}
const RouterCustom = () => {
    return renderUserRouter()

}
export default RouterCustom