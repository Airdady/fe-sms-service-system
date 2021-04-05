import React, { useMemo } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import HeadNav from '../Nav';
import Table from './Table';
import CreateButton from './create';
import { useSelector, useDispatch } from 'react-redux';
import Actions from './verify.action';

const useStyles = makeStyles((theme) => ({
  title: {
    flexGrow: 1,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
    marginTop: '3.5rem',
    margin: 33,
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  appBarSpacer: theme.mixins.toolbar,
  paper: {
    padding: theme.spacing(2),
    overflow: 'auto',
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const dispatch = useDispatch();

  useMemo(async () => {
    dispatch(await Actions.GetOtpProfile());
  }, [dispatch]);

  const data = useSelector(({ VerifyProfile }) => VerifyProfile.data);
  return (
    <>
      <HeadNav title="Api Keys" />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
              <CreateButton />
              <Table data={data} />
            </Paper>
          </Grid>
        </Grid>
      </main>
    </>
  );
}
