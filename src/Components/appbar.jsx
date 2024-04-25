// import React from 'react';
import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "../app.css"

const pageUrls = ['tasks', 'users', 'clients'];
const settings = ['Профиль', 'Настройки', 'Обозреватель', 'Выйти'];

function Appbar() {
    const [anchorElUser, setAnchorElUser] = React.useState(null);

    const handleOpenUserMenu = (event) => {
      setAnchorElUser(event.currentTarget)

      console.log(event.currentTarget)
    };

    const handleCloseUserMenu = (event) => {
        setAnchorElUser(null);
        console.log(event.target)                                                                                              // НАСТРОИТЬ ПЕРЕХОД ИЗ МЕНЮ
      };
    
    const darkTheme = createTheme({
        palette: {
          mode: 'dark',
          primary: {
            main: '#1976d2',
          },
        },
      });
    const pageNameF = (page) => {
        let pageName = ''
        switch (page) {
            case 'tasks': pageName = 'ЗАДАЧИ'
                break;
            case 'users': pageName = 'ПОЛЬЗОВАТЕЛИ'
                break;
            case 'clients': pageName = 'КЛИЕНТЫ'
                break;
            default:
                break;
        }
        return pageName
    }


    return (
    <ThemeProvider theme={darkTheme}>  
      <AppBar position="static">
        <Container maxWidth="xl">
          <Toolbar disableGutters>
            <Box sx={{my: 3, width: 200}}> 
              <Link className='logo' to="/main"><IconButton className='.Mui-disabled' disableRipple>Автор Штрих</IconButton></Link>
            </Box>

            <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
              {pageUrls.map((page) => (
                
                <Link key={page} className='links' to={page}><Button sx={{ my: 3, color: 'grey', width: 150, fontSize: 16 }}>
                    {pageNameF(page)}
                </Button></Link>
              ))}
            </Box>
  
            <Box sx={{ flexGrow: 0 }}>
              <Tooltip title="Open settings">
                <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                  <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />                                                         {/* LOGO IMPORT FROM BASE */}
                </IconButton>
              </Tooltip>
              <Menu
                sx={{ mt: '45px' }}
                id="menu-appbar"
                anchorEl={anchorElUser}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                keepMounted
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right',
                }}
                open={Boolean(anchorElUser)}
                onClose={handleCloseUserMenu}
              >
                {settings.map((setting) => (
                  <MenuItem key={setting} onClick={handleCloseUserMenu}>
                    <Typography component={'span'} textAlign="center">{setting}</Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
      <Outlet/>
      </ThemeProvider>
    );
  }
  
  export default Appbar;
  
