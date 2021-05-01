// import React from 'react';
// import { makeStyles } from '@material-ui/core/styles';
// import MenuNav from '../home/nav';
// import { Container, Typography, Box, Button, Paper } from '@material-ui/core';
// import Grid from '@material-ui/core/Grid';
// import Footer from '../home/Footer';
// import Scrollspy from "react-scrollspy";

// const useStyles = makeStyles((theme) => ({
//   root: {
//     width: '100%',
//     backgroundSize: 'cover',
//     background:
//       'url(https://numverify.com/images/promo_bgs/numverify_promo_bg.jpg)',
//     '& .hljs': {
//       borderRadius: theme.shape.borderRadius,
//     },
//   },
//   table: {
//     minWidth: 350,
//     marginTop: '1rem',
//   },
//   cardContent: {
//     marginTop: '-8rem',
//     position: 'relative',
//     zIndex: 100,
//     padding: '1rem',
//   },
//   bgColor: {
//     width: '100%',
//     height: '250px',
//     background: 'transparent',
//   },
//   rightBtn: {
//     marginLeft: '1rem',
//     background: theme.palette.primary.dark,
//   },
//   popularPaper: {
//     padding: '1rem',
//     textAlign: 'center',
//     borderLeft: 0,
//     background: 'transparent',
//     color: 'white',
//   },
//   centerContent: {
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'start',
//   },
//   goodies: {
//     width: '100%',
//     marginBottom: '3rem',
//     padding: '3rem 0',
//   },
// }));

// export default function BasicTable() {
//   const classes = useStyles();

//   return (
//     <Box flexGrow={1}>
//         <div>
//           <section id="section1" style={{ height: "800px", background: "red" }}>
//             section 1
//           </section>
//           <section
//             id="section2"
//             style={{ height: "800px", background: "green" }}
//           >
//             section 2
//           </section>
//           <section
//             id="section3"
//             style={{ height: "800px", background: "yellow" }}
//           >
//             section 3
//           </section>

//           <Scrollspy
//             items={["section1", "section2", "section3"]}
//             currentClassName="is-current"
//             style={{ position: "fixed ", top: "0", backgroundColor: "#fff" }}
//           >
//             <li>
//               <a href="#section1">section 1</a>
//             </li>
//             <li>
//               <a href="#section2">section 2</a>
//             </li>
//             <li>
//               <a href="#section3">section 3</a>
//             </li>
//           </Scrollspy>
//         </div>
//       </Box>
//   );
// }

import React from 'react';
import PropTypes from 'prop-types';
import AppBar from '@material-ui/core/AppBar';
import CssBaseline from '@material-ui/core/CssBaseline';
import Divider from '@material-ui/core/Divider';
import Drawer from '@material-ui/core/Drawer';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import InboxIcon from '@material-ui/icons/MoveToInbox';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MailIcon from '@material-ui/icons/Mail';
import MenuIcon from '@material-ui/icons/Menu';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { makeStyles, useTheme } from '@material-ui/core/styles';
import { Box, Grid } from '@material-ui/core';
import LinkTab from './linkTab';
import Scrollspy from 'react-scrollspy';

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  drawer: {
    [theme.breakpoints.up('sm')]: {
      width: drawerWidth,
      flexShrink: 0,
    },
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - ${drawerWidth}px)`,
      marginLeft: drawerWidth,
    },
  },
  menuButton: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.up('sm')]: {
      display: 'none',
    },
  },
  // necessary for content to be below app bar
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

function ResponsiveDrawer(props) {
  const { window } = props;
  const classes = useStyles();
  const theme = useTheme();
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen(!mobileOpen);
  };

  const drawer = (
    <div>
      <div className={classes.toolbar} />
      <Divider />
      <Scrollspy
        items={['section1', 'section2', 'section3']}
        currentClassName="is-current"
        style={{ position: 'fixed ', top: '0', backgroundColor: '#fff' }}
      >
        <li>
          <a href="#section1">section 1</a>
        </li>
        <li>
          <a href="#section2">section 2</a>
        </li>
        <li>
          <a href="#section3">section 3</a>
        </li>
      </Scrollspy>
    </div>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            className={classes.menuButton}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap>
            Responsive drawer
          </Typography>
        </Toolbar>
      </AppBar>
      <nav className={classes.drawer} aria-label="mailbox folders">
        {/* The implementation can be swapped with js to avoid SEO duplication of links. */}
        <Hidden smUp implementation="css">
          <Drawer
            container={container}
            variant="temporary"
            anchor={theme.direction === 'rtl' ? 'right' : 'left'}
            open={mobileOpen}
            onClose={handleDrawerToggle}
            classes={{
              paper: classes.drawerPaper,
            }}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
          >
            {drawer}
          </Drawer>
        </Hidden>
        <Hidden xsDown implementation="css">
          <Drawer
            classes={{
              paper: classes.drawerPaper,
            }}
            variant="permanent"
            open
          >
            {drawer}
          </Drawer>
        </Hidden>
      </nav>
      <main className={classes.content}>
        <div className={classes.toolbar} />
        <Grid container>
          <Grid item md={11}>
            <LinkTab />
          </Grid>
          <Grid item md={7}>
            <Box
              id="section3"
              component="section"
              style={{ height: '800px', background: 'red' }}
            >
              <Typography paragraph>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Rhoncus dolor purus non enim praesent elementum facilisis leo
                vel. Risus at ultrices mi tempus imperdiet. Semper risus in
                hendrerit gravida rutrum quisque non tellus. Convallis convallis
                tellus id interdum velit laoreet id donec ultrices. Odio morbi
                quis commodo odio aenean sed adipiscing. Amet nisl suscipit
                adipiscing bibendum est ultricies integer quis. Cursus euismod
                quis viverra nibh cras. Metus vulputate eu scelerisque felis
                imperdiet proin fermentum leo. Mauris commodo quis imperdiet
                massa tincidunt. Cras tincidunt lobortis feugiat vivamus at
                augue. At augue eget arcu dictum varius duis at consectetur
                lorem. Velit sed ullamcorper morbi tincidunt. Lorem donec massa
                sapien faucibus et molestie ac.
              </Typography>
              <Typography paragraph>
                Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
                ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
                elementum integer enim neque volutpat ac tincidunt. Ornare
                suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
                volutpat consequat mauris. Elementum eu facilisis sed odio
                morbi. Euismod lacinia at quis risus sed vulputate odio. Morbi
                tincidunt ornare massa eget egestas purus viverra accumsan in.
                In hendrerit gravida rutrum quisque non tellus orci ac.
                Pellentesque nec nam aliquam sem et tortor. Habitant morbi
                tristique senectus et. Adipiscing elit duis tristique
                sollicitudin nibh sit. Ornare aenean euismod elementum nisi quis
                eleifend. Commodo viverra maecenas accumsan lacus vel facilisis.
                Nulla posuere sollicitudin aliquam ultrices sagittis orci a.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={5}></Grid>
        </Grid>
      </main>
    </div>
  );
}

export default ResponsiveDrawer;
