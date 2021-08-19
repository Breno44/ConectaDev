import React from 'react';
import { Button, SvgIcon } from '@material-ui/core';
import { Bell } from 'react-feather';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Avatar from '@material-ui/core/Avatar';

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
        <div className={classes.grow}></div>
        <div className={classes.userSelection}>
          <Button color="primary" variant="contained" className={classes.button}>
            Novo post
          </Button>
          <SvgIcon className={classes.bell}>
            <Bell></Bell>
          </SvgIcon>
          <Avatar alt="Breno" src="/" />
        </div>
        {/* <div className="">
          <span>Conecta Dev</span>
        </div>

        <div className="">
          <Button color="primary" variant="contained">
            Novo Post
          </Button>
          <span>Img1</span>
          <span>Img2</span>
        </div> */}
      </Toolbar>
    </AppBar>
  );
}
