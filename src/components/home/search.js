import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import DirectionsIcon from '@material-ui/icons/Directions';
import { Button } from '@material-ui/core';
import SendIcon from '@material-ui/icons/Send';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
    width: '100%',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
    fontSize:12
  },
  iconButton: {
    padding: 0,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function SearchInput() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <Button size='small' variant="contained" disabled>GET</Button>
      <InputBase className={classes.input} defaultValue="http://localhost:5000/api/v1/number_lookup/+256758307272" placeholder="Search Google Maps" />
      <IconButton
        color="primary"
        aria-label="directions"
        size="small"
      >
        <SendIcon />
      </IconButton>
    </Paper>
  );
}
