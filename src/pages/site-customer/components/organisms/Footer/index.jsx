import React from "react";
import "./style.css";

function Footer() {
  return (
    <div className="footer">
      <h4>HỆ THỐNG SPIRIT STORE</h4>
      <div className="footer-main">
        <div className="itmem">
          <h5>
            <span>TP. HÀ NỘI</span>
          </h5>
          <p>Số 78 Vũ Phạm Hàm, Yên Hòa, Cầu Giấy</p>

          <p> Số 43 Phan Chu Trinh, Hoàn Kiếm</p>

          <p>Số 88 Đào Tấn, Ba Đình</p>

          <p>Số 246 Hoàng Ngân, Cầu Giấy</p>
        </div>
        <div className="item">
          <h5>
            <span>TP. HỒ CHÍ MINH</span>
          </h5>
          <p>Số 188 Nguyễn Văn Thủ, Quận 1, TP Hồ Chí Minh</p>

          <p>Số 253 Nam Kì Khởi Nghĩa, Quận 3, TP Hồ Chí Minh</p>

          <p> Số 58 Song Hành, An Phú, TP Thủ Đức</p>
        </div>
        <div className="item">
          <h5>
            <span> TP. ĐÀ NẴNG </span>
          </h5>
          <p> Số 172 Nguyễn Văn Linh, Vĩnh Trung, Thanh Khê</p>
          <h5>
            <span>NHA TRANG</span>
          </h5>
          <p>
            Số 15 Hai Bà Trưng, Phường Xương Huân, Thành phố Nha Trang, Tỉnh
            Khánh Hòa
          </p>
        </div>
        <div className="item">
          <h5>
            <span>HOTLINE</span>
          </h5>
          <div className="item-contact">
            <p>
              <a> 0935 555 254</a>
            </p>
            <p>
              <a>0932 489 729</a>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
