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
import { Box, Button, Grid } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  margin: {
    margin: theme.spacing(1),
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
        <Grid item xs={6}>
          <FormControl fullWidth className={classes.margin}>
            <InputLabel shrink htmlFor="old-password">
              Old Password
            </InputLabel>
            <BootstrapInput id="old-password" />
          </FormControl>
          <FormControl fullWidth className={classes.margin}>
            <InputLabel shrink htmlFor="new-password">
              New Password
            </InputLabel>
            <BootstrapInput id="new-password" />
          </FormControl>
          <FormControl fullWidth className={classes.margin}>
            <InputLabel shrink htmlFor="confirm-password">
              confirm Password
            </InputLabel>
            <BootstrapInput required id="confirm-password" />
          </FormControl>
        </Grid>
      </Grid>
      <Box mt={2} display="flex" justifyContent="space-between">
        <Button variant="contained" size="small" type="submit" color="primary">
          SAVE
        </Button>
      </Box>
    </form>
  );
}
