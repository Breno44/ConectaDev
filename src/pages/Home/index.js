import React from 'react';
// import './styles.css';
import { Header } from './components/Header';
import { NavBar } from './components/NavBar';
import { Feed } from './components/Feed';

import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
  },
  main: {
    height: '100vh',
    padding: 24,
  },
  toolbar: {
    minHeight: 64,
  },
});

export function Home() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Header />
      <div className={classes.toolbar}></div>
      <main className={classes.main}>
        <Container maxWidth="lg">
          <Box display="flex">
            <NavBar />
            <Feed />
          </Box>
        </Container>
      </main>
    </div>
  );
}
