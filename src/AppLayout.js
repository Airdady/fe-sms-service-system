import React from "react";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import useMediaQuery from "@material-ui/core/useMediaQuery";
import Drawer from "@material-ui/core/Drawer";
import CssBaseline from "@material-ui/core/CssBaseline";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
import MenuIcon from "@material-ui/icons/Menu";
import MenuAppBar from "./components/home/nav";
import Logo from "./Logo";
import { useLocation } from "react-router-dom";

const drawerWidth = 200;

const useStyles = (location) =>
  makeStyles((theme) => ({
    root: {
      display: "flex",
      width: "100vw",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
    },
    drawer: {
      flexShrink: 0,
      width: drawerWidth,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    menuButton: {
      marginRight: theme.spacing(2),
      [theme.breakpoints.up("md")]: {
        display: "none",
      },
    },
    toolbar: {
      ...theme.mixins.toolbar,
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },

    topNavigation: {
      [theme.breakpoints.down("sm")]: {
        display: "none",
      },
    },

    content: {
      flexGrow: 1,
      backgroundColor: theme.palette.background.default,
    },

    logoContainer: {
      display: "flex",
      justifyContent: "space-between",
      alignItems: "center",
    },

    menu: {
      display: (location === "/login" || location === "/register") && "none",
    },
  }));

export default function AppLayout({ children }) {
  const { pathname } = useLocation();
  const classes = useStyles(pathname)();
  const theme = useTheme();
  const isMdUp = useMediaQuery(theme.breakpoints.up("md"));

  const [open, setOpen] = React.useState(false);

  const toggleDrawer = (event) => {
    if (
      event.type === "keydown" &&
      (event.key === "Tab" || event.key === "Shift")
    ) {
      return;
    }

    setOpen(!open);
  };

  return (
    <div className={classes.root}>
      {/*<CssBaseline />*/}
      <AppBar position="fixed" className={`${classes.appBar} ${classes.menu}`}>
        <Toolbar className={classes.logoContainer}>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={toggleDrawer}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          {isMdUp ? <MenuAppBar /> : <Logo />}
        </Toolbar>
      </AppBar>
      <Drawer
        className={`${classes.drawer} ${classes.menu}`}
        // variant={!isMdUp ? "permanent" : "temporary"}
        classes={{
          paper: classes.drawerPaper,
        }}
        anchor="left"
        open={open}
        onClose={toggleDrawer}
      >
        <div className={classes.toolbar} />
        <Divider />
        <List>
          {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
        <Divider />
        <List>
          {["All mail", "Trash", "Spam"].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={classes.content}>
        <Toolbar />
        {children}
      </main>
    </div>
  );
}
