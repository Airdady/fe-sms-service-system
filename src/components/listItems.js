import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';

export const mainListItems = (
  <div>
    <Link style={{ textDecoration: 'none' }} to="/dashboard">
      <ListItem button style={{ justifyContent: 'center' }}>
        <ListItemIcon style={{ minWidth: 0 }}>
          <Box display="flex" flexDirection="column">
            <Box mx="auto">
              <ion-icon name="scale-outline" size="medium"></ion-icon>
            </Box>
            <Typography style={{ fontSize: 10 }} variant="caption">
              Dashboard
            </Typography>
          </Box>
        </ListItemIcon>
      </ListItem>
    </Link>
    <Link style={{ textDecoration: 'none' }} to="/verify">
      <ListItem button style={{ justifyContent: 'center' }}>
        <ListItemIcon style={{ minWidth: 0 }}>
          <Box display="flex" flexDirection="column">
            <Box mx="auto">
              <ion-icon name="finger-print-outline"></ion-icon>
            </Box>
            <Typography style={{ fontSize: 10 }} variant="caption">
              Verify Api
            </Typography>
          </Box>
        </ListItemIcon>
      </ListItem>
    </Link>
    <Link style={{ textDecoration: 'none' }} to="/sms">
      <ListItem button style={{ justifyContent: 'center' }}>
        <ListItemIcon style={{ minWidth: 0 }}>
          <Box display="flex" flexDirection="column">
            <Box mx="auto">
              <ion-icon name="chatbox-outline"></ion-icon>
            </Box>
            <Typography style={{ fontSize: 10 }} variant="caption">
              Sms Api
            </Typography>
          </Box>
        </ListItemIcon>
      </ListItem>
    </Link>
    <Link style={{ textDecoration: 'none' }} to="/sms">
      <ListItem button style={{ justifyContent: 'center' }}>
        <ListItemIcon style={{ minWidth: 0 }}>
          <Box display="flex" flexDirection="column">
            <Box mx="auto">
              <ion-icon name="card-outline"></ion-icon>
            </Box>
            <Typography style={{ fontSize: 10 }} variant="caption">
              Payment
            </Typography>
          </Box>
        </ListItemIcon>
      </ListItem>
    </Link>
    <Link style={{ textDecoration: 'none' }} to="/api_logs">
      <ListItem button style={{ justifyContent: 'center' }}>
        <ListItemIcon style={{ minWidth: 0 }}>
          <Box display="flex" flexDirection="column">
            <Box mx="auto">
              <ion-icon name="document-text-outline"></ion-icon>
            </Box>
            <Typography style={{ fontSize: 10 }} variant="caption">
              Api Logs
            </Typography>
          </Box>
        </ListItemIcon>
      </ListItem>
    </Link>
    <Link style={{ textDecoration: 'none' }} to="/settings">
      <ListItem button style={{ justifyContent: 'center' }}>
        <ListItemIcon style={{ minWidth: 0 }}>
          <Box display="flex" flexDirection="column">
            <Box mx="auto">
              <ion-icon name="settings-outline"></ion-icon>
            </Box>
            <Typography style={{ fontSize: 10 }} variant="caption">
              Settings
            </Typography>
          </Box>
        </ListItemIcon>
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Others</ListSubheader>
    <Link style={{ textDecoration: 'none' }} to="/api_keys">
      <ListItem button>
        <ListItemIcon style={{ minWidth: 0 }}>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Api Keys" />
      </ListItem>
    </Link>
    <Link style={{ textDecoration: 'none' }} to="/documentation">
      <ListItem button>
        <ListItemIcon style={{ minWidth: 0 }}>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Documentation" />
      </ListItem>
    </Link>
  </div>
);
