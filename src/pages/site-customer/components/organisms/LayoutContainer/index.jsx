import React from 'react';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { screenUrl } from '../../../../../constants/screen/screenUrl';
import Header from '../Header';
import Footer from '../Footer';

const LayoutContainer = ({ component: Component, isHeader, isFooter, title }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate(screenUrl.LOGIN);

    document.title = 'Tiki | ' + title;
  }, []);

  return (
    <>
      {isHeader && <Header />}
      <Component />
      {isFooter && <Footer />}
    </>
  );
};

export default LayoutContainer;
