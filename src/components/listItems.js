import React from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import ListSubheader from "@material-ui/core/ListSubheader";
import DashboardIcon from "@material-ui/icons/Dashboard";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import PeopleIcon from "@material-ui/icons/People";
import BarChartIcon from "@material-ui/icons/BarChart";
import AssignmentIcon from "@material-ui/icons/Assignment";
import { Link } from "react-router-dom";

export const mainListItems = (
  <div>
    <Link style={{ textDecoration: "none" }} to="/dashboard">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
      </ListItem>
    </Link>
    <Link style={{ textDecoration: "none" }} to="/verify">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
      </ListItem>
    </Link>
    <Link style={{ textDecoration: "none" }} to="/sms">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
      </ListItem>
    </Link>
    <Link style={{ textDecoration: "none" }} to="/number_lookup">
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
      </ListItem>
    </Link>
  </div>
);

export const secondaryListItems = (
  <div>
    <ListSubheader inset>Others</ListSubheader>
    <Link style={{ textDecoration: "none" }} to="/api_keys">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Api Keys" />
      </ListItem>
    </Link>
    <Link style={{ textDecoration: "none" }} to="/documentation">
      <ListItem button>
        <ListItemIcon>
          <AssignmentIcon />
        </ListItemIcon>
        <ListItemText primary="Documentation" />
      </ListItem>
    </Link>
  </div>
);
