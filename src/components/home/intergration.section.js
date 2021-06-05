import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const IntegrationSection = () => {
  const classes = useStyles();

  return (
    <Box bgcolor="white" p={6} style={{ transform: 'skewY(-3deg)' }}>
      <Container style={{ transform: 'skewY(3deg)' }} maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Box display="flex" alignItems="center" height="100%">
              <Box>
                <Typography variant="h4" gutterBottom>
                  Verification Api / OTP
                </Typography>
                <Typography variant="body1">
                  Verification Api is a security solution that ensures safe and
                  secure login process. Integrate Verification Api in your
                  existing system and manage the entire end to end business
                  process ranging from OTP generation, delivery via SMS, time
                  tracking and authentication without utilizing any additional
                  resources.
                </Typography>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6}>
            <img
              src="https://cdn.reloadly.com/assets-v2/images/art-4.svg"
              alt="he"
            />
          </Grid>
          <Grid item md={6}>
            <img
              src="https://cdn.reloadly.com/assets-v2/images/art-4.svg"
              alt="he"
            />
          </Grid>
          <Grid item md={6}>
            <Box display="flex" alignItems="center" height="100%">
              <Box>
                <Typography variant="h4" gutterBottom>
                 Airdady  SMS Api
                </Typography>
                <Typography variant="body1">
                  An extension of Enterprise Messaging Solution, two-way
                  messaging as the name suggests allows both the enterprise and
                  the end-user to send and receive messages; which in most cases
                  is customer initiated. Creating a communicational loop between
                  the enterprise and the end user, two-way messaging solution
                  eliminates the need for the user to call customer care or to
                  log into the web portals.
                </Typography>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IntegrationSection;
