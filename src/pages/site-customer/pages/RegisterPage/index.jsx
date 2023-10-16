import React, { useRef, useState } from "react";
import "./style.scss";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function RegisterPage() {
  const inputNameRef = useRef(null);
  const inputMailRef = useRef(null);
  const inputPasswordRef = useRef(null);
  const [error, setError] = useState({});
  const navigation = useNavigate();
  // useEffect(() => {
  //   // truong hop them moi
  //   inputNameRef.current.value = "";
  //   inputMailRef.current.value = "";
  //   inputPasswordRef.current.value = "";
  // }, []);

  const handleSubmit = () => {
    const users = {
      name: inputNameRef.current.value,
      mail: inputMailRef.current.value,
      password: inputPasswordRef.current.value,
    };
    const newError = {};

    if (!inputNameRef.current.value) {
      newError.name = "truong ban nhap nay khong duoc rong";
    }
    if (!/^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(inputMailRef.current.value)) {
      newError.mail = "email khong hop le";
    }
    if (
      !/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/.test(
        inputPasswordRef.current.value
      )
    ) {
      newError.password =
        "mat khau toi thieu co 8 ki tu bao gom it nhat 1 so va 1 chu";
    }
    console.log(
      /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/.test(inputMailRef.current.value)
    );

    setError(newError);
    axios.post(`http://localhost:3000/users`, users).then((res) => {
      navigation("/");
      console.log("res", res);
      console.log(res.data);
    });
  };
  console.log(error);
  return (
    <div className="register">
      <div>
        <h3>
          <span>LIÊN HỆ VỚI CHÚNG TÔI</span>
        </h3>
      </div>
      <section>
        <div className="main-row">
          <div>
            <h2> Thông tin liên hệ </h2>
            <p>
              <strong> Hầm rượu vang WINECELLAR.vn </strong>
            </p>
            <p>
              <strong> Adress:</strong> Số 172 Nguyễn Văn Linh, Đà Nẵng
            </p>
            <p>
              <strong> Hotline: </strong>
              <a href="" style={{ textDecoration: "none" }}>
                0935 555 254
              </a>
            </p>

            <p>
              <strong> Email: </strong> info@winecellar.vn
            </p>
            <button> HỆ THỐNG CỬA HÀNG </button>
            <button> NHẮN TIN FACEBOOK </button>
          </div>

          <div className="input">
            <h2> ĐĂNG KÝ THÀNH VIÊN </h2>
            <p className="input-main">Full Name </p>
            <input
              ref={inputNameRef}
              type="text"
              id="name"
              className="input-size"
            />
            <small style={{ display: "block", color: "red" }}>
              {error.name}
            </small>
            <p className="input-main"> Email </p>
            <input
              ref={inputMailRef}
              type="text"
              id="email"
              className="input-size"
            />
            <small style={{ display: "block", color: "red" }}>
              {error.mail}
            </small>
            <p className="input-main"> Password </p>
            <input
              ref={inputPasswordRef}
              type="text"
              id="password"
              className="input-size"
            />
            <small style={{ display: "block", color: "red" }}>
              {error.password}
            </small>
            <p className="input-main"> Confirm Password </p>
            <input
              ref={inputPasswordRef}
              type="text"
              id="password"
              className="input-size"
            />
            <small style={{ display: "block", color: "red" }}>
              {error.password}
            </small>
            <br />
            <input
              onClick={handleSubmit}
              type="submit"
              id="myRegister"
              value="Submit"
              className="input-submit"
            />
          </div>
        </div>
      </section>

      <h3>
        <span></span>
      </h3>
      <section className="color">
        <div className="main-row">
          <div>
            <img
              width="80%"
              src="https://winecellar.vn/wp-content/uploads/2022/04/f1.png"
            />
          </div>
          <div>
            <h3>
              <span>TRỞ THÀNH ĐỐI TÁC</span>
            </h3>
            <p>
              Công ty TNHH Hầm Rượu Việt Nam WINECELLAR.vn tự hào là nhà cung
              cấp uy tín lâu năm cho các hệ thống khách sạn 5 sao, khách sạn nhà
              hàng và các hệ thống siêu thị, cửa hàng tiện lợi, đại lý bán buôn
              bán lẻ rượu vang, bia nhập khẩu trên toàn quốc. Chúng tôi cam kết
              luôn đáp ứng nhu cầu của các đối tác về đa dạng chủng loại, số
              lượng sản phẩm lớn, giá cả cạnh tranh tốt nhất và thời gian giao
              hàng linh hoạt, nhanh chóng. Liên hệ ngay để nhận chính sách đặc
              biệt cho đối tác.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default RegisterPage;
