import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import FileCopyRoundedIcon from '@material-ui/icons/FileCopyRounded';
import Stepper from './Stepper';
import DenseTable from './Table';
import HeadNav from '../Nav';
import { Link } from 'react-router-dom';

const drawerWidth = 60;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: 'none',
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: 'relative',
    whiteSpace: 'nowrap',
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: 'hidden',
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
  },
  paper: {
    padding: theme.spacing(2),
    display: 'flex',
    overflow: 'auto',
    flexDirection: 'column',
  },
  fixedHeight: {
    height: 170,
  },
  fixedHeight1: {
    height: 400,
  },
  green: {
    color: theme.palette.success.main,
  },
}));

export default function Dashboard() {
  const classes = useStyles();
  const fixedHeightPaper1 = clsx(classes.paper, classes.fixedHeight1);
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  return (
    <>
      <HeadNav title="Dashboard" />
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={3}>
            <Grid item md={12}>
              <Paper className={fixedHeightPaper}>
                <Grid container spacing={3}>
                  <Grid item md={8}>
                    <Box>
                      <Typography variant="subtitle1" gutterBottom>
                        Hi, Rumbiiha
                      </Typography>
                      <Typography
                        variant="caption"
                        style={{ marginTop: '-.5rem' }}
                        display="block"
                        gutterBottom
                      >
                        company
                      </Typography>
                      <Typography variant="subtitle1" gutterBottom>
                        Public Api Keys
                      </Typography>
                      <Grid container spacing={1} alignItems="flex-end">
                        <Grid item>
                          <TextField
                            style={{ width: '30rem' }}
                            value="VM_7d0eb91189353d00bbf1f5ba0ed322ee-c92d62ee"
                            id="input-with-icon-grid"
                          />
                        </Grid>
                        <Grid item>
                          <FileCopyRoundedIcon />
                        </Grid>
                        <Grid item>
                          <Button color="primary">manage Keys</Button>
                        </Grid>
                      </Grid>
                    </Box>
                  </Grid>
                  <Grid item md={4}>
                    <Box>
                      <Typography variant="subtitle1" gutterBottom>
                        Available Balance
                      </Typography>
                      <Typography
                        variant="h5"
                        className={classes.green}
                        style={{ marginTop: '-.5rem' }}
                        display="block"
                        gutterBottom
                      >
                        $ 15.6
                      </Typography>
                      <Typography
                        variant="caption"
                        style={{ marginTop: '-.5rem' }}
                        display="block"
                        gutterBottom
                      >
                        Upgrade now to buy phone numbers, publish your app in
                        the App Gallery, and take over the world.
                      </Typography>
                      <Button size="small" variant="contained" color="primary">
                        <Link to="/payments">Upgrade</Link>
                      </Button>
                    </Box>
                  </Grid>
                </Grid>
              </Paper>
            </Grid>
            <Grid item md={8}>
              <Paper className={fixedHeightPaper1}>
                <Stepper />
              </Paper>
            </Grid>
            <Grid item md={4}>
              <Paper className={fixedHeightPaper1}></Paper>
            </Grid>
            <Grid item md={12}>
              {/* <Paper> */}
              <DenseTable />
              {/* </Paper> */}
            </Grid>
          </Grid>
        </Container>
      </main>
    </>
  );
}
