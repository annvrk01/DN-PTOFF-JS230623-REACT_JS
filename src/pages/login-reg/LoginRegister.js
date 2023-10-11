import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { setName, setEmail, setLoading, setError } from '../../redux/action/userAction';
// import axios from 'axios';
import "../../styles/login-register/loginReg.css"
function LoginRegister() {
  // const dispatch = useDispatch();
  // const { name, email, loading, error } = useSelector((state) => state.user);

  // useEffect(() => {
  //   dispatch(setLoading(true));

  //   const postData = {
  //     username: 'your_username_here',
  //     email: 'your_email_here',
  //     password: 'your_password_here'
  //   };

  //   axios
  //     .post('http://localhost:3000/users', postData)
  //     .then((response) => {
  //       console.log(response.data);
  //       dispatch(setName(response.data.name));
  //       dispatch(setEmail(response.data.email));
  //       dispatch(setLoading(false));
  //     })
  //     .catch((error) => {
  //       dispatch(setError(error.message));
  //       dispatch(setLoading(false));
  //     });
  // }, []);


  // if (loading) {
  //   return <div>Loading...</div>;
  // }

  // if (error) {
  //   return <div>Error: {error}</div>;
  // }
  return (
    <div className="container bbbbbbbbbb aaaaaaaaaaaaaa">
      <div className="login-container">
        <div className="cover">
          <img src="/assets/img/login.png" alt="" />
        </div>
        <div className="login-form">
          <div className="logo">
            <img src="/assets/img/LogoDO.png" alt="" />
          </div>
          <div className="title">
            <h2>Đăng nhập</h2>
          </div>
          <form action="" id="login-form">
            <div className="form-control">
              <input
                type="email"
                name="email"
                id="login-email"
                placeholder="Email"
              />
              <small />
            </div>
            <div className="form-control">
              <input
                type="password"
                name="pswd"
                id="login-pswd"
                placeholder="Password"
              />
              <small />
            </div>
            <div className="button">
              <button type="submit" className="login-btn">
                Đăng nhâp
              </button>
            </div>
            <div className="forgot-pass">
              <div className="remember">
                <input type="checkbox" />
                Ghi nhớ mật khẩu
              </div>
              <div className="forgot">
                <a href="#">Quên mật khẩu?</a>
              </div>
            </div>
            <div className="line">
              <span>Hoặc</span>
            </div>
            <div className="link">
              <p>
                Bạn chưa có tài khoản? <a className="register-link">Đăng ký</a>
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default LoginRegister;
