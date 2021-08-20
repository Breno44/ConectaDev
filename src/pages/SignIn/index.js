import React from 'react';

import { makeStyles } from '@material-ui/core/styles';
import { Typography } from '@material-ui/core';

import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Avatar from '@material-ui/core/Avatar';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Link from '@material-ui/core/Link';
import { LockOutlined } from '@material-ui/icons';

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

  return (
    <Grid container className={classes.root}>
      <Grid item container direction="column" justify="center" alignItems="center" md={7} className={classes.image}>
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
            />
            <TextField
              variant="outlined"
              margin="normal"
              required
              fullWidth
              id="password"
              label="Senha"
              name="password"
              autoComplete="current-password"
            />
            <Button fullWidth variant="contained" color="primary" className={classes.button}>
              Entrar
            </Button>
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
