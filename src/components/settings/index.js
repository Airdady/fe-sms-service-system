import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import ProfileSettings from './profile.settings';
import BillingSettings from './billing.settings';
import PasswordResetSettings from './password.reset.settings';
import { Box, Grid, Paper } from '@material-ui/core';
import HeadNav from '../Nav';

const AntTabs = withStyles({
  root: {
    borderBottom: '1px solid #e8e8e8',
  },
  indicator: {
    backgroundColor: '#1890ff',
  },
})(Tabs);

const AntTab = withStyles((theme) => ({
  root: {
    textTransform: 'none',
    minWidth: 72,
    fontWeight: theme.typography.fontWeightRegular,
    marginRight: theme.spacing(4),
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

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    marginTop: '3.5rem',
    margin: 33,
  },
  padding: {
    padding: theme.spacing(3),
  },
  demo1: {
    backgroundColor: theme.palette.background.paper,
  }
}));

export default function CustomizedTabs() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);
  const [activeTab, setActiveTab] = React.useState('Profile');

  const handleChange = (event, newValue) => {
    setActiveTab(event.target.innerText);
    setValue(newValue);
  };

  return (
    <>
      <HeadNav title="Api Keys" />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid container spacing={3}>
          <Grid item md={8}>
            <Paper className={classes.paper}>
              <AntTabs
                value={value}
                onChange={handleChange}
                aria-label="ant example"
              >
                <AntTab label="Profile" />
                <AntTab label="Billing" />
                <AntTab label="Password Reset" />
              </AntTabs>
              <Box p={3}>
                {(activeTab?.match('Profile') && <ProfileSettings />) ||
                  (activeTab?.match('Billing') && <BillingSettings />) ||
                  (activeTab?.match('Password') && <PasswordResetSettings />)}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </main>
    </>
  );
}
