import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import PhoneIcon from '@material-ui/icons/Phone';
import FavoriteIcon from '@material-ui/icons/Favorite';
import PersonPinIcon from '@material-ui/icons/PersonPin';
import HelpIcon from '@material-ui/icons/Help';
import ShoppingBasket from '@material-ui/icons/ShoppingBasket';
import ThumbDown from '@material-ui/icons/ThumbDown';
import ThumbUp from '@material-ui/icons/ThumbUp';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { Grid } from '@material-ui/core';
import Java from './java';
import Python from './python';
import Php from './php';

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-force-tabpanel-${index}`}
      aria-labelledby={`scrollable-force-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-force-tab-${index}`,
    'aria-controls': `scrollable-force-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.paper,
  },
  appBar: {
    [theme.breakpoints.up('sm')]: {
      width: `calc(100% - 240px)`,
      marginLeft: 240,
    },
  },
}));

export default function ScrollableTabsButtonForce() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AppBar position="fixed" className={classes.appBar}>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="curl" icon={<PhoneIcon />} {...a11yProps(0)} />
          <Tab
            label="Ruby"
            icon={
              <svg
                class="SVGInline-svg SVG-svg LangIcon-svg"
                style={{ width: 24, height: 24, marginRight: 5 }}
                viewBox="4 4 28 28"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M23.476 5.076c2.78.481 3.569 2.382 3.51 4.373L27 9.42l-1.251 16.398-16.266 1.114h.014c-1.35-.057-4.36-.18-4.497-4.388l1.508-2.75 2.584 6.037.461 1.075 2.571-8.382-.027.006.014-.028 8.484 2.71-1.28-4.978-.907-3.575 8.085-.522-.564-.467-5.804-4.732 3.354-1.871-.003.01zM9.703 9.65c3.264-3.238 7.477-5.152 9.095-3.52 1.615 1.63-.097 5.597-3.367 8.833-3.266 3.238-7.428 5.256-9.042 3.628-1.62-1.63.041-5.7 3.31-8.938l.004-.003z"
                  fill="#D91505"
                ></path>
              </svg>
            }
            {...a11yProps(1)}
          />
          <Tab label="Python" icon={<Python />} {...a11yProps(2)} />
          <Tab label="PHP" icon={<Php />} {...a11yProps(3)} />
          <Tab label="Nodejs" icon={<Java />} {...a11yProps(4)} />
          <Tab label="GO" icon={<ThumbDown />} {...a11yProps(5)} />
          <Tab label=".NET" icon={<ThumbUp />} {...a11yProps(6)} />
        </Tabs>
      </AppBar>
      <TabPanel container value={value} index={0}>
        <Grid item md={7}>
          <Box
            id="section1"
            component="section"
            style={{ height: '800px', background: 'gray' }}
          >
            <Typography paragraph>
              LoremJJJJJ ipsum dolor sit amet, consectetur adipiscing elit, sed
              do eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis convallis tellus id
              interdum velit laoreet id donec ultrices. Odio morbi quis commodo
              odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum
              est ultricies integer quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet proin fermentum
              leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue eget arcu dictum
              varius duis at consectetur lorem. Velit sed ullamcorper morbi
              tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </Typography>
            <Typography paragraph>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua.
              Rhoncus dolor purus non enim praesent elementum facilisis leo vel.
              Risus at ultrices mi tempus imperdiet. Semper risus in hendrerit
              gravida rutrum quisque non tellus. Convallis convallis tellus id
              interdum velit laoreet id donec ultrices. Odio morbi quis commodo
              odio aenean sed adipiscing. Amet nisl suscipit adipiscing bibendum
              est ultricies integer quis. Cursus euismod quis viverra nibh cras.
              Metus vulputate eu scelerisque felis imperdiet proin fermentum
              leo. Mauris commodo quis imperdiet massa tincidunt. Cras tincidunt
              lobortis feugiat vivamus at augue. At augue eget arcu dictum
              varius duis at consectetur lorem. Velit sed ullamcorper morbi
              tincidunt. Lorem donec massa sapien faucibus et molestie ac.
            </Typography>
            <Typography paragraph>
              Consequat mauris nunc congue nisi vitae suscipit. Fringilla est
              ullamcorper eget nulla facilisi etiam dignissim diam. Pulvinar
              elementum integer enim neque volutpat ac tincidunt. Ornare
              suspendisse sed nisi lacus sed viverra tellus. Purus sit amet
              volutpat consequat mauris. Elementum eu facilisis sed odio morbi.
              Euismod lacinia at quis risus sed vulputate odio. Morbi tincidunt
              ornare massa eget egestas purus viverra accumsan in. In hendrerit
              gravida rutrum quisque non tellus orci ac. Pellentesque nec nam
              aliquam sem et tortor. Habitant morbi tristique senectus et.
              Adipiscing elit duis tristique sollicitudin nibh sit. Ornare
              aenean euismod elementum nisi quis eleifend. Commodo viverra
              maecenas accumsan lacus vel facilisis. Nulla posuere sollicitudin
              aliquam ultrices sagittis orci a.
            </Typography>
          </Box>
        </Grid>
        <Grid item md={5}></Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </>
  );
}
