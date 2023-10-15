import React from 'react';
import LoginRegister from '../../pages/login-reg/LoginRegister';
import { Routes, Route } from 'react-router-dom';
const RenderLoginRouter = () => {
    return (
            <Routes>
                <Route path='/dangnhap' Component={<LoginRegister />} />
            </Routes>
    );
};
const LoginRouterCustom = () => {
    return RenderLoginRouter()
}

export default LoginRouterCustom;