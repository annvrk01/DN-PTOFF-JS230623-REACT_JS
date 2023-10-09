import React from 'react';

import CardList from '../../components/molecules/CardList';
import './styles.scss';

DetailPage.propTypes = {};

function DetailPage() {
  return (
    <>
      <main id="main" className="main">
        <div className="container md product">
          <ul className="product__breadcrumb">
            <li className="product__breadcrumb-item">
              <a href="#!" className="product__breadcrumb-link">
                Trang chủ
              </a>
            </li>
            <li className="product__breadcrumb-item">
              <a href="#!" className="product__breadcrumb-link">
                Thiết Bị Số - Phụ Kiện Số
              </a>
            </li>
            <li className="product__breadcrumb-item">
              <a href="#!" className="product__breadcrumb-link">
                Thiết Bị Âm Thanh và Phụ Kiện
              </a>
            </li>
            <li className="product__breadcrumb-item">
              <a href="#!" className="product__breadcrumb-link">
                Tai Nghe True Wireless
              </a>
            </li>
            <li className="product__breadcrumb-item product__breadcrumb-current">
              Tai Nghe Nhét Tai Bluetooth TWS V5.0 - Cảm Ứng 2 Bên , Có Mic - Hỗ Trợ Định Vị - Sạc Không Dây
            </li>
          </ul>

          <div className="product__info">
            <div className="product__info-image">
              <div className="product__info-image-main image-gallery__btn-open">
                <img src="" alt="" />
              </div>
              <div className="product__info-image-list"></div>
              <div className="product__info-social">
                <p>Chia sẻ:</p>
                <a href="#!" className="product__info-social-link">
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-facebook.svg"
                    alt=""
                    className="product__info-social-icon"
                  />
                </a>
                <a href="#!" className="product__info-social-link">
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-messenger.svg"
                    alt=""
                    className="product__info-social-icon"
                  />
                </a>
                <a href="#!" className="product__info-social-link">
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-pinterest.svg"
                    alt=""
                    className="product__info-social-icon"
                  />
                </a>
                <a href="#!" className="product__info-social-link">
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-twitter.svg"
                    alt=""
                    className="product__info-social-icon"
                  />
                </a>
                <a href="#!" className="product__info-social-link">
                  <img
                    src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/social-copy.svg"
                    alt=""
                    className="product__info-social-icon"
                  />
                </a>
              </div>
            </div>
            <div className="product__info-content">
              <h2 className="product__info--heading"></h2>
              <div className="product__info-rating">
                <div className="product__info-star"></div>
                <a href="#product-comment" className="product__info-watch-comment">
                  (Xem 4 đánh giá){' '}
                </a>
                <p className="product__info-sold"></p>
              </div>
              <div className="product__info-body">
                <div className="product__info-body-left">
                  <h4 className="product__info-price discount"></h4>
                  <p className="product__info-price--discount"></p>
                </div>
                <div className="product__info-body-right">
                  <div className="product__info-coupon">
                    <h4 className="product__info-coupon--title">1 Mã Giảm Giá</h4>
                    <div className="product__info-coupon-tags">
                      <div className="product__info-coupon-tag">Giảm 15K</div>
                      <img
                        className="product__info-coupon-icon"
                        src="https://salt.tikicdn.com/ts/upload/63/43/b6/472934eece91531f0855b86a00a3b1a1.png"
                        alt=""
                      />
                    </div>
                  </div>
                  <div className="product__info-address">
                    <span>Giao đến </span>
                    <span className="product__info-address-change">
                      <span className="underline">Q. Hải Châu, P. Hải Châu I, Đà Nẵng</span>-
                      <span className="button-change">Đổi địa chỉ</span>
                    </span>
                  </div>
                  <div className="product__info-delivery">
                    <div className="product__info-delivery-icon">
                      <img
                        src="https://salt.tikicdn.com/ts/upload/7f/30/d9/93a6fcd39c0045e628fdd5e48e7d26e5.png"
                        alt=""
                      />
                      <p className="product__info-delivery-time"></p>
                    </div>
                    <div className="product__info-delivery-price">
                      Vận chuyển: <span></span>
                    </div>
                  </div>
                  <div className="product__info-quantity">
                    <span>Số Lượng</span>
                    <div className="product__info-quantity-control">
                      <button className="product__info-quantity-btn product__info-quantity-btn--minus disable">
                        <img
                          src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-remove.svg"
                          alt=""
                        />
                      </button>
                      <input className="product__info-quantity-input" type="number" value="1" min="1" />
                      <button className="product__info-quantity-btn product__info-quantity-btn--plus">
                        <img
                          src="https://frontend.tikicdn.com/_desktop-next/static/img/pdp_revamp_v2/icons-add.svg"
                          alt=""
                        />
                      </button>
                    </div>
                  </div>
                  <div className="product__info-btn">
                    <button className="product__info-btn-buy">Chọn mua</button>
                    <div className="btn product__info-btn-chat">
                      <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M0 8.25C0 3.95165 4.15905 0.75 9 0.75C13.8409 0.75 18 3.95165 18 8.25C18 10.0141 17.2499 11.5969 16.0855 12.8642L16.4951 16.414C16.5254 16.6772 16.4147 16.9369 16.2037 17.0972C15.9927 17.2575 15.7128 17.2946 15.4674 17.1947L11.2797 15.4913C10.5273 15.6864 9.78118 15.75 9 15.75C4.15905 15.75 0 12.5483 0 8.25ZM9 2.25C4.69095 2.25 1.5 5.04835 1.5 8.25C1.5 11.4517 4.69095 14.25 9 14.25C9.77869 14.25 10.451 14.1792 11.1095 13.9816C11.2734 13.9325 11.4491 13.9408 11.6076 14.0053L14.8598 15.3282L14.5549 12.686C14.5287 12.4585 14.6078 12.2316 14.7697 12.0697C15.8609 10.9785 16.5 9.66018 16.5 8.25C16.5 5.04835 13.3091 2.25 9 2.25Z"
                          fill="#0d5cb6"
                        ></path>
                      </svg>
                      <span>Chat</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="product__detail">
            <h3 className="product__detail--heading">Thông Tin Chi Tiết</h3>
            <table className="product__detail-table">
              <tbody>
                <tr className="product__detail-table-row">
                  <td className="product__detail-item product__detail-label">Thời gian pin</td>
                  <td className="product__detail-item product__detail-value">
                    Thoải mái nghe nhạc, gọi điện lên đến 5 giờ (Âm lượng 70%), thời gian chờ 120 giờ
                  </td>
                </tr>
                <tr className="product__detail-table-row">
                  <td className="product__detail-item product__detail-label">Bluetooth</td>
                  <td className="product__detail-item product__detail-value">Có</td>
                </tr>
                <tr className="product__detail-table-row">
                  <td className="product__detail-item product__detail-label">Thương hiệu</td>
                  <td className="product__detail-item product__detail-value">OEM</td>
                </tr>
                <tr className="product__detail-table-row">
                  <td className="product__detail-item product__detail-label">Xuất xứ thương hiệu</td>
                  <td className="product__detail-item product__detail-value">China</td>
                </tr>
                <tr className="product__detail-table-row">
                  <td className="product__detail-item product__detail-label">Kích thước</td>
                  <td className="product__detail-item product__detail-value">60,6 * 45,2 * 21,7mm</td>
                </tr>
                <tr className="product__detail-table-row">
                  <td className="product__detail-item product__detail-label">Xuất xứ</td>
                  <td className="product__detail-item product__detail-value">China</td>
                </tr>
                <tr className="product__detail-table-row">
                  <td className="product__detail-item product__detail-label">Trọng lượng sản phẩm</td>
                  <td className="product__detail-item product__detail-value">32g</td>
                </tr>
                <tr className="product__detail-table-row">
                  <td className="product__detail-item product__detail-label">Sản phẩm có được bảo hành không?</td>
                  <td className="product__detail-item product__detail-value">Có</td>
                </tr>
                <tr className="product__detail-table-row">
                  <td className="product__detail-item product__detail-label">Thời gian bảo hành</td>
                  <td className="product__detail-item product__detail-value">6</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="product__description">
            <h3 className="product__description--heading">Mô tả sản phẩm</h3>
            <p className="product__description--title">
              Tai Nghe Nhét Tai Bluetooth TWS V5.0 Cảm Ứng 2 Bên , Có Mic - Hỗ Trợ Định Vị - Sạc Không Dây
            </p>
            <ul>
              <li>
                Sản phẩm có thiết kế in-ear, kiểu dáng thời trang, trẻ trung và hiện đại . Kích thước nhỏ gọn, Thuận
                tiện mang theo
              </li>
              <li>Kết nối không dây Bluetooth 5.0 không có độ trễ, chống nhiễu mạnh.</li>
              <li>Dễ dàng kết nối với các thiết bị bên ngoài, đường truyền ổn định lên đến 10 m</li>
              <li>
                Chất âm tai nghe cực tốt với dãy âm trầm cực sâu và âm treble trong trẻo , không bị lost, khả năng dồng
                bộ video và âm thanh tốt hơn, giảm độ méo âm và giảm độ trễ khi truyền từ thiết bị phát đến tai nghe.
                thích hợp với mọi thể loại nhạc như EDM, ballad
              </li>
              <li>Đàm thoại 2 tai chất lượng cuộc gọi HD cùng công nghệ chống ồn tiên tiến</li>
              <li>Hai tai nghe kết nối độc lập không phụ thuộc lẫn nhau</li>
              <li>Cảm ứng chạm dễ dàng điều khiển tai nghe.</li>
              <li>Tháo tai nghe tự dừng nhạc hoặc tự tùy chỉnh tính năng trong setting</li>
              <li>Mở nắp dock sạc, nhấn giữ nguồn là tự kết nối popup</li>
              <li>Tính năng đổi tên & định vị tai trong setting điện thoại</li>
              <li>Thoải mái nghe nhạc, gọi điện lên đến 5 giờ (Âm lượng 70%), thời gian chờ 120 giờ</li>
              <li>Hỗ trợ sạc nhanh, cho thời gian sử dụng đến 1 giờ chỉ với 5 phút sạc.</li>
              <li>Hộp sạc hỗ trợ sạc không dây chuẩn Qi, tiện lợi khi sử dụng</li>
              <li>Bản lề nhôm chống gập</li>
              <li>Chuẩn chống nước IPX5, bảo vệ tai nghe an toàn dưới mưa nhỏ và mồ hôi.</li>
              <li>
                Sản phẩm được tặng kèm 3 cặp eartip (có 3 kích thước: nhỏ, vừa, lớn) đảm bảo sử dụng vừa khít và thoải
                mái cho mọi người
              </li>
            </ul>
          </div>

          <div className="product__review">
            <h3 className="product__review--heading">Đánh Giá - Nhận Xét Từ Khách Hàng</h3>
            <div className="product__review-header product__review-row">
              <div className="product__review-rating">
                <div className="product__rating-summary">
                  <span className="product__rating-point">4.0</span>
                  <div className="product__rating-star">
                    <div className="product__rating-star-group">
                      <span className="product__rating-star">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path
                            d="M12 3L14.6198 8.81653L21 9.49342L16.239 13.7651L17.5623 20L12 16.8235L6.43769 20L7.761 13.7651L3 9.49342L9.38015 8.81653L12 3Z"
                            stroke="#FFA142"
                            fill="#FFD52E"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2L14.9109 8.50806L22 9.26543L16.71 14.045L18.1803 21.0211L12 17.467L5.81966 21.0211L7.29 14.045L2 9.26543L9.08906 8.50806L12 2ZM12 4.29426L9.72422 9.38228L4.18197 9.97439L8.31771 13.7111L7.16819 19.165L12 16.3864L16.8318 19.165L15.6823 13.7111L19.818 9.97439L14.2758 9.38228L12 4.29426Z"
                            fill="#FFA142"
                          ></path>
                        </svg>
                      </span>
                      <span className="product__rating-star">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path
                            d="M12 3L14.6198 8.81653L21 9.49342L16.239 13.7651L17.5623 20L12 16.8235L6.43769 20L7.761 13.7651L3 9.49342L9.38015 8.81653L12 3Z"
                            stroke="#FFA142"
                            fill="#FFD52E"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2L14.9109 8.50806L22 9.26543L16.71 14.045L18.1803 21.0211L12 17.467L5.81966 21.0211L7.29 14.045L2 9.26543L9.08906 8.50806L12 2ZM12 4.29426L9.72422 9.38228L4.18197 9.97439L8.31771 13.7111L7.16819 19.165L12 16.3864L16.8318 19.165L15.6823 13.7111L19.818 9.97439L14.2758 9.38228L12 4.29426Z"
                            fill="#FFA142"
                          ></path>
                        </svg>
                      </span>
                      <span className="product__rating-star">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path
                            d="M12 3L14.6198 8.81653L21 9.49342L16.239 13.7651L17.5623 20L12 16.8235L6.43769 20L7.761 13.7651L3 9.49342L9.38015 8.81653L12 3Z"
                            stroke="#FFA142"
                            fill="#FFD52E"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2L14.9109 8.50806L22 9.26543L16.71 14.045L18.1803 21.0211L12 17.467L5.81966 21.0211L7.29 14.045L2 9.26543L9.08906 8.50806L12 2ZM12 4.29426L9.72422 9.38228L4.18197 9.97439L8.31771 13.7111L7.16819 19.165L12 16.3864L16.8318 19.165L15.6823 13.7111L19.818 9.97439L14.2758 9.38228L12 4.29426Z"
                            fill="#FFA142"
                          ></path>
                        </svg>
                      </span>
                      <span className="product__rating-star">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path
                            d="M12 3L14.6198 8.81653L21 9.49342L16.239 13.7651L17.5623 20L12 16.8235L6.43769 20L7.761 13.7651L3 9.49342L9.38015 8.81653L12 3Z"
                            stroke="#FFA142"
                            fill="#FFD52E"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M12 2L14.9109 8.50806L22 9.26543L16.71 14.045L18.1803 21.0211L12 17.467L5.81966 21.0211L7.29 14.045L2 9.26543L9.08906 8.50806L12 2ZM12 4.29426L9.72422 9.38228L4.18197 9.97439L8.31771 13.7111L7.16819 19.165L12 16.3864L16.8318 19.165L15.6823 13.7111L19.818 9.97439L14.2758 9.38228L12 4.29426Z"
                            fill="#FFA142"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="product__rating-total">24 nhận xét</div>
                  </div>
                </div>
                <div className="product__rating-detail">
                  <div className="product__rating-level">
                    <div className="product__rating-level-stars">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#FFA142"
                            fill="#FFD52E"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#FFA142"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#FFA142"
                            fill="#FFD52E"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#FFA142"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#FFA142"
                            fill="#FFD52E"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#FFA142"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#FFA142"
                            fill="#FFD52E"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#FFA142"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#FFA142"
                            fill="#FFD52E"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#FFA142"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="product__rating-level-process">
                      <div className="product__rating-level-process-inner" style={{ width: '90%' }}></div>
                    </div>
                    <div className="product__rating-level-number">22</div>
                  </div>
                  <div className="product__rating-level">
                    <div className="product__rating-level-stars">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#FFA142"
                            fill="#FFD52E"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#FFA142"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#FFA142"
                            fill="#FFD52E"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#FFA142"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#FFA142"
                            fill="#FFD52E"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#FFA142"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#FFA142"
                            fill="#FFD52E"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#FFA142"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#DDDDE3"
                            fill="#DDDDE3"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#DDDDE3"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="product__rating-level-process">
                      <div className="product__rating-level-process-inner" style={{ width: 0 }}></div>
                    </div>
                    <div className="product__rating-level-number">0</div>
                  </div>
                  <div className="product__rating-level">
                    <div className="product__rating-level-stars">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#FFA142"
                            fill="#FFD52E"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#FFA142"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#FFA142"
                            fill="#FFD52E"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#FFA142"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#FFA142"
                            fill="#FFD52E"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#FFA142"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#DDDDE3"
                            fill="#DDDDE3"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#DDDDE3"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#DDDDE3"
                            fill="#DDDDE3"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#DDDDE3"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="product__rating-level-process">
                      <div className="product__rating-level-process-inner" style={{ width: 0 }}></div>
                    </div>
                    <div className="product__rating-level-number">0</div>
                  </div>
                  <div className="product__rating-level">
                    <div className="product__rating-level-stars">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#FFA142"
                            fill="#FFD52E"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#FFA142"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#FFA142"
                            fill="#FFD52E"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#FFA142"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#DDDDE3"
                            fill="#DDDDE3"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#DDDDE3"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#DDDDE3"
                            fill="#DDDDE3"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#DDDDE3"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#DDDDE3"
                            fill="#DDDDE3"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#DDDDE3"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="product__rating-level-process">
                      <div className="product__rating-level-process-inner" style={{ width: 0 }}></div>
                    </div>
                    <div className="product__rating-level-number">0</div>
                  </div>
                  <div className="product__rating-level">
                    <div className="product__rating-level-stars">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#FFA142"
                            fill="#FFD52E"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#FFA142"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#DDDDE3"
                            fill="#DDDDE3"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#DDDDE3"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#DDDDE3"
                            fill="#DDDDE3"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#DDDDE3"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#DDDDE3"
                            fill="#DDDDE3"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#DDDDE3"
                          ></path>
                        </svg>
                      </span>
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14">
                          <path
                            d="M7 1.75L8.52824 5.14298L12.25 5.53783L9.47275 8.02966L10.2447 11.6667L7 9.81372L3.75532 11.6667L4.52725 8.02966L1.75 5.53783L5.47176 5.14298L7 1.75Z"
                            stroke="#DDDDE3"
                            fill="#DDDDE3"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M6.99996 1.16675L8.69801 4.96312L12.8333 5.40491L9.74746 8.193L10.6052 12.2624L6.99996 10.1892L3.39476 12.2624L4.25246 8.193L1.16663 5.40491L5.30191 4.96312L6.99996 1.16675ZM6.99996 2.50507L5.67242 5.47308L2.43944 5.81848L4.85196 7.99821L4.18141 11.1797L6.99996 9.55882L9.81851 11.1797L9.14796 7.99821L11.5605 5.81848L8.3275 5.47308L6.99996 2.50507Z"
                            fill="#DDDDE3"
                          ></path>
                        </svg>
                      </span>
                    </div>
                    <div className="product__rating-level-process">
                      <div className="product__rating-level-process-inner" style={{ width: '20%' }}></div>
                    </div>
                    <div className="product__rating-level-number">2</div>
                  </div>
                </div>
              </div>
              <div>
                <div className="product__review-image">
                  <h3 className="product__review-image--heading">Tất cả hình ảnh (2)</h3>
                  <div className="product__review-image-list">
                    <img
                      src="https://source.unsplash.com/random/120x120?sig=1&products"
                      alt="picsum.photos"
                      className="product__review-image-item image-gallery__btn-open"
                      data-image-review="0"
                    />
                    <img
                      src="https://source.unsplash.com/random/120x120?sig=2&products"
                      alt="picsum.photos"
                      className="product__review-image-item image-gallery__btn-open"
                      data-image-review="1"
                    />
                  </div>
                </div>
                <div className="product__review-filter">
                  <span className="product__review-filter-label">Lọc xem theo :</span>
                  <div className="product__review-filter-tabs">
                    <label className="product__review-filter-tab" for="product-filter-1">
                      <input type="checkbox" id="product-filter-1" className="product__review-filter-checkbox" />
                      <span className="product__review-filter-text">Mới nhất</span>
                    </label>
                    <label className="product__review-filter-tab" for="product-filter-2">
                      <input type="checkbox" id="product-filter-2" className="product__review-filter-checkbox" />
                      <span className="product__review-filter-text">Có hình ảnh</span>
                    </label>
                    <label className="product__review-filter-tab" for="product-filter-3">
                      <input type="checkbox" id="product-filter-3" className="product__review-filter-checkbox" />
                      <span className="product__review-filter-text">Đã mua hàng</span>
                    </label>
                    <label className="product__review-filter-tab" for="product-filter-4">
                      <input type="checkbox" id="product-filter-4" className="product__review-filter-checkbox" />
                      <span className="product__review-filter-text">
                        5
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          className="filter-review__star"
                        >
                          <path
                            d="M10 2.5L12.1832 7.34711L17.5 7.91118L13.5325 11.4709L14.6353 16.6667L10 14.0196L5.36474 16.6667L6.4675 11.4709L2.5 7.91118L7.81679 7.34711L10 2.5Z"
                            stroke="#808089"
                            fill="none"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.99996 1.66675L12.4257 7.09013L18.3333 7.72127L13.925 11.7042L15.1502 17.5177L9.99996 14.5559L4.84968 17.5177L6.07496 11.7042L1.66663 7.72127L7.57418 7.09013L9.99996 1.66675ZM9.99996 3.57863L8.10348 7.81865L3.48494 8.31207L6.93138 11.426L5.97345 15.9709L9.99996 13.6554L14.0265 15.9709L13.0685 11.426L16.515 8.31207L11.8964 7.81865L9.99996 3.57863Z"
                            fill="#808089"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label className="product__review-filter-tab" for="product-filter-5">
                      <input type="checkbox" id="product-filter-5" className="product__review-filter-checkbox" />
                      <span className="product__review-filter-text">
                        4
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          className="filter-review__star"
                        >
                          <path
                            d="M10 2.5L12.1832 7.34711L17.5 7.91118L13.5325 11.4709L14.6353 16.6667L10 14.0196L5.36474 16.6667L6.4675 11.4709L2.5 7.91118L7.81679 7.34711L10 2.5Z"
                            stroke="#808089"
                            fill="none"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.99996 1.66675L12.4257 7.09013L18.3333 7.72127L13.925 11.7042L15.1502 17.5177L9.99996 14.5559L4.84968 17.5177L6.07496 11.7042L1.66663 7.72127L7.57418 7.09013L9.99996 1.66675ZM9.99996 3.57863L8.10348 7.81865L3.48494 8.31207L6.93138 11.426L5.97345 15.9709L9.99996 13.6554L14.0265 15.9709L13.0685 11.426L16.515 8.31207L11.8964 7.81865L9.99996 3.57863Z"
                            fill="#808089"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label className="product__review-filter-tab" for="product-filter-6">
                      <input type="checkbox" id="product-filter-6" className="product__review-filter-checkbox" />
                      <span className="product__review-filter-text">
                        3
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          className="filter-review__star"
                        >
                          <path
                            d="M10 2.5L12.1832 7.34711L17.5 7.91118L13.5325 11.4709L14.6353 16.6667L10 14.0196L5.36474 16.6667L6.4675 11.4709L2.5 7.91118L7.81679 7.34711L10 2.5Z"
                            stroke="#808089"
                            fill="none"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.99996 1.66675L12.4257 7.09013L18.3333 7.72127L13.925 11.7042L15.1502 17.5177L9.99996 14.5559L4.84968 17.5177L6.07496 11.7042L1.66663 7.72127L7.57418 7.09013L9.99996 1.66675ZM9.99996 3.57863L8.10348 7.81865L3.48494 8.31207L6.93138 11.426L5.97345 15.9709L9.99996 13.6554L14.0265 15.9709L13.0685 11.426L16.515 8.31207L11.8964 7.81865L9.99996 3.57863Z"
                            fill="#808089"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label className="product__review-filter-tab" for="product-filter-7">
                      <input type="checkbox" id="product-filter-7" className="product__review-filter-checkbox" />
                      <span className="product__review-filter-text">
                        2
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          className="filter-review__star"
                        >
                          <path
                            d="M10 2.5L12.1832 7.34711L17.5 7.91118L13.5325 11.4709L14.6353 16.6667L10 14.0196L5.36474 16.6667L6.4675 11.4709L2.5 7.91118L7.81679 7.34711L10 2.5Z"
                            stroke="#808089"
                            fill="none"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.99996 1.66675L12.4257 7.09013L18.3333 7.72127L13.925 11.7042L15.1502 17.5177L9.99996 14.5559L4.84968 17.5177L6.07496 11.7042L1.66663 7.72127L7.57418 7.09013L9.99996 1.66675ZM9.99996 3.57863L8.10348 7.81865L3.48494 8.31207L6.93138 11.426L5.97345 15.9709L9.99996 13.6554L14.0265 15.9709L13.0685 11.426L16.515 8.31207L11.8964 7.81865L9.99996 3.57863Z"
                            fill="#808089"
                          ></path>
                        </svg>
                      </span>
                    </label>
                    <label className="product__review-filter-tab" for="product-filter-8">
                      <input type="checkbox" id="product-filter-8" className="product__review-filter-checkbox" />
                      <span className="product__review-filter-text">
                        1
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="20"
                          height="20"
                          viewBox="0 0 20 20"
                          className="filter-review__star"
                        >
                          <path
                            d="M10 2.5L12.1832 7.34711L17.5 7.91118L13.5325 11.4709L14.6353 16.6667L10 14.0196L5.36474 16.6667L6.4675 11.4709L2.5 7.91118L7.81679 7.34711L10 2.5Z"
                            stroke="#808089"
                            fill="none"
                          ></path>
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M9.99996 1.66675L12.4257 7.09013L18.3333 7.72127L13.925 11.7042L15.1502 17.5177L9.99996 14.5559L4.84968 17.5177L6.07496 11.7042L1.66663 7.72127L7.57418 7.09013L9.99996 1.66675ZM9.99996 3.57863L8.10348 7.81865L3.48494 8.31207L6.93138 11.426L5.97345 15.9709L9.99996 13.6554L14.0265 15.9709L13.0685 11.426L16.515 8.31207L11.8964 7.81865L9.99996 3.57863Z"
                            fill="#808089"
                          ></path>
                        </svg>
                      </span>
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <CardList />
        </div>
      </main>
      <div className="image-gallery">
        <button className="image-gallery__btn image-gallery__btn-prev">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g id="feArrowLeft0" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                <g id="feArrowLeft1" fill="currentColor">
                  <path id="feArrowLeft2" d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z" />
                </g>
              </g>
            </svg>
          </span>
          <span>Xem ảnh sau</span>
        </button>
        <div className="image-gallery__wrapper">
          <div className="image-gallery__list"></div>
        </div>
        <button className="image-gallery__btn image-gallery__btn-next">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <g transform="rotate(180 12 12)">
                <g id="feArrowLeft0" fill="none" fillRule="evenodd" stroke="none" strokeWidth="1">
                  <g id="feArrowLeft1" fill="currentColor">
                    <path id="feArrowLeft2" d="m15 4l2 2l-6 6l6 6l-2 2l-8-8z" />
                  </g>
                </g>
              </g>
            </svg>
          </span>
          <span>Xem ảnh trước</span>
        </button>
        <button className="image-gallery__btn image-gallery__btn-close">
          <span>
            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
              <path
                fill="white"
                d="m13.41 12l4.3-4.29a1 1 0 1 0-1.42-1.42L12 10.59l-4.29-4.3a1 1 0 0 0-1.42 1.42l4.3 4.29l-4.3 4.29a1 1 0 0 0 0 1.42a1 1 0 0 0 1.42 0l4.29-4.3l4.29 4.3a1 1 0 0 0 1.42 0a1 1 0 0 0 0-1.42Z"
              />
            </svg>
          </span>
          <span>Đóng</span>
        </button>
      </div>
    </>
  );
}

export default DetailPage;
