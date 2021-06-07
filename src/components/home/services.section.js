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
    <Box p={10}>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Paper elevation={0}>
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
            <Paper elevation={0}>
              <Box p={3} display="flex">
                <Box mr={3}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="70"
                    height="70"
                    viewBox="0 0 429.691 487.719"
                  >
                    <g
                      id="Group_13"
                      data-name="Group 13"
                      transform="translate(-2310.277 -569.34)"
                    >
                      <path
                        id="Path_62"
                        data-name="Path 62"
                        d="M220.867,266.176a7.616,7.616,0,0,0-2.742-.094,18.188,18.188,0,0,1-16.086-18.035,8,8,0,0,0-16,0A34.224,34.224,0,0,0,211.2,281v8a8,8,0,0,0,16,0v-7.516a34.162,34.162,0,0,0-7-67.6,18.164,18.164,0,1,1,18.164-18.164,8,8,0,0,0,16,0A34.225,34.225,0,0,0,227.2,162.281V155a8,8,0,0,0-16,0v7.77a34.16,34.16,0,0,0,9,67.113,18.153,18.153,0,0,1,.664,36.293Zm0,0"
                        transform="translate(2309.917 569.34)"
                        fill="#0192fe"
                      />
                      <path
                        id="Path_63"
                        data-name="Path 63"
                        d="M104.2,222.5A116.008,116.008,0,1,0,220.2,106.492,116.007,116.007,0,0,0,104.2,222.5ZM220.2,122.492A100.008,100.008,0,1,1,120.2,222.5,100.006,100.006,0,0,1,220.2,122.492Zm0,0"
                        transform="translate(2309.917 569.34)"
                        fill="#0192fe"
                      />
                      <path
                        id="Path_64"
                        data-name="Path 64"
                        d="M375.648,358.23,312.98,387.84a51.043,51.043,0,0,0-43.516-26.852l-57.852-1.59a61.1,61.1,0,0,1-26.293-6.789l-5.887-3.051a103.833,103.833,0,0,0-96.176.1l.367-13.336a8,8,0,0,0-7.777-8.219L12.41,326.359A8,8,0,0,0,4.2,334.137L.363,473.348a8,8,0,0,0,7.777,8.219l63.437,1.746H71.8a8,8,0,0,0,8-7.781l.184-6.66,16.48-8.824a28.269,28.269,0,0,1,21.1-2.309l98.414,27.621c.172.051.344.09.52.129a105.348,105.348,0,0,0,21.629,2.23,106.739,106.739,0,0,0,44.59-9.73,7.429,7.429,0,0,0,.992-.547l142.691-92.3a8,8,0,0,0,2.621-10.656A40.412,40.412,0,0,0,375.648,358.23ZM16.578,465.793l3.391-123.219,47.441,1.3L64.02,467.1ZM275.5,463.7a90.7,90.7,0,0,1-55.469,6.191L121.887,442.34a44.236,44.236,0,0,0-32.977,3.605l-8.422,4.512,2.254-81.926a87.938,87.938,0,0,1,89.336-4.766l5.887,3.051a77.267,77.267,0,0,0,33.211,8.578l57.855,1.59a35.089,35.089,0,0,1,33.348,27.961L216.2,402.566a8,8,0,0,0-.441,16l95.1,2.617h.223a8,8,0,0,0,7.992-7.781,50.772,50.772,0,0,0-.773-10.379l64.277-30.371c.063-.027.125-.059.188-.09a24.443,24.443,0,0,1,27.641,3.871Zm0,0"
                        transform="translate(2309.917 569.34)"
                        fill="#546b81"
                      />
                      <path
                        id="Path_65"
                        data-name="Path 65"
                        d="M228.2,84V8a8,8,0,0,0-16,0V84a8,8,0,0,0,16,0Zm0,0"
                        transform="translate(2309.917 569.34)"
                        fill="#546b81"
                      />
                      <path
                        id="Path_66"
                        data-name="Path 66"
                        d="M288.2,84V48a8,8,0,0,0-16,0V84a8,8,0,0,0,16,0Zm0,0"
                        transform="translate(2309.917 569.34)"
                        fill="#546b81"
                      />
                      <path
                        id="Path_67"
                        data-name="Path 67"
                        d="M168.2,84V48a8,8,0,0,0-16,0V84a8,8,0,0,0,16,0Zm0,0"
                        transform="translate(2309.917 569.34)"
                        fill="#546b81"
                      />
                    </g>
                  </svg>
                </Box>
                <Box>
                  <Typography variant="h5" gutterBottom>
                    Money-back guarantee in 5 days
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
            <Paper elevation={0}>
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
            <Paper elevation={0}>
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
