import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles(theme => ({
  root: {
    position: 'fixed',
    left: 0,
    right: 0,
    zIndex: -1000,
    height: '100%',
    width: '100vw',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
  }
}));