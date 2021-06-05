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

const ServiceSection = () => {
  const classes = useStyles();

  return (
    <Box p={15}>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Paper>
              <Box p={3} display="flex">
                <Box>
                  <img
                    height="100"
                    width="100"
                    src="https://cdn.reloadly.com/assets-v2/images/programmable-pic-1.svg"
                    alt="yes"
                  />
                </Box>
                <Box>
                  <Typography variant="h5" gutterBottom>
                    Free Trial Account
                  </Typography>
                  <Typography variant="body2">
                    Signup for a developer account for free no credit card
                    required and no hidden cost
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={6}>
            <Paper>
              <Box p={3} display="flex">
                <Box>
                  <img
                    height="100"
                    width="100"
                    src="https://cdn.reloadly.com/assets-v2/images/programmable-pic-1.svg"
                    alt="yes"
                  />
                </Box>
                <Box>
                  <Typography variant="h5" gutterBottom>
                    Money-back guarantee in 30 days
                  </Typography>
                  <Typography variant="body2">
                    We promise to provide the best services and if your not
                    satisfied with our services you can request your money back
                    within 30 days
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={6}>
            <Paper>
              <Box p={3} display="flex">
                <Box>
                  <img
                    height="100"
                    width="100"
                    src="https://cdn.reloadly.com/assets-v2/images/programmable-pic-1.svg"
                    alt="yes"
                  />
                </Box>
                <Box>
                  <Typography variant="h5" gutterBottom>
                    24/7 customer support
                  </Typography>
                  <Typography variant="body2">
                    We provide 24/7 customer support through our channel live
                    chart,contact page and out business whatsapp number
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
          <Grid item md={6}>
            <Paper>
              <Box p={3} display="flex">
                <Box>
                  <img
                    height="100"
                    width="100"
                    src="https://cdn.reloadly.com/assets-v2/images/programmable-pic-1.svg"
                    alt="yes"
                  />
                </Box>
                <Box>
                  <Typography variant="h5" gutterBottom>
                    Easy deployment
                  </Typography>
                  <Typography variant="body2">
                    Effortlessly integrate two API’s within few minutes before
                    starting the service and with multiple SDK that means
                    deployment with less codes
                  </Typography>
                </Box>
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default ServiceSection;
