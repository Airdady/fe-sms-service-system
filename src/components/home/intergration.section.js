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
    <Box bgcolor="grey.500" p={6} style={{ transform: 'skewY(-3deg)' }}>
      <Container style={{ transform: 'skewY(3deg)' }} maxWidth="md">
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Box display="flex" alignItems="center" height="100%">
              <Box>
                <Typography variant="h4" gutterBottom>
                  The world’s most powerful and easy-to-use APIs
                </Typography>
                <Typography variant="body1">
                  Send airtime online with a simple APIs, SDKS, Widgets or
                  Plugins. With just a few lines of code, you can add mobile
                  top-up to your web or mobile application in the programming
                  language you already use.
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
                  The world’s most powerful and easy-to-use APIs
                </Typography>
                <Typography variant="body1">
                  Send airtime online with a simple APIs, SDKS, Widgets or
                  Plugins. With just a few lines of code, you can add mobile
                  top-up to your web or mobile application in the programming
                  language you already use.
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
