import React from 'react';
import Button from '@material-ui/core/Button';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import Fade from '@material-ui/core/Fade';
import { useDispatch, useSelector } from 'react-redux';
import Avatar from '@material-ui/core/Avatar';
import { Link } from 'react-router-dom';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: 5,
  },
  links: {
    textDecoration: 'none',
    color: 'inherit',
    textTransform: 'capitalize',
  },
  navButtons: {
    margin: '0 1rem',
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function UserMenu() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleLogout = () => {
    dispatch({ type: 'LOGOUT' });
  };

  const { user } = useSelector(({ UserData }) => UserData);
  return (
    <div>
      {user?.username ? (
        <>
          <Button
            aria-controls="fade-menu"
            aria-haspopup="true"
            onClick={handleClick}
            className={classes.links}
          >
            <Avatar
              style={{ width: '32px', height: '32px', marginRight: 5 }}
              src="/broken-image.jpg"
            />
            {user?.username}
          </Button>
          <Menu
            id="fade-menu"
            anchorEl={anchorEl}
            keepMounted
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            style={{ marginTop: '2.5rem' }}
          >
            <MenuItem>
              <Link to="/dashboard" className={classes.links}>
                My Account
              </Link>
            </MenuItem>
            <MenuItem onClick={handleLogout}>Logout</MenuItem>
          </Menu>
        </>
      ) : (
        <>
          <Button color="inherit" className={classes.navButtons}>
            <Link to="/login" className={classes.links}>
              Login
            </Link>
          </Button>
          <Button variant="contained" style={{ marginLeft: '.5rem' }}>
            <Link to="/register" className={classes.links}>
              Get your free Api Keys
            </Link>
          </Button>
        </>
      )}
    </div>
  );
}
