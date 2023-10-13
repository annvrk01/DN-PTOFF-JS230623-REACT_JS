import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { layoutAdmin, layoutCustomer } from '../config/routeConfig';
import { ErrorPage } from '../config/loadableRoutes';
import LayoutAdminContainer from '../pages/site-admin/components/organisms/LayoutAdminContainer';
import LayoutContainer from '../pages/site-customer/components/organisms/LayoutContainer';

const AppRouter = () => {
  return (
    <Router>
      <Routes>
        <Route path="/">
          {layoutCustomer.map(({ path, component, isHeader, isFooter, title }) => (
            <Route
              key={title}
              path={path}
              element={<LayoutContainer component={component} isHeader={isHeader} isFooter={isFooter} title={title} />}
            />
          ))}
        </Route>

        <Route path="/admin">
          {layoutAdmin.map(({ path, component, isHeader, isSidebar, title }) => (
            <Route
              key={title}
              path={path}
              element={
                <LayoutAdminContainer component={component} isHeader={isHeader} isSidebar={isSidebar} title={title} />
              }
            />
          ))}
        </Route>

        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </Router>
  );
};

export default AppRouter;
