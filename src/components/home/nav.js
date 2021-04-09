import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import Menu from '@material-ui/core/Menu';
import { Container, Button, Box } from '@material-ui/core';
import { Link } from 'react-router-dom';
import AuthUser from '../Account.user';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    marginLeft: 5,
  },
  bgColor: {
    width: '100%',
    height: '92vh',
    display: 'grid',
    clipPath: 'polygon(100% 0, 100% 99%, 0 78%, 0 0)',
    background: theme.palette.primary.main,
    gridTemplateRows: 'repeat(12, 1fr)',
    gridTemplateColumns: 'repeat(12, 1fr)',
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

export default function MenuAppBar() {
  const classes = useStyles();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleMenu = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <div className={classes.root}>
        <AppBar position="static">
          <Container maxWidth="lg">
            <Toolbar>
              <Box display="flex" alignItems="center" className={classes.title}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="40"
                  height="40"
                  viewBox="0 0 247.052 188.296"
                >
                  <g
                    id="Group_2"
                    data-name="Group 2"
                    transform="translate(-273.474 -409.808)"
                  >
                    <path
                      id="Path_2"
                      data-name="Path 2"
                      d="M152.5,204.883a30.247,30.247,0,0,1-13.291-3.079,29.6,29.6,0,0,1-5.912-3.849,30.357,30.357,0,0,1-5.032-5.389s3.814,8.979-8.473-11.613-.739-34.352-.739-34.352L174.478,42.363S189.07,17.212,213.533,16.78s32.44,0,32.44,0a30.6,30.6,0,0,1,8.68,1.236,29.193,29.193,0,0,1,7.493,3.427,30.433,30.433,0,0,1,13.827,27.206,29.192,29.192,0,0,1-1.649,8.073,30.6,30.6,0,0,1-4.118,7.741l-93.472,128.1a30.358,30.358,0,0,1-5.032,5.389,29.6,29.6,0,0,1-5.912,3.849A30.247,30.247,0,0,1,152.5,204.883ZM92.419,143.441,80.931,127.694,34.793,64.463a30.6,30.6,0,0,1-4.118-7.741,29.2,29.2,0,0,1-1.648-8.073A30.433,30.433,0,0,1,42.854,21.442a29.194,29.194,0,0,1,7.493-3.427,30.6,30.6,0,0,1,8.68-1.236H132.1s26.34-.463,15.809,22.3S115.625,99.8,104.749,120.253Z"
                      transform="translate(244.5 393.221)"
                      fill="#f7f2fd"
                    />
                  </g>
                </svg>
                <Typography variant="h6" className={classes.title}>
                  Vamoo
                </Typography>
              </Box>
              <Box>
                {/* <Link to */}
                <Button
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  className={classes.navButtons}
                  color="inherit"
                >
                  <Link to="#" className={classes.links}>
                    Products
                  </Link>
                </Button>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'right',
                  }}
                  style={{ top: '3rem' }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>
                    <Link to="product/messages" className={classes.links}>
                      Programmable Messages
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="product/otp_verify" className={classes.links}>
                      OTP verify
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="product/number_lookup" className={classes.links}>
                      Number Lookup
                    </Link>
                  </MenuItem>
                  <MenuItem onClick={handleClose}>
                    <Link to="product/emails" className={classes.links}>
                      Emails
                    </Link>
                  </MenuItem>
                </Menu>
                <Button color="inherit" className={classes.navButtons}>
                  <Link to="/register" className={classes.links}>
                    Developers
                  </Link>
                </Button>
                <Button color="inherit" className={classes.navButtons}>
                  <Link to="/register" className={classes.links}>
                    Pricing
                  </Link>
                </Button>
              </Box>
              <AuthUser />
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </>
  );
}
