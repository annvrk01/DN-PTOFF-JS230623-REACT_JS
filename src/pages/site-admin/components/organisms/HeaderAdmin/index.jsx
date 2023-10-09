import NotificationsIcon from '@mui/icons-material/Notifications';
import PeopleIcon from '@mui/icons-material/People';
import SearchIcon from '@mui/icons-material/Search';
import {
  Avatar,
  Badge,
  Box,
  Divider,
  IconButton,
  MenuItem,
  MenuList,
  Popover,
  Stack,
  SvgIcon,
  Tooltip,
  Typography,
} from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useState } from 'react';

const SIDE_NAV_WIDTH = 280;
const TOP_NAV_HEIGHT = 64;

function HeaderAdmin() {
  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);

  return (
    <>
      <Box
        component="header"
        sx={{
          backdropFilter: 'blur(6px)',
          backgroundColor: (theme) => alpha(theme.palette.background.default, 0.8),
          position: 'sticky',
          left: {
            lg: `${SIDE_NAV_WIDTH}px`,
          },
          top: 0,
          zIndex: (theme) => theme.zIndex.appBar,
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          spacing={2}
          sx={{
            minHeight: TOP_NAV_HEIGHT,
            px: 2,
          }}
        >
          <Stack alignItems="center" direction="row" spacing={2}>
            <Tooltip title="Search">
              <IconButton>
                <SvgIcon fontSize="small">
                  <SearchIcon />
                </SvgIcon>
              </IconButton>
            </Tooltip>
          </Stack>
          <Stack alignItems="center" direction="row" spacing={2}>
            <Tooltip title="Contacts">
              <IconButton>
                <SvgIcon fontSize="small">
                  <PeopleIcon />
                </SvgIcon>
              </IconButton>
            </Tooltip>
            <Tooltip title="Notifications">
              <IconButton>
                <Badge badgeContent={4} color="success" variant="dot">
                  <SvgIcon fontSize="small">
                    <NotificationsIcon />
                  </SvgIcon>
                </Badge>
              </IconButton>
            </Tooltip>
            <Avatar
              onClick={handleClick}
              sx={{
                cursor: 'pointer',
                height: 40,
                width: 40,
              }}
              src="/assets/avatars/avatar-anika-visser.png"
            />
          </Stack>
        </Stack>
      </Box>
      <Popover
        anchorEl={anchorEl}
        anchorOrigin={{
          horizontal: 'left',
          vertical: 'bottom',
        }}
        onClose={handleClose}
        open={open}
        PaperProps={{ sx: { width: 200 } }}
      >
        <Box
          sx={{
            py: 1.5,
            px: 2,
          }}
        >
          <Typography variant="overline">Account</Typography>
          <Typography color="text.secondary" variant="body2">
            Anika Visser
          </Typography>
        </Box>
        <Divider />
        <MenuList
          disablePadding
          dense
          sx={{
            p: '8px',
            '& > *': {
              borderRadius: 1,
            },
          }}
        >
          <MenuItem>Sign out</MenuItem>
        </MenuList>
      </Popover>
    </>
  );
}

export default HeaderAdmin;
