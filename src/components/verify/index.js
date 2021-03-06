import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import HeadNav from '../Nav';
import Table from './Table';
import CreateButton from './create';
import { useSelector, useDispatch } from 'react-redux';
import Actions from './verify.action';
import { Box, IconButton, Typography } from '@material-ui/core';
import Tab from './docs';
import List from './verify.list';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    marginTop: '3.5rem',
    margin: 33,
  },
  container: {
    paddingTop: theme.spacing(1),
    paddingBottom: theme.spacing(1),
  },
  appBarSpacer: theme.mixins.toolbar,
  paper: {
    paddingTop: 0,
    padding: theme.spacing(1),
  },
  iconButton: {
    borderRadius: 4,
    padding: 5,
    background: theme.palette.primary.main,
    color: 'white',
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useMemo(async () => {
    dispatch(await Actions.GetOtpProfile());
  }, [dispatch]);

  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={8}>
          <Paper className={classes.paper}>
            <Table />
          </Paper>
        </Grid>
        <List />
      </Grid>
    </>
  );
}