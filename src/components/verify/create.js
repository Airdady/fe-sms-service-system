import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
// import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import Actions from './verify.action';
import AddRoundedIcon from '@material-ui/icons/AddRounded';
import { IconButton } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const uuid = require('uuid');

const useStyles = makeStyles((theme) => ({
  iconButton: {
    borderRadius: 4,
    padding: 5,
    background: theme.palette.primary.main,
    color: 'white',
  },
}));


export default function FormDialog() {
  const classes = useStyles();
  const dispatch = useDispatch();
  // const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [values, setValues] = useState({
    otplen: 4,
    expiry: 600,
    profileName: '',
    senderName: '',
    serviceToken: `AC-${uuid.v4().replaceAll('-', '.')}`,
    msg: 'Your one-time verification code is {code}',
  });

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(await Actions.CreateOtpProfile(values));
    handleClose();
  };

  const { loaded } = useSelector(({ VerifyProfile }) => VerifyProfile);

  return (
    <div>
      <IconButton size="small" onClick={handleClickOpen} className={classes.iconButton}>
        <AddRoundedIcon fontSize="small" />
      </IconButton>
      <Dialog open={open} onClose={handleClose}>
        <DialogTitle id="form-dialog-title">Create Profile</DialogTitle>
        <form onSubmit={handleSubmit}>
          <DialogContent>
            <Grid container spacing={3}>
              <Grid item md={12}>
                <FormControl fullWidth>
                  <TextField
                    label="Profile Name"
                    variant="outlined"
                    size="small"
                    onChange={handleChange('profileName')}
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item md={12}>
                <FormControl fullWidth>
                  <TextField
                    label="Sender Name"
                    variant="outlined"
                    size="small"
                    onChange={handleChange('senderName')}
                    required
                  />
                </FormControl>
              </Grid>
              <Grid item md={12}>
                <FormControl fullWidth>
                  <TextField
                    fullWidth
                    disabled
                    label="Service Token"
                    defaultValue={values.serviceToken}
                    variant="outlined"
                    size="small"
                    onChange={handleChange('serviceToken')}
                  />
                </FormControl>
              </Grid>
              <Grid item md={6}>
                <FormControl fullWidth>
                  <TextField
                    select
                    fullWidth
                    label="Select Code Length"
                    variant="outlined"
                    size="small"
                    value={values.otplen}
                    onChange={handleChange('otplen')}
                  >
                    {[4, 5, 6, 7, 8, 9, 10].map((option) => (
                      <MenuItem key={option.value} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </Grid>
              <Grid item md={6}>
                <FormControl fullWidth>
                  <TextField
                    label="Expiry Time in (seconds)"
                    type="number"
                    defaultValue={values.expiry}
                    variant="outlined"
                    size="small"
                    onChange={handleChange('expiry')}
                  />
                </FormControl>
              </Grid>
              <Grid item md={12}>
                <FormControl fullWidth>
                  <TextField
                    label="Message Template"
                    multiline
                    rows={3}
                    defaultValue={values.msg}
                    variant="outlined"
                    onChange={handleChange('msg')}
                  />
                </FormControl>
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Box mx={2}>
              <Button onClick={handleClose} color="primary">
                Cancel
              </Button>
              <Button
                variant="contained"
                size="small"
                type="submit"
                color="primary"
                disabled={!loaded}
              >
                {!loaded ? 'LOADING . . .' : 'SAVE'}
              </Button>
            </Box>
          </DialogActions>
        </form>
      </Dialog>
    </div>
  );
}
