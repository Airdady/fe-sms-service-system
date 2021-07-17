import React from 'react';
import {
  fade,
  withStyles,
  makeStyles,
  createMuiTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import { green } from '@material-ui/core/colors';
import { Box, Button, Divider, Grid, Typography } from '@material-ui/core';
import AddressCard from './address.card';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    display: 'flex',
  },
  cLabel: {
    justifyContent: 'flex-end',
    display: 'flex',
    alignItems: 'center',
    paddingRight: '1rem',
  },
}));
const BootstrapInput = withStyles((theme) => ({
  root: {
    'label + &': {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 4,
    position: 'relative',
    backgroundColor: theme.palette.common.white,
    border: '1px solid #ced4da',
    fontSize: 16,
    width: '100%',
    padding: '10px 12px',
    '&:focus': {
      borderColor: theme.palette.primary.main,
    },
  },
}))(InputBase);

export default function CustomizedInputs() {
  const classes = useStyles();

  return (
    <form className={classes.root} noValidate>
      <Grid container spacing={3}>
        <Grid item md={4}>
          <Box mb={2}>
            <AddressCard />
          </Box>
          <Box mb={2}>
            <AddressCard />
          </Box>
          <Box mb={2}>
            <AddressCard />
          </Box>
        </Grid>
        <Grid item md={8}>
          <Box p={2} mb={1}>
            <Typography variant="h4">Address</Typography>
            <Typography variant="p">
              Add new address that will bee used for Billing Purposes
            </Typography>
          </Box>
          <Divider style={{ marginBottom: 15 }} />
          <Grid container spacing={3}>
            <Grid item md={12}>
              <Grid container className={classes.margin}>
                <Grid item md={3} className={classes.cLabel}>
                  <Typography variant="p">Street Address</Typography>
                </Grid>
                <Grid item md={8}>
                  <BootstrapInput style={{ width: '100%' }} id="old-password" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12}>
              <Grid container className={classes.margin}>
                <Grid item md={3} className={classes.cLabel}>
                  <Typography variant="p">City</Typography>
                </Grid>
                <Grid item md={8}>
                  <BootstrapInput style={{ width: '100%' }} id="old-password" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12}>
              <Grid container className={classes.margin}>
                <Grid item md={3} className={classes.cLabel}>
                  <Typography variant="p">State</Typography>
                </Grid>
                <Grid item md={8}>
                  <BootstrapInput style={{ width: '100%' }} id="old-password" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12}>
              <Grid container className={classes.margin}>
                <Grid item md={3} className={classes.cLabel}>
                  <Typography variant="p">Zip Code</Typography>
                </Grid>
                <Grid item md={8}>
                  <BootstrapInput style={{ width: '100%' }} id="old-password" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={12}>
              <Grid container className={classes.margin}>
                <Grid item md={3} className={classes.cLabel}>
                  <Typography variant="p">Country</Typography>
                </Grid>
                <Grid item md={8}>
                  <BootstrapInput style={{ width: '100%' }} id="old-password" />
                </Grid>
              </Grid>
            </Grid>
            <Grid item md={11}>
              <Box display="flex" justifyContent="space-between">
                <Button
                  variant="contained"
                  size="small"
                  type="submit"
                  color="primary"
                  style={{ marginLeft: 'auto' }}
                >
                  SAVE
                </Button>
              </Box>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </form>
  );
}
