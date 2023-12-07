import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { SCREEN_URL } from '../../../../../constants/screen';
import Header from '../Header';
import Footer from '../Footer';

const LayoutContainer = ({ component: Component, isHeader, isFooter, title }) => {
  const token = localStorage.getItem('token');
  const dataUser = JSON.parse(localStorage.getItem('data_user'));
  const navigate = useNavigate();
  document.title = 'Tiki - ' + title;

  useEffect(() => {
    if (!token && !dataUser) navigate(SCREEN_URL.LOGIN);
  }, []);

  return (
    <>
      {}
      {isHeader && <Header />}
      <Component />
      {isFooter && <Footer />}
    </>
  );
};

export default LayoutContainer;
