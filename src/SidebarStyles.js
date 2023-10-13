import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  Sidebar: {
    width: 120,
    backgroundColor: '#ffff',
    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.25)',
    padding: 20,
    borderRadius: 4,
  },
  Logo: {
    display: 'flex',
    alignItems: 'center',
  },
  Link: {
    textDecoration: 'none',
    color: '#000000',
    fontFamily: 'sans-serif',
    fontSize: 16,

    '&:hover': {
      backgroundColor: '#eeeeee',
      borderRadius: 4,
    },
  },
  Logout: {
    textDecoration: 'none',
    color: '#000000',
    fontFamily: 'sans-serif',
    fontSize: 16,

    '&:hover': {
      backgroundColor: '#eeeeee',
      borderRadius: 4,
    },
  },
});

export default useStyles;
