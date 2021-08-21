import React, { useState } from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { FormHelperText, Typography } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { LockOutlined } from '@material-ui/icons';
import authService from '../../services/authService';
import { useHistory } from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  root: {
    height: '100vh',
  },
  image: {
    backgroundImage: 'url(/images/background.jpg)',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'none',
    padding: theme.spacing(2),
    textAlign: 'center',
  },
  avatar: {
    background: theme.palette.primary.main,
    marginBottom: theme.spacing(1),
  },
  button: {
    marginTop: theme.spacing(1),
  },
  form: {
    margin: theme.spacing(0, 4),
  },
}));

function Copyright() {
  return (
    <Typography variant="body2" align="center">
      {'Copyright ©'}
      <a color="inherit" href="https://github.com/Breno44">
        Breno Henrique
      </a>{' '}
      {new Date().getFullYear()}
    </Typography>
  );
}

export function SignIn() {
  const classes = useStyles();
  const navigate = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function handleSignIn() {
    try {
      await authService.signIn(email, password);
      navigate.push('/');
    } catch (error) {
      setErrorMessage(error.response.data.message);
    }
  }
  return (
    <Grid container className={classes.root}>
      <Grid
        item
        container
        direction="column"
        justifyContent="center"
        alignItems="center"
        md={7}
        className={classes.image}
      >
        <Typography style={{ color: '#fff', fontSize: 35, lineHeight: '45px', textAlign: 'center' }}>
          <strong>Simplificando a forma de conectar desenvolvedores de software</strong>
        </Typography>
        <Typography
          variant="body2"
          style={{ color: 'rgb(255, 255, 255, 0.7)', marginTop: 30, fontSize: 15, lineHeight: '30px' }}
        >
          <strong>Compartilhe seu conhecimento com toda nossa rede de desenvolvedores de software</strong>
        </Typography>
      </Grid>
      <Grid item md={5}>
        <Box display="flex" flexDirection="column" alignItems="center" mt={8}>
          <Avatar className={classes.avatar}>
            <LockOutlined />
          </Avatar>
          <Typography variant="h5">Acesso</Typography>
          <form className={classes.form}>
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="email"
              label="E-mail"
              name="email"
              autoComplete="email"
              autoFocus
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Senha"
              type="password"
              name="password"
              autoComplete="current-password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <Button fullWidth variant="contained" color="primary" className={classes.button} onClick={handleSignIn}>
              Entrar
            </Button>
            {errorMessage && <FormHelperText error>{errorMessage}</FormHelperText>}
            <Grid container>
              <Grid item>
                <Link>Esqueceu sua senha?</Link>
              </Grid>
              <Grid item>
                <Link>Não tem uma conta? Registre-se</Link>
              </Grid>
            </Grid>
          </form>
          <Copyright />
        </Box>
      </Grid>
    </Grid>
  );
}
