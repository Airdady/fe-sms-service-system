import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { withStyles } from '@material-ui/core/styles';
import Highlight from 'react-highlight';

const StyledTabs = withStyles({
  root: {
    background: '#1f1f1f',
  },
  indicator: {
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    '& > span': {
      maxWidth: 40,
      width: '100%',
      backgroundColor: '#635ee7',
    },
  },
})((props) => <Tabs {...props} TabIndicatorProps={{ children: <span /> }} />);

const StyledTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    color: '#fff',
    fontWeight: theme.typography.fontWeightRegular,
    fontSize: theme.typography.pxToRem(15),
    marginRight: theme.spacing(1),
    '&:focus': {
      opacity: 1,
    },
  },
}))((props) => <Tab disableRipple {...props} />);

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
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
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className={classes.root}>
      <AppBar elevation={0} position="static" color="#1f1f1f">
        <StyledTabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <StyledTab label="Item One" {...a11yProps(0)} />
          <StyledTab label="Item Two" {...a11yProps(1)} />
          <StyledTab label="Item Three" {...a11yProps(2)} />
          <StyledTab label="Item Four" {...a11yProps(3)} />
          <StyledTab label="Item Five" {...a11yProps(4)} />
          <StyledTab label="Item Six" {...a11yProps(5)} />
          <StyledTab label="Item Seven" {...a11yProps(6)} />
        </StyledTabs>
      </AppBar>
      <TabPanel style={{ background: '#1f1f1f' }} value={value} index={0}>
        Item One
      </TabPanel>
      <TabPanel style={{ background: '#1f1f1f' }} value={value} index={1}>
        Item Two
      </TabPanel>
      <TabPanel style={{ background: '#1f1f1f' }} value={value} index={2}>
        Item Three
      </TabPanel>
      <TabPanel style={{ background: '#1f1f1f' }} value={value} index={3}>
        Item Four
      </TabPanel>
      <TabPanel style={{ background: '#1f1f1f' }} value={value} index={4}>
        Item Five
      </TabPanel>
      <TabPanel style={{ background: '#1f1f1f' }} value={value} index={5}>
        Item Six
      </TabPanel>
      <TabPanel style={{ background: '#1f1f1f' }} value={value} index={6}>
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
    </div>
  );
}
