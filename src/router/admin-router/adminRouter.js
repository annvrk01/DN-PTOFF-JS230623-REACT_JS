import React from "react";
import Homepage from "../../pages/user/HomePage/homepage";
import MasterLayout from "../../pages/user/theme/masterlayout/MasterLayout";
import { Route, Routes } from "react-router-dom";
const renderAdminRouter = () => {
    const adminRouters = [
        {
            path: "/",
            component: <Homepage/>
        }
    ]
        return (
                <MasterLayout>
                    <Routes>
                        {adminRouters.map((item, key) => (
                            <Route key={key} path={item.path} element={item.component} />
                        ))}
                    </Routes>
                </MasterLayout>
        )
}
const AdminRouterCustom = () => {
    return renderAdminRouter()
}
export default AdminRouterCustom