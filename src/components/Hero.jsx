import React from 'react';
import { Popup } from '../components';
import { Paper, Container, Grid, Typography } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { useStyles } from '../styles/useStyles';
import { Context } from '../index';

function Hero() {
  const store = React.useContext(Context);
  const username = store.user.email;
  const classes = useStyles();
  const gridAuth = () => {
    return (
      <>
        <Grid container>
          <div className={classes.mainFeaturesPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              JWT Authorization and registration
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              On this App you will see my logic for authorization and registration
            </Typography>
            <Popup
              popupName={'Log In'}
              buttonName={'Lets go!'}
              buttonColor={'secondary'}
              buttonVariant={'contained'}
            />
          </div>
        </Grid>
      </>
    );
  };
  const gridUnAuth = () => {
    return (
      <>
        <Grid container>
          <div className={classes.mainFeaturesPostContent}>
            <Typography component="h1" variant="h3" color="inherit" gutterBottom>
              So, {username} you finally get registered
            </Typography>
            <Typography variant="h5" color="inherit" paragraph>
              What a pleasure
            </Typography>
            <Button onClick={get} color="secondary" variant="contained">
              GET
            </Button>
          </div>
        </Grid>
      </>
    );
  };

  const get = () => {
    console.log(store.user.email);
  };
  return (
    <>
      <Paper
        className={classes.mainFeaturesPost}
        style={{ backgroundImage: `url(https://source.unsplash.com/random)` }}>
        <Container fixed>
          <div className={classes.overlay} />
          {!store.isAuth ? gridAuth() : gridUnAuth()}
        </Container>
      </Paper>
    </>
  );
}

export default Hero;
