import React from "react";
import { BrowserRouter,Routes, Route } from 'react-router-dom'
import RouterCustom from "./router/user-router/userRouter";
import LoginRouterCustom from "./router/login-router/loginRouter";
import LoginRegister from "./pages/login-reg/LoginRegister";
function App() {
  return (
    <div>
      <BrowserRouter basename="/">
        <RouterCustom />
      </BrowserRouter>
      
      <BrowserRouter basename="/dangnhap">
        <Routes>
                <Route path='' element={<LoginRegister />} />
            </Routes>
      </BrowserRouter>
    </div>
  );
}
export default App; 
