import React from 'react';
import BackgroundForm from '../../../../assets/images/bg-form-1.png';
import { Link } from 'react-router-dom';
import './styles.scss';

LoginPage.propTypes = {};

function LoginPage() {
  return (
    <div className="form form__login">
      <form action="" id="form" className="form__main">
        <h3 className="form__main--heading">Xin chào,</h3>
        <p className="form__main--text">Đăng nhập</p>

        <input type="hidden" className="form__input form__input-name" name="name" placeholder="Tên tài khoản" />
        <input type="text" className="form__input form__input-email" name="email" placeholder="Email" />
        <span className="form__message-valid"></span>
        <input type="password" className="form__input form__input-password" name="password" placeholder="Mật khẩu" />
        <span className="form__message-valid"></span>
        <button className="form__btn-submit form__btn-login">Đăng nhập</button>
        <Link href="/forgot-password" className="form__btn-forgot-password">
          Quên mật khẩu
        </Link>
        <Link to="/register" className="form__btn-switch">
          Đăng ký
        </Link>

        <div className="form__footer">
          <p className="form__text-line">
            <span>Hoặc tiếp tục bằng</span>
          </p>

          <div className="form__login-other">
            <div id="sign-in" className="form__btn-google" dataWidth="300"></div>
            <div
              className="fb-login-button"
              dataWidth="300"
              dataSize="large"
              dataButton-type=""
              dataLayout=""
              dataAutoLogoutLink="false"
              dataUseContinueAs="false"
              dataOnlogin="checkLoginState()"
            ></div>
          </div>

          <p className="form__footer-rules">
            Bằng việc tiếp tục, bạn đã chấp nhận <a href="#!">điều khoản sử dụng</a>
          </p>
        </div>
      </form>
      <div className="form__thumbnail">
        <img src={BackgroundForm} alt="" />
        <h4>Mua sắm tại Tiki</h4>
        <p>Siêu ưu đãi mỗi ngày</p>
      </div>
    </div>
  );
}

export default LoginPage;
