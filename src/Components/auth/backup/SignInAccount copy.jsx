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
import { signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../../firebase';
import AuthWrapper from './AuthWrapper';

function Copyright(props) {
    return (
      <Typography variant="body2" color="text.secondary" align="center" {...props}>
        {'Copyright © Martun Mkrtchyan '}
        {new Date().getFullYear()}
        {'.'}
      </Typography>
    );
  }

const defaultTheme = createTheme();

function SignInAccount() {
  const [userEmail, setUserEmail] = React.useState('')
  const [userPass, setUserPass] = React.useState('')
        let navigate = useNavigate()

        const Login = (event) => {
          event.preventDefault()
          event.stopPropagation();

          signInWithEmailAndPassword(auth, userEmail, userPass)
          .then((user) => {
            setUserEmail('')
            setUserPass('')
            
            navigate("/main")
          }).catch((e) => {
            setUserEmail('')
            setUserPass('')
            alert('Произошла ошибка/Аккаунт не найден \n' + e.message)
          })
            
        
        };

    return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs" classes={"rowed"}>
        <CssBaseline />
        <Box
          sx={{ marginTop: 8, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <Typography component="h1" variant="h5">
            Вход
          </Typography>
          <Box component="form" noValidate sx={{ mt: 1 }}>
            <TextField margin="normal" value={userEmail}  onChange={(e) => setUserEmail(e.target.value)} required fullWidth id="email" label="Email" name="email" autoComplete="email" autoFocus/>
            <TextField margin="normal" value={userPass}  onChange={(e) => setUserPass(e.target.value)} required fullWidth name="password" label="Пароль" type="password" id="password" autoComplete="current-password"/>
            <FormControlLabel control={<Checkbox value="remember" color="primary" />} label="Запомнить меня"/>
            <Button type="submit" onClick={Login} fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
              Войти
            </Button>
            <Grid container>
              <Grid item xs>
                <Links href="#" variant="body2">
                  Забыли пароль?
                </Links>
              </Grid>
              <Grid item>
                <Links variant="body2">
                  <Link to='/register'>Нет акаунта? Зарегистрируйтесь</Link>
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

export default SignInAccount;
