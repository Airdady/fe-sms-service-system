import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import List from '@material-ui/core/List';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import Badge from '@material-ui/core/Badge';
import MenuIcon from '@material-ui/icons/Menu';
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft';
import NotificationsIcon from '@material-ui/icons/Notifications';
import Dropdown from './DropDown';
import { Button, Box } from '@material-ui/core';

const drawerWidth = 75;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: -1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    // background: "transparent",
    boxShadow: 'none',
    height: '10rem',
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 60,
  },
}));

export default function Nav({ title }) {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  const handleDrawerOpen = () => {
    setOpen(true);
  };
  const handleDrawerClose = () => {
    setOpen(false);
  };
  return (
    <>
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <Toolbar className={classes.toolbar}>
          <IconButton
            edge="start"
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            className={clsx(
              classes.menuButton,
              open && classes.menuButtonHidden
            )}
          >
            <MenuIcon />
          </IconButton>
          <Typography
            component="h1"
            variant="h6"
            color="inherit"
            noWrap
            className={classes.title}
          >
            {title}
          </Typography>
          <IconButton color="inherit">
            <Badge badgeContent={4} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Dropdown />
        </Toolbar>
        <Box display="flex" justifyContent="space-between" ml={4} mr={4}>
          <Typography
            style={{ color: 'white' }}
            variant="subtitle1"
            gutterBottom
          >
            Create and manage API Keys to use with the Telgo API v2 Create API
            Key API V1 Tokens
          </Typography>
        </Box>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: clsx(classes.drawerPaper, !open && classes.drawerPaperClose),
        }}
        open={open}
      >
        <div className={classes.toolbarIcon}>
          <IconButton onClick={handleDrawerClose}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="35"
              height="35"
              viewBox="0 0 247.052 188.295"
            >
              <path
                id="Path_1"
                data-name="Path 1"
                d="M107.185,269.148c-9.3,0-13-.184-13.156-.192a30.613,30.613,0,0,1-8.682-1.236,29.226,29.226,0,0,1-7.493-3.427,30.435,30.435,0,0,1-13.828-27.206,29.22,29.22,0,0,1,1.649-8.074,30.592,30.592,0,0,1,4.118-7.74l93.472-128.1a30.31,30.31,0,0,1,5.032-5.389,29.593,29.593,0,0,1,5.912-3.849,30.226,30.226,0,0,1,26.581,0,29.622,29.622,0,0,1,5.912,3.849,30.327,30.327,0,0,1,5.028,5.384l-.009-.021c-.2-.5-.662-1.674-.52-1.889a.072.072,0,0,1,.063-.033c.388,0,2.255,2.353,8.943,13.56a39.256,39.256,0,0,1,5.3,14.055,29.09,29.09,0,0,1-.322,10.843,24.04,24.04,0,0,1-4.239,9.455L165.522,243.373A63.523,63.523,0,0,1,155.168,256a52.049,52.049,0,0,1-12.279,8.773,37.835,37.835,0,0,1-16.422,4.18C119.287,269.083,112.8,269.148,107.185,269.148Zm100.6-.191c-1.248,0-12.319-.191-16.545-6.8-2.431-3.8-2.144-9.016.853-15.493,7.332-15.846,20.377-39.556,30.859-58.608l.013-.024c4.621-8.4,8.986-16.332,12.289-22.545l1.239-2.33,1.382-2.6,9.549-17.959.16-.3,11.488,15.747,46.138,63.232a30.616,30.616,0,0,1,4.118,7.74,29.2,29.2,0,0,1,1.648,8.074,30.434,30.434,0,0,1-13.828,27.206,29.179,29.179,0,0,1-7.492,3.427,30.606,30.606,0,0,1-8.681,1.236H207.78Z"
                transform="translate(-63.974 -80.852)"
                fill="#202d59"
              />
            </svg>
          </IconButton>
        </div>
        <Divider />
      </Drawer>
    </>
  );
}
