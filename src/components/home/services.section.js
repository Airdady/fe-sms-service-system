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
                    Its time to build make your first Api Call
                  </Typography>
                  <Typography variant="body2">
                    Signup for a developer account and connect to our Api in A
                    minute
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
                    Its time to build make your first Api Call
                  </Typography>
                  <Typography variant="body2">
                    Signup for a developer account and connect to our Api in A
                    minute
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
                    Its time to build make your first Api Call
                  </Typography>
                  <Typography variant="body2">
                    Signup for a developer account and connect to our Api in A
                    minute
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
                    Its time to build make your first Api Call
                  </Typography>
                  <Typography variant="body2">
                    Signup for a developer account and connect to our Api in A
                    minute
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
