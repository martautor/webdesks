import { useState } from "react";
import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Links from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';

const defaultTheme = createTheme();

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © Martun Mkrtchyan '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const Form = ({title, bTitle, links, handleClick}) => {
    const [userEmail, setUserEmail] = useState('')
    const [userPass, setUserPass] = useState('')
    
    return(
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography component="h1" variant="h5">
                {title}
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField margin="normal" value={userEmail}  onChange={(e) => setUserEmail(e.target.value)} required fullWidth id="email" label="Email" name="email" autoComplete="email" autoFocus/>
                <TextField margin="normal" value={userPass}  onChange={(e) => setUserPass(e.target.value)} required fullWidth name="password" label="Пароль" type="password" id="password" autoComplete="current-password"/>
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Запомнить меня"/>
                <Button type="submit" onClick={(e) => 
                    {handleClick(userEmail, userPass)
                     e.preventDefault()}} fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
                  {bTitle} 
                </Button>
                <Grid container>
                  <Grid item xs>
                  </Grid>
                  <Grid item>  
                      {links}
                    
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
    )
}
export {Form}