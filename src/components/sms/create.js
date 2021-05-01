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
import Actions from './sms.action';

const uuid = require('uuid');

export default function FormDialog() {
  const dispatch = useDispatch();
  // const { enqueueSnackbar } = useSnackbar();
  const [open, setOpen] = useState(false);
  const [type] = useState([
    'Plain text (GSM 3.38 Character encoding)',
    'Flash (GSM 3.38 Character encoding)',
    'Unicode',
    'Reserved',
    'Plain text (ISO-8859-1 Character encoding)',
    'Unicode Flash',
    'Flash (ISO-8859-1 Character encoding)',
  ]);

  const [values, setValues] = useState({
    profileName: '',
    senderName: '',
    serviceToken: `AC-${uuid.v4().replaceAll('-', '.')}`,
    msg: 'Your one-time verification code is {code}',
    type: type[0],
    dlr: 'yes',
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

  const { loaded } = useSelector(({ SmsProfile }) => SmsProfile);

  return (
    <div>
      <Button
        variant="contained"
        size="small"
        color="primary"
        onClick={handleClickOpen}
      >
        ADD PROFILE
      </Button>
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
              <Grid item md={9}>
                <FormControl fullWidth>
                  <TextField
                    select
                    fullWidth
                    label="message Typee"
                    variant="outlined"
                    size="small"
                    value={values.type}
                    onChange={handleChange('type')}
                  >
                    {type.map((option) => (
                      <MenuItem key={option.value} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
                </FormControl>
              </Grid>
              <Grid item md={3}>
                <FormControl fullWidth>
                  <TextField
                    select
                    fullWidth
                    label="Delivery Report"
                    variant="outlined"
                    size="small"
                    value={values.dlr}
                    onChange={handleChange('dlr')}
                  >
                    {['yes', 'no'].map((option) => (
                      <MenuItem key={option.value} value={option}>
                        {option}
                      </MenuItem>
                    ))}
                  </TextField>
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
