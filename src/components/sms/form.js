import React, { useState } from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import { Box } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
// import { useSnackbar } from 'notistack';
import { useDispatch, useSelector } from 'react-redux';
import Actions from './verify.action';

const uuid = require('uuid');

const Form = ({ data }) => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    otplen: 4,
    expiry: 600,
    profileName: '',
    senderName: '',
    serviceToken: `AC-${uuid.v4().replaceAll('-', '.')}`,
    msg: 'Your one-time verification code is {code}',
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    dispatch(await Actions.CreateOtpProfile(values));
  };
  const { loaded } = useSelector(({ VerifyProfile }) => VerifyProfile);

  return (
    <form onSubmit={handleSubmit}>
      <Grid container spacing={3}>
        <Grid item md={12}>
          <FormControl fullWidth>
            <TextField
              label="Profile Name"
              variant="outlined"
              size="small"
              defaultValue={values.profileName}
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
              defaultValue={values.senderName}
              onChange={handleChange('senderName')}
              required
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
              defaultValue={values.otplen}
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
              label="Expiry Time in (sec)"
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
      <Box mt={2} display="flex" justifyContent="space-between">
        <Button color="primary">Cancel</Button>
        <Box mt={2}></Box>
        <Button
          variant="contained"
          size="small"
          type="submit"
          color="primary"
        >
          SAVE
        </Button>
      </Box>
    </form>
  );
};

export default Form;
