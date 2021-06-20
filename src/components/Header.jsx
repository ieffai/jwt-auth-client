import React from 'react';
import { AppBar, Container, Toolbar, IconButton, Typography } from '@material-ui/core';
import MenuIcon from '@material-ui/icons/Menu';
import Button from '@material-ui/core/Button';
import { Context } from '../index';
import { Popup } from '../components';
import { useStyles } from '../styles/useStyles';

function Header() {
  const classes = useStyles();
  const store = React.useContext(Context);

  const authorizedHeader = () => {
    return (
      <>
        <Popup
          popupName={'Log In'}
          buttonName={'Log In'}
          buttonColor={'inherit'}
          buttonVariant={'outlined'}
        />
        <Popup
          popupName={'Sign Up'}
          buttonName={'Sign Up'}
          buttonColor={'secondary'}
          buttonVariant={'contained'}
        />
      </>
    );
  };

  const unAuthorizedHeader = () => {
    return (
      <Button onClick={() => store.logout()} variant="contained" color="secondary">
        Log Out
      </Button>
    );
  };

  return (
    <AppBar position="fixed">
      <Container fixed>
        <Toolbar>
          <IconButton edge="start" color="inherit" aria-label="menu" className={classes.menuButton}>
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}>
            {store.isAuth ? `${store.user.email}` : 'JWT App'}
          </Typography>
          {store.isAuth ? unAuthorizedHeader() : authorizedHeader()}
        </Toolbar>
      </Container>
    </AppBar>
  );
}

export default Header;
