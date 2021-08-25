import React from 'react';
import { Button, SvgIcon } from '@material-ui/core';
import { Bell } from 'react-feather';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Account from './Account'

const useStyles = makeStyles({
  appBar: {
    boxShadow: 'none',
  },
  img: {
    maxHeight: 55,
  },
  grow: {
    flexGrow: 1,
  },
  userSelection: {
    display: 'flex',
    alignItems: 'center',
  },
  button: {
    marginRight: 10,
  },
  bell: {
    marginRight: 10,
  },
});

export function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar>
        <img src="/images/logo.png" alt="logo" className={classes.img} />
        <div className={classes.grow} />
        <div className={classes.userSelection}>
          <Button color="primary" variant="contained" className={classes.button}>
            Novo post
          </Button>
          <SvgIcon className={classes.bell}>
            <Bell />
          </SvgIcon>
          <Account />
        </div>
      </Toolbar>
    </AppBar>
  );
}
