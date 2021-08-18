import React from 'react';
import { Button } from '@material-ui/core';

import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

const useStyles = makeStyles({
  appBar: {
    boxShadow: 'none',
  },
});

export function Header() {
  const classes = useStyles();

  return (
    <AppBar position="fixed" color="inherit" className={classes.appBar}>
      <Toolbar>
        <img src="/images/logo.png" alt="logo" />
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
