import React from "react";
import "./style.scss";
import { Link } from "react-router-dom";
function LoginPage() {
  return (
    <div className="login">
      <h3> Login </h3>
      <div>
        <div className="container">
          <label htmlFor="uname">
            <b>Username</b>
          </label>
          <input
            id="name"
            type="text"
            placeholder="Enter Username"
            name="uname"
            required
          />

          <label htmlFor="psw">
            <b>Password</b>
          </label>
          <input
            id="password"
            type="password"
            placeholder="Enter Password"
            name="psw"
            required
          />

          <button id="myLogin"> Login </button>
          <label>
            <input type="checkbox" checked="checked" name="remember" /> Remember
            me
          </label>
        </div>

        <div className="container" style={{ backgroundColor: "#f1f1f1" }}>
          <Link to="/register" className="registerbtn">
            Create an Account
          </Link>
          <span className="psw">
            Forgot <a href="#">password?</a>
          </span>
        </div>
      </div>

      <div className="header-row">
        <div>
          <p>
            {" "}
            Hệ thống hầm rượu WINECELLAR.vn với đội ngũ tư vấn viên và đội ngũ
            bán hàng tận tâm sẽ luôn hỗ trợ quý khách khi liên hệ với chúng tôi.
            Chúng tôi cam kết sẽ luôn đáp ứng nhanh chóng nhu cầu lựa chọn rượu
            vang để uống hàng ngày, chọn quà tặng cá nhân và quà tặng doanh
            nghiệp, quà tặng Tết và mọi nhu cầu về rượu vang, bia, whisky, phụ
            kiện và ly pha lê rượu vang.
          </p>
        </div>
        <div>
          <img
            width="60%"
            src="https://winecellar.vn/wp-content/uploads/2018/07/winecellar-dia-diem-mua-ruou-vang-uy-tin.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default LoginPage;
