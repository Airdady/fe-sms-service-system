import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import { Link } from 'react-router-dom';
import { Avatar, Box, Button, Divider, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
  link: {
    textDecoration: 'none',
    color: theme.palette.text.secondary,
  },
}));

const NavItems = () => {
  const classes = useStyles();
  return (
    <div>
      <Box
        display="flex"
        alignItems="center"
        flexGrow={1}
        justifyContent="space-around"
      >
        <Box my={3} textAlign="center">
          <Avatar
            style={{ width: 60, height: 60 }}
            alt="Remy Sharp"
            src="/static/images/avatar/1.jpg"
          />
          <Box display="flex" flexDirection="column">
            <Typography variant="display1">Rumbiiha</Typography>
            <Typography variant="caption">vamoo </Typography>
          </Box>
        </Box>
      </Box>
      <Box
        width="100%"
        px={3}
        py={1}
        display="flex"
        bgcolor="gainsboro"
        alignItems="center"
      >
        <Box mr="auto">
          <Typography variant="subtitle2">$359</Typography>
          <Typography variant="caption">Credit Balance</Typography>
        </Box>
        <Link to="/payments">
          <Button variant="contained" color="primary" size="small">
            Top up
          </Button>
        </Link>
      </Box>
      <Divider />
      <Link class={classes.link} to="/dashboard">
        <ListItem button>
          <ListItemIcon>
            <ion-icon name="scale-outline" size="medium" />
          </ListItemIcon>
          <ListItemText primary="Dashboard" />
        </ListItem>
      </Link>
      <Link class={classes.link} to="/sms">
        <ListItem button>
          <ListItemIcon>
            <ion-icon name="chatbox-outline" />
          </ListItemIcon>
          <ListItemText primary="Sms Api" />
        </ListItem>
      </Link>
      <Link class={classes.link} to="/verify">
        <ListItem button>
          <ListItemIcon>
            <ion-icon name="finger-print-outline" />
          </ListItemIcon>
          <ListItemText primary="Verify Api" />
        </ListItem>
      </Link>
      <Link class={classes.link} to="/api_logs">
        <ListItem button>
          <ListItemIcon>
            <ion-icon name="document-text-outline" />
          </ListItemIcon>
          <ListItemText primary="API logs" />
        </ListItem>
      </Link>
      <Link class={classes.link} to="/settings">
        <ListItem button>
          <ListItemIcon>
            <ion-icon name="settings-outline" />
          </ListItemIcon>
          <ListItemText primary="Settings" />
        </ListItem>
      </Link>
      <Link class={classes.link} to="/documentation">
        <ListItem button>
          <ListItemIcon>
            <ion-icon name="settings-outline" />
          </ListItemIcon>
          <ListItemText primary="Documentation" />
        </ListItem>
      </Link>
      <Link class={classes.link} to="/logout">
        <ListItem button>
          <ListItemIcon>
            <ion-icon name="power" />
          </ListItemIcon>
          <ListItemText primary="Logout" />
        </ListItem>
      </Link>
      <Box mt={3} textAlign="center">
        <Box mb={1} textAlign="center">
          <Typography>Having Trouble ?</Typography>
        </Box>
        <Button variant="contained" color="primary">
          Contact Us
        </Button>
      </Box>
    </div>
  );
};

export default NavItems;
