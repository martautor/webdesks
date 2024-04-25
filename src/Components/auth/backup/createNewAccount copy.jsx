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
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase.js';

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


export default function CreateNewAccount() {
  const [userEmail, setUserEmail] = React.useState('')
  const [userPass, setUserPass] = React.useState('')
  let navigate = useNavigate()
    const Register = (event) => {
        
        event.preventDefault()
        event.stopPropagation()

        createUserWithEmailAndPassword(auth, userEmail, userPass)
        .then((user) => {
          console.log(user)
          setUserEmail('')
          setUserPass('')
          navigate("/main")
        }).catch((e) => {
          setUserEmail('')
          setUserPass('')
          alert('Неправльно введен Email/Пароль. \n' + e.message)})

          return false
        }

    return (
        <ThemeProvider theme={defaultTheme}>
          <Container component="main" maxWidth="xs">
            <CssBaseline />
            <Box
              sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
              <Typography component="h1" variant="h5">
                Регистрация
              </Typography>
              <Box component="form" noValidate sx={{ mt: 1 }}>
                <TextField margin="normal" value={userEmail}  onChange={(e) => setUserEmail(e.target.value)} required fullWidth id="email" label="Email" name="email" autoComplete="email" autoFocus/>
                <TextField margin="normal" value={userPass}  onChange={(e) => setUserPass(e.target.value)} required fullWidth name="password" label="Пароль" type="password" id="password" autoComplete="current-password"/>
                <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Запомнить меня"/>
                <Button type="submit" onClick={Register} fullWidth variant="contained" color="primary" sx={{ mt: 3, mb: 2 }}>
                  Зарегистрироваться 
                </Button>
                <Grid container>
                  <Grid item xs>
                  </Grid>
                  <Grid item>
                    <Links variant="body2">
                      
                      <Link to='/login'>Уже есть акаунт? Войдите</Link>
                    </Links>
                    
                  </Grid>
                </Grid>
              </Box>
            </Box>
            <Copyright sx={{ mt: 8, mb: 4 }} />
          </Container>
        </ThemeProvider>
      );
}