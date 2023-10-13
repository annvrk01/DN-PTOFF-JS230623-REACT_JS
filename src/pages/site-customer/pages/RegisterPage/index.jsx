import React, { useState } from 'react';
import BackgroundForm from '../../../../assets/images/bg-form-1.png';
import { Link, useNavigate } from 'react-router-dom';
import { v4 as uuidv4 } from 'uuid';
import { imageUrl } from '../../../../constants/images';
import { useDispatch } from 'react-redux';
import { addUser, getUsers } from '../../../../api/userApi';
import googleIcon from '../../../../assets/images/google-icon.png';
import facebookIcon from '../../../../assets/images/facebook-icon.png';
import md5 from 'md5';
import moment from 'moment/moment';
import validateField from '../../../../utils/validateField';
import { FacebookAuth, GoogleAuth } from '../../../../firebase/auth';
import './styles.scss';
import { addUserCurrent } from '../../../../redux/slice/userSlice';

function RegisterPage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  atob;
  const [user, setUser] = useState({
    id: uuidv4(),
    fullName: '',
    email: '',
    password: '',
    country: '',
    state: '',
    address: '',
    phone: '',
    dayOfBirth: '2023-01-01',
    gender: 'female',
    order: 0,
    spent: 0,
    avatar: imageUrl.AVATAR_DEFAULT,
    isPublic: true,
    createdAt: moment().format(),
    token: '',
  });
  const [errorMessage, setErrorMessage] = useState({
    fullName: '',
    email: '',
    address: '',
    userExists: '',
  });

  const handleOnChange = (e) => {
    const { name, value } = e.target;

    setUser((prevUser) => ({
      ...prevUser,
      [name]: value,
    }));

    setErrorMessage((prevErrors) => ({
      ...prevErrors,
      [name]: validateField(value, name),
    }));
  };

  const handleSubmit = async () => {
    const fieldsToValidate = ['fullName', 'email', 'password'];

    const newErrors = {};
    for (const key of fieldsToValidate) {
      const error = validateField(user[key], key);
      newErrors[key] = error;
    }

    setErrorMessage(newErrors);

    const hasErrors = Object.values(newErrors).some((error) => error !== '');

    const users = await dispatch(getUsers());
    const userExists = users.payload.some(({ email }) => email === user.email);

    if (!hasErrors) {
      if (!userExists) {
        setErrorMessage({ ...errorMessage, userExists: '' });
        const { fullName, email, avatar } = user;
        const token = btoa(unescape(encodeURIComponent(JSON.stringify({ fullName, email }))));
        const dataUser = { fullName, email, avatar };

        dispatch(addUserCurrent({ token, dataUser }));
        dispatch(addUser({ ...user, password: md5(user.password), token }));
        navigate('/');
      } else {
        setErrorMessage({ ...errorMessage, userExists: 'Tài khoản đã tồn tại' });
      }
    } else {
      console.log('Form has errors');
    }
  };

  const handleLogin = async (authProvider) => {
    try {
      const data = await authProvider();
      const users = await dispatch(getUsers());
      const userExists = users.payload.some((user) => user.id === data.id);

      if (!userExists) await dispatch(addUser({ ...user, ...data, password: '' }));

      const { token, fullName, email, avatar } = data;
      await dispatch(addUserCurrent({ token, dataUser: { fullName, email, avatar } }));
      navigate('/');
    } catch (error) {
      console.log(error);
    }
  };

  const handleLoginFacebook = () => handleLogin(FacebookAuth);
  const handleLoginGoogle = () => handleLogin(GoogleAuth);

  return (
    <div className="form form-regiter">
      <div id="form" className="form__main">
        <h3 className="form__main--heading">Xin chào,</h3>
        <p className="form__main--text">Tạo tài khoản</p>

        <input
          type="text"
          className={`form__input ${!!errorMessage.fullName && 'error'}`}
          name="fullName"
          placeholder="Tên tài khoản"
          onChange={handleOnChange}
        />
        <span className="form__message-valid">{errorMessage.fullName}</span>
        <input
          type="email"
          className={`form__input ${!!errorMessage.email && 'error'}`}
          name="email"
          placeholder="Email"
          onChange={handleOnChange}
        />
        <span className="form__message-valid">{errorMessage.email}</span>
        <input
          type="password"
          className={`form__input ${(!!errorMessage.password || !!errorMessage.userExists) && 'error'}`}
          name="password"
          placeholder="Mật khẩu"
          onChange={handleOnChange}
        />
        <span className="form__message-valid">
          {errorMessage.userExists ? errorMessage.userExists : errorMessage.password}
        </span>
        <button className="form__btn-submit form__btn-register" onClick={handleSubmit}>
          Đăng ký
        </button>
        <Link to="/login" className="form__btn-switch">
          Đăng nhập
        </Link>

        <div className="form__footer">
          <p className="form__text-line">
            <span>Hoặc tiếp tục bằng</span>
          </p>

          <div className="form__login-other">
            <button className="form__btn-google" onClick={handleLoginGoogle}>
              <img src={googleIcon} alt="" />
              Đăng nhập bằng Google
            </button>

            <button className="form__btn-facebook" onClick={handleLoginFacebook}>
              <img src={facebookIcon} alt="" />
              Đăng nhập bằng Facebook
            </button>
          </div>

          <p className="form__footer-rules">
            Bằng việc tiếp tục, bạn đã chấp nhận <a href="#!">điều khoản sử dụng</a>
          </p>
        </div>
      </div>
      <div className="form__thumbnail">
        <img src={BackgroundForm} alt="" />
        <h4>Mua sắm tại Tiki</h4>
        <p>Siêu ưu đãi mỗi ngày</p>
      </div>
    </div>
  );
}

export default RegisterPage;
