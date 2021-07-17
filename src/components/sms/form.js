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

const Form = () => {
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    dlrUrl: '',
    dlr: '',
    profileName: '',
    senderName: '',
    dlrLevel: ''
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
              defaultValue={values.senderId}
              onChange={handleChange('senderId')}
              required
            />
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <FormControl fullWidth>
            <TextField
              label="dlr"
              variant="outlined"
              size="small"
              defaultValue={values.dlr}
              onChange={handleChange('dlr')}
              required
            />
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <FormControl fullWidth>
            <TextField
              label="dlrUrl"
              variant="outlined"
              size="small"
              defaultValue={values.dlrUrl}
              onChange={handleChange('dlrUrl')}
              required
            />
          </FormControl>
        </Grid>
        <Grid item md={12}>
          <FormControl fullWidth>
            <TextField
              label="dlr level"
              variant="outlined"
              size="small"
              defaultValue={values.dlrLevel}
              onChange={handleChange('dlrLevel')}
              required
            />
          </FormControl>
        </Grid>
      </Grid>
      <Box mt={2} display="flex" justifyContent="space-between">
        <Button color="primary">Cancel</Button>
        {/* <Box mt={2}></Box> */}
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