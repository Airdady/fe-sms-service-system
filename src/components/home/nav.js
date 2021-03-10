import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import AccountCircle from "@material-ui/icons/AccountCircle";
import Switch from "@material-ui/core/Switch";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormGroup from "@material-ui/core/FormGroup";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import { Container, Button, Box } from "@material-ui/core";
import { Link } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
  bgColor: {
    width: "100%",
    height: "92vh",
    display: "grid",
    clipPath: "polygon(100% 0, 100% 99%, 0 78%, 0 0)",
    background: theme.palette.primary.main,
    gridTemplateRows: "repeat(12, 1fr)",
    gridTemplateColumns: "repeat(12, 1fr)",
  },
  links: {
    textDecoration: "none",
    color: "inherit",
    textTransform: "capitalize",
  },
  navButtons: {
    margin: "0 1rem",
    fontSize: theme.typography.subtitle1.fontSize,
    fontWeight: theme.typography.fontWeightRegular,
  },
}));

export default function MenuAppBar() {
  const classes = useStyles();
  const [auth, setAuth] = React.useState(true);
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleChange = (event) => {
    setAuth(event.target.checked);
  };

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
              <IconButton
                edge="start"
                className={classes.menuButton}
                color="inherit"
                aria-label="menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography variant="h6" className={classes.title}>
                Vamoo
              </Typography>
              <Box>
                {/* <Link to */}
                <Button color="inherit" className={classes.navButtons}>
                  <Link to="/register" className={classes.links}>
                    Products
                  </Link>
                </Button>
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

              <Button color="inherit" className={classes.navButtons}>
                <Link to="/login" className={classes.links}>
                  Login
                </Link>
              </Button>
              <Button variant="contained" style={{ marginLeft: ".5rem" }}>
                <Link to="/register" className={classes.links}>
                  Register
                </Link>
              </Button>
              {/* <div>
                <IconButton
                  aria-label="account of current user"
                  aria-controls="menu-appbar"
                  aria-haspopup="true"
                  onClick={handleMenu}
                  color="inherit"
                >
                  <AccountCircle />
                </IconButton>
                <Menu
                  id="menu-appbar"
                  anchorEl={anchorEl}
                  anchorOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  keepMounted
                  transformOrigin={{
                    vertical: "top",
                    horizontal: "right",
                  }}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose}>Profile</MenuItem>
                  <MenuItem onClick={handleClose}>My account</MenuItem>
                </Menu>
              </div> */}
            </Toolbar>
          </Container>
        </AppBar>
      </div>
    </>
  );
}
