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
import Highlight from 'react-highlight';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Python from '../documentation/python';
import Php from '../documentation/php';
import Node from '../documentation/node';
import Go from '../documentation/go';

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
    width: '100%',
    backgroundColor: theme.palette.background.paper,
    '& .MuiTab-labelIcon': {
      minHeight: 7,
      paddingTop: 9,
    },
    '& .MuiPaper-root': {
      borderBottom: 'solid 1px gainsboro',
    },
    '& .MuiTab-wrapper': {
      flexDirection: 'row',
    },
    '& .MuiTab-wrapper > *:first-child': {
      marginBottom: 1,
    },
    '& .MuiAppBar-colorDefault': {
      color: 'inherit',
      backgroundColor: 'white',
    },
    '& .hljs': {
      borderRadius: 4,
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
    <div className={classes.root}>
      <AppBar elevation={0} position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons="on"
          indicatorColor="primary"
          textColor="primary"
          aria-label="scrollable force tabs example"
        >
          <Tab label="Curl" icon={<Python />} {...a11yProps(0)} />
          <Tab label="Python" icon={<Python />} {...a11yProps(1)} />
          <Tab label="PHP" icon={<Php />} {...a11yProps(2)} />
          <Tab label="NodeJs" icon={<Node />} {...a11yProps(3)} />
          <Tab label="Go" icon={<Go />} {...a11yProps(4)} />
          <Tab label="Ruby" icon={<ShoppingBasket />} {...a11yProps(5)} />
        </Tabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography variant="caption">
          <Highlight language="json">{`npm install airdady`}</Highlight>
        </Typography>
        <Typography variant="caption">
          <Highlight language="json">
            {`{
   "valid": true,   
   "local_format": "4158586273",
   "intl_format": "+14158586273",
   "country_code": "US",
   "country_name": "United States of America",
   "location": "Novato",
   "carrier": "AT&T Mobility LLC",
   "line_type": "mobile"
}`}
          </Highlight>
          <Typography variant='caption'>Example Response</Typography>
          <Highlight language="json">
            {`{
   "valid": true,   
   "local_format": "4158586273",
   "intl_format": "+14158586273",
   "country_code": "US",
   "country_name": "United States of America",
   "location": "Novato",
   "carrier": "AT&T Mobility LLC",
   "line_type": "mobile"
}`}
          </Highlight>
        </Typography>
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
        Item Five
      </TabPanel>
    </div>
  );
}
