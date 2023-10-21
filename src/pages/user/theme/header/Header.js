import React, { Component } from 'react';
import { Link } from 'react-router-dom';
const Header = () => {
        return (
            <div>
                <header>
                    <div className="header-heading" />
                    <div className="header-wrapper">
                        <div className="logo">
                        
                        <Link to={"/"}>
                                <img src="/assets/img/logoDO.png" alt="" />
                                </Link>
                        </div>
                        <div className="search">
                            <input type="text" placeholder="Tìm tên thuốc, thực phẩm,..." />
                            <i className="fa-solid fa-magnifying-glass" />
                        </div>
                        <div className="right-side">
                            <div className="login">
                                <i className="fa-solid fa-user" />
                                <Link to = "/dangnhap">Đăng nhập</Link>
                            </div>
                            <div className="cart">
                                <i className="fa-solid fa-cart-shopping" />
                                <a href="">Giỏ hàng</a>
                            </div>
                        </div>
                        <div className="header-foot"></div>
                    </div>
                </header>
            </div>
        );
}

export default Header;