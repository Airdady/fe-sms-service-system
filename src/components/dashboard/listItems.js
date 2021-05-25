import React from 'react';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListSubheader from '@material-ui/core/ListSubheader';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PeopleIcon from '@material-ui/icons/People';
import BarChartIcon from '@material-ui/icons/BarChart';
import LayersIcon from '@material-ui/icons/Layers';
import AssignmentIcon from '@material-ui/icons/Assignment';
import { Link } from 'react-router-dom';
import { Box, Typography } from '@material-ui/core';

export const mainListItems = (
  <div>
    <ListItem button>
      <ListItemIcon>
        <ion-icon name="scale-outline" size="medium" />
      </ListItemIcon>
      <ListItemText primary="Dashboard" />
    </ListItem>
    <Link style={{ textDecoration: 'none' }} to="/sms">
      <ListItem button>
        <ListItemIcon>
          <ion-icon name="chatbox-outline" />
        </ListItemIcon>
        <ListItemText primary="Sms Api" />
      </ListItem>
    </Link>
    <Link style={{ textDecoration: 'none' }} to="/verify">
      <ListItem button>
        <ListItemIcon>
          <ion-icon name="finger-print-outline" />
        </ListItemIcon>
        <ListItemText primary="Verify Api" />
      </ListItem>
    </Link>
    <Link style={{ textDecoration: 'none' }} to="/payments">
      <ListItem button>
        <ListItemIcon>
          <ion-icon name="card-outline" />
        </ListItemIcon>
        <ListItemText primary="Payments" />
      </ListItem>
    </Link>
    <Link style={{ textDecoration: 'none' }} to="/api_logs">
      <ListItem button>
        <ListItemIcon>
          <ion-icon name="document-text-outline" />
        </ListItemIcon>
        <ListItemText primary="API logs" />
      </ListItem>
    </Link>
    <Link style={{ textDecoration: 'none' }} to="/settings">
      <ListItem button>
        <ListItemIcon>
          <ion-icon name="settings-outline" />
        </ListItemIcon>
        <ListItemText primary="Settings" />
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Saved reports</ListSubheader>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Current month" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Last quarter" />
    </ListItem>
    <ListItem button>
      <ListItemIcon>
        <AssignmentIcon />
      </ListItemIcon>
      <ListItemText primary="Year-end sale" />
    </ListItem>
  </div>
);
