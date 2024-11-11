import React from 'react';
import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import MenuItem from '@mui/material/MenuItem';
import { Avatar, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import { MENU_ITEMS } from '../../config/menus';
import { localStorageKeys } from '../../data/localStorageKeys';

export const TopBar = () => {
  const logout = () => {
    localStorage.removeItem(localStorageKeys.accessToken);
    localStorage.removeItem(localStorageKeys.refreshToken);
    window.location.href = '/';
  };

  return (
    <AppBar
      position="sticky"
      sx={{
        border: '1px solid',
        bgcolor: 'white',
        boxShadow:
          '0 0 1px rgba(85, 166, 246, 0.1), 1px 1.5px 2px -1px rgba(85, 166, 246, 0.15), 4px 4px 12px -2.5px rgba(85, 166, 246, 0.15)',
      }}
    >
      <Container maxWidth="lg">
        <Toolbar
          variant="regular"
          sx={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            borderColor: 'divider',
          }}
        >
          <Box
            sx={{
              flexGrow: 1,
              display: 'flex',
              alignItems: 'center',
              ml: '-18px',
              px: 0,
            }}
          >
            <Avatar
              src={process.env.PUBLIC_URL + 'rootcode.jpg'}
              alt="logo"
              sx={{ width: 50, height: 50 }}
            />
            <Typography color="black" fontWeight="bolder">
              Pothole Detection
            </Typography>
            <Box
              sx={{ display: { xs: 'none', md: 'flex' }, marginLeft: '30px' }}
            >
              {Object.values(MENU_ITEMS).map(({ name, href }) => (
                <Link
                  key={name}
                  to={href}
                  style={{ textDecorationLine: 'none' }}
                >
                  <MenuItem sx={{ py: '6px', px: '12px', color: 'darkgreen' }}>
                    {name}
                  </MenuItem>
                </Link>
              ))}
            </Box>
          </Box>
          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 0.5,
              alignItems: 'center',
            }}
          >
            <Button
              color="primary"
              variant="text"
              component="a"
              onClick={logout}
              target="_blank"
            >
              로그아웃
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
};
