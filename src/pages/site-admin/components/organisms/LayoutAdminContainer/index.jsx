import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { screenUrl } from '../../../../../constants/screen/screenUrl';
import { Box, Stack } from '@mui/material';
import SidebarAdmin from '../SidebarAdmin';
import HeaderAdmin from '../HeaderAdmin';

const LayoutAdminContainer = ({ component: Component, isHeader, isSidebar, title }) => {
  const token = localStorage.getItem('token');
  const navigate = useNavigate();

  useEffect(() => {
    if (!token) navigate(screenUrl.ADMIN_LOGIN);

    document.title = 'Tiki Admin| ' + title;
  }, []);

  return (
    <Stack direction="row">
      {isSidebar && <SidebarAdmin />}
      <Box sx={{ width: '100%', ml: isHeader && '280px' }}>
        {isHeader && <HeaderAdmin />}
        <Component />
      </Box>
    </Stack>
  );
};

export default LayoutAdminContainer;
