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
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    overflow: "auto",
    flexDirection: "column",
  },
}));
export const mainListItems = (
  <div>
    <Link style={{ textDecoration: "none" }} to="/">
      <ListItem button>
        <ListItemIcon>
          <DashboardIcon />
        </ListItemIcon>
        <ListItemText primary="Dashboard" />
      </ListItem>
    </Link>
    <Link style={{ textDecoration: "none" }} to="/verify">
      <ListItem button>
        <ListItemIcon>
          <ShoppingCartIcon />
        </ListItemIcon>
        <ListItemText primary="OTP service" />
      </ListItem>
    </Link>
    <Link style={{ textDecoration: "none" }} to="/sms">
      <ListItem button>
        <ListItemIcon>
          <PeopleIcon />
        </ListItemIcon>
        <ListItemText primary="Messages" />
      </ListItem>
    </Link>
    <Link style={{ textDecoration: "none" }} to="/number_lookup">
      <ListItem button>
        <ListItemIcon>
          <BarChartIcon />
        </ListItemIcon>
        <ListItemText primary="Lookup" />
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
