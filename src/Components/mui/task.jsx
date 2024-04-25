import * as React from 'react';
import { Box, ThemeProvider } from '@mui/material';
import { Outlet } from 'react-router-dom';
export default function Task(props) {
  return (<div className='task'>
    <ThemeProvider
      theme={{
        palette: {
          primary: {
            main: '#007FFF',
            dark: '#0066CC',
          },
        },
      }}
    >
      <Box
        sx={{
          margin: '10px',
          width: 1200,
          height: 900,
          borderRadius: 1,
          bgcolor: 'grey',
          transition: 'opacity 1s',
          opacity: '.6',
          '&:hover': {    
            opacity: '.8',
            transition: 'opacity 0.5s',
            // transform: 'scale(1.01)',
          },
          border: 'solid',
          borderColor: 'black',
          borderWidth: '1px',
        }}
      > <Outlet />
      </Box>


      <Box
      sx={{
        width: 300,
        height: 900,
        bgcolor: 'grey',
        borderRadius: 1,
        border: 'solid',
          borderColor: 'black',
          borderWidth: '1px',
      }}> SD</Box>
    </ThemeProvider>
    </div>
  );
}