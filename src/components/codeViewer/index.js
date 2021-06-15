import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import Highlight from 'react-highlight';

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
    maxWidth: 40,
    width: '100%',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(1),
    '&:hover': {
      color: '#40a9ff',
      opacity: 1,
    },
    '&$selected': {
      color: '#1890ff',
      fontWeight: theme.typography.fontWeightMedium,
    },
    '&:focus': {
      color: '#40a9ff',
    },
  },
  selected: {},
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
      <AppBar elevation={0} position="static" color="white">
        <AntTabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="scrollable"
          scrollButtons="auto"
          aria-label="scrollable auto tabs example"
        >
          <AntTab label="cURL" {...a11yProps(0)} />
          <AntTab label="NodeJS" {...a11yProps(1)} />
          <AntTab label="Python" {...a11yProps(2)} />
          <AntTab label="PHP" {...a11yProps(3)} />
          <AntTab label="Ruby" {...a11yProps(4)} />
          <AntTab label="GO" {...a11yProps(5)} />
          <AntTab label="Dart" {...a11yProps(6)} />
          <AntTab label="Java" {...a11yProps(7)} />
          <AntTab label="C#" {...a11yProps(8)} />
          <AntTab label="Swift" {...a11yProps(9)} />
        </AntTabs>
      </AppBar>
      <TabPanel value={value} index={0}>
        <Typography variant="caption">
          <Highlight language="json">
            https://api.ardady.com/sms/sendbatch?keys=60c08b35344b8364ed6c3e7b
          </Highlight>
        </Typography>
        <Typography variant="caption">
          <Highlight language="">
            {`{
  "from":"SenderId",
  "to":"DESTINATION number",
  "text":"MESSAGE"
}`}
          </Highlight>
          <Typography variant="caption">Example Response</Typography>
          <Highlight language="json">
            {`{
   "Messages":[{
      "to":"38050XXXXXXXXX"
      "details":[
        {
          "status":{
          "id": 0,
          "description": "ESME_ROK"
				  },
          "smsId": "b6aa506c-f363-4e89-b659-94d53ce5f9cb"
        }
       ],
      "messageCount": 3,
      "messageId": "b6aa506c-f363-4e89-b659-94d53ce5f9cb"
   }]
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
        Item Six
      </TabPanel>
      <TabPanel value={value} index={6}>
        Item Seven
      </TabPanel>
    </div>
  );
}
