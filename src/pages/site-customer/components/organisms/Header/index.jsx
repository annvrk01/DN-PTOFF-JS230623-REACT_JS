import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Header() {
  return (
    <div className="header">
      <Link to="/">
        <img
          src=" https://spiritstore.co.uk/skin/frontend/spirittheme/porto/images/new-logo-svg.svg"
          className="logo"
        />
      </Link>
      <div className="search">
        <input type="text" placeholder=" Search Courses" name="search" />
        <button>
          <i className="fa fa-search"></i>
        </button>
      </div>
      <div className="cart-area">
        <Link to="/" className="img-icon">
          <i className="fa-solid fa-phone"></i>
        </Link>
        <Link to="/login" className="img-icon">
          <i className="fa-regular fa-user"></i>
        </Link>
        <Link to="/" className="img-icon">
          <i className="fa-solid fa-cart-shopping"></i>
        </Link>
      </div>

      {/* <div className="menu-wrapper">
        <ul className="header-menu">
          <li>
            <Link to="/" className="header-link">
              TRANG CHỦ
            </Link>
          </li>
          <li>
            <Link to="/product" className="header-link">
              RƯỢU VANG
            </Link>
          </li>
          <li>
            <a href="" className="header-link">
              RƯỢU MẠNH
            </a>
          </li>
          <li>
            <a href="" className="header-link">
              RƯỢU PHA CHẾ
            </a>
          </li>
          <li>
            <a href="" className="header-link">
              KHUYẾN MÃI
            </a>
          </li>

          <li>
            <Link to="/login" className="btn-login">
              <span className="header-title"> Login </span>
              <span>
                <i className="fa-regular fa-user"></i>
              </span>
            </Link>
          </li>

          <li>
            <Link to="/register" className="btn-register">
              <span className="header-title"> Register </span>
              <span>
                <i className="fa-regular fa-pen-to-square"></i>
              </span>
            </Link>
          </li>
        </ul>
      </div> */}
    </div>
  );
}

export default Header;
