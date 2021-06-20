import { makeStyles } from '@material-ui/core';

export const useStyles = makeStyles((theme) => ({
    menuButton: {
      marginRight: theme.spacing(1),
    },
    mainFeaturesPost: {
        position: 'relative',
        color: theme.palette.common.white,
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        minHeight: '100vh',
      },
      overlay: {
        position: 'absolute',
        top: 0,
        bottom: 0,
        right: 0,
        left: 0,
        backgroundColor: 'rgba(0,0,0,.3)',
      },
      title: {
        flexGrow: 1
      },
      mainFeaturesPostContent: {
        position: 'relative',
        padding: theme.spacing(6),
        marginTop: theme.spacing(8),
      },
  }));