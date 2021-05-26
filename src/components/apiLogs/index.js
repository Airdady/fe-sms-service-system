import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Highlight from 'react-highlight';
import { Box, Divider, Typography } from '@material-ui/core';

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

  return (
    <>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <Paper className={classes.paper}>
            <Box p={2}>
              <Typography variant="h6">API Logs</Typography>
            </Box>
            <Divider />
            <Box p={2}>
              <Highlight language="http">
                {`

${[1, 2, 3, 4, 5].map(
  () =>
    '> April 11, 2021, 1:36 p.m. New message submitted msgid:94acbcdc-e88e-434e-a5ec-768ab465906c  to:18722348603  from:VAMOO LTD \n'
)}

                  `}
              </Highlight>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </>
  );
}
