import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper } from '@material-ui/core';
import { Link } from 'react-router-dom';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';

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
    <Box bgcolor="white" p={12} style={{ transform: 'skewY(-3deg)' }}>
      <Container style={{ transform: 'skewY(3deg)' }} maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item md={6}>
            <Box display="flex" height="100%">
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
                <Box mt={3}>
                  <Link style={{ textDecoration: 'none' }} to="product/verify">
                    <Button endIcon={<ChevronRightRoundedIcon />}>
                      View Details
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box display="flex" justifyContent="space-around" ml="auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="300"
                height="300"
                viewBox="0 0 1225.993 1546.268"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="0.5"
                    x2="0.5"
                    y2="1"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stop-color="#fff" stop-opacity="0" />
                    <stop
                      offset="0.34"
                      stop-color="#fff"
                      stop-opacity="0.992"
                    />
                    <stop offset="1" stop-color="#feffff" />
                  </linearGradient>
                </defs>
                <g
                  id="Group_3"
                  data-name="Group 3"
                  transform="translate(-200.745 -229)"
                >
                  <path
                    id="Subtraction_3"
                    data-name="Subtraction 3"
                    d="M334.688,2943.5h-38V1604.552a93.63,93.63,0,0,0-2.278-20.881,108.488,108.488,0,0,0-6.718-20.32,119.462,119.462,0,0,0-24.326-35.609,110.636,110.636,0,0,0-13.792-11.8,97.745,97.745,0,0,0-15.31-9.068,84.357,84.357,0,0,0-16.454-5.819A74.533,74.533,0,0,0,200.584,1499H60.539a19.242,19.242,0,0,0-14.916,6.529c-3.844,4.282-6.518,10.57-7.949,18.688-2.23,13.326-5.808,24.746-10.633,33.942a57.656,57.656,0,0,1-14.687,18.474A40.234,40.234,0,0,1-12.7,1585.82H-518.929a37.645,37.645,0,0,1-10.483-1.569,42.606,42.606,0,0,1-14.7-7.753,57.659,57.659,0,0,1-14.7-18.491c-4.809-9.178-8.336-20.546-10.483-33.79-1.253-8.118-3.837-14.405-7.681-18.688A19.544,19.544,0,0,0-592.167,1499H-732.21a74.682,74.682,0,0,0-18.695,2.422,85.694,85.694,0,0,0-17.724,6.827,100.311,100.311,0,0,0-16.283,10.566,113.723,113.723,0,0,0-14.374,13.643,120.659,120.659,0,0,0-12,16.059,118.7,118.7,0,0,0-9.149,17.81,108.626,108.626,0,0,0-5.833,18.9,94.672,94.672,0,0,0-2.048,19.326V2943.5h-38V1602a142.046,142.046,0,0,1,2.865-28.416,140.323,140.323,0,0,1,8.216-26.467,141.077,141.077,0,0,1,13-23.951,142.018,142.018,0,0,1,17.217-20.867,142.044,142.044,0,0,1,20.867-17.216,140.939,140.939,0,0,1,23.951-13,140.33,140.33,0,0,1,26.467-8.216A142.063,142.063,0,0,1-725.313,1461h919a142.061,142.061,0,0,1,28.417,2.865,140.212,140.212,0,0,1,50.418,21.217,141.392,141.392,0,0,1,51.085,62.034,140.244,140.244,0,0,1,8.216,26.467A142.032,142.032,0,0,1,334.688,1602V2943.5Z"
                    transform="translate(1082 -1227)"
                    fill="#fff"
                    stroke="#1477f8"
                    stroke-miterlimit="10"
                    stroke-width="10"
                  />
                  <g
                    id="Group_2"
                    data-name="Group 2"
                    transform="translate(0 130)"
                  >
                    <g id="Group_1" data-name="Group 1">
                      <g
                        id="Rectangle_1"
                        data-name="Rectangle 1"
                        transform="translate(333 518)"
                        fill="#1477f8"
                        stroke="#707070"
                        stroke-width="1"
                      >
                        <path
                          d="M60,0H906a60,60,0,0,1,60,60V298a60,60,0,0,1-60,60H0a0,0,0,0,1,0,0V60A60,60,0,0,1,60,0Z"
                          stroke="none"
                        />
                        <path
                          d="M60,.5H906A59.5,59.5,0,0,1,965.5,60V298A59.5,59.5,0,0,1,906,357.5H1a.5.5,0,0,1-.5-.5V60A59.5,59.5,0,0,1,60,.5Z"
                          fill="none"
                        />
                      </g>
                      <text
                        id="Lorem_Ipsum_is_simply_dummytext_of_the_printing_and_typesettingindustry._Lorem_Ipsum_has_beenthe_industry_s_standard_dummytext_ever_since_the_1500s_"
                        data-name="Lorem Ipsum is simply dummytext of the 
printing and typesettingindustry. 
Lorem Ipsum has beenthe industry’s 
standard dummytext ever since the 1500s,"
                        transform="translate(388 633)"
                        fill="#f5f5f5"
                        font-size="45"
                        font-family="HelveticaNeue, Helvetica Neue"
                      >
                        <tspan x="0" y="0">
                          Lorem Ipsum is simply dummytext of the{' '}
                        </tspan>
                        <tspan x="0" y="54">
                          printing and typesettingindustry.{' '}
                        </tspan>
                        <tspan x="0" y="108">
                          Lorem Ipsum has beenthe industry’s{' '}
                        </tspan>
                        <tspan x="0" y="162">
                          standard dummytext ever since the 1500s,
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <text
                    id="E-Banking"
                    transform="translate(677 466)"
                    fill="#1377f9"
                    font-size="60"
                    font-family="HelveticaNeue, Helvetica Neue"
                  >
                    <tspan x="0" y="0">
                      E-Banking
                    </tspan>
                  </text>
                  <path
                    id="Intersection_1"
                    data-name="Intersection 1"
                    d="M-146.818,1742.5H-875.312V1609.553c0-51.516,45.372-105.553,96.1-105.553h140.044c12.5,0,20.364,9.007,22.864,25.218,9.289,57.28,41.085,61.6,50.373,61.6H-59.7c9.289,0,40.727-3.963,50.374-61.6C-6.467,1513.007,1.393,1504,13.54,1504H153.584c50.73,0,96.458,54.037,96.1,105.553V1742.5Z"
                    transform="translate(1129 -1232)"
                    fill="rgba(20,119,248,0.22)"
                  />
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M0,0H1225.993V563.269H0Z"
                    transform="translate(200.745 1211.999)"
                    fill="url(#linear-gradient)"
                  />
                  <text
                    id="Tuesday_._6:08_PM"
                    data-name="Tuesday . 6:08 PM"
                    transform="translate(579 609)"
                    fill="#001229"
                    font-size="47"
                    font-family="HelveticaNeue, Helvetica Neue"
                  >
                    <tspan x="0" y="0">
                      Tuesday . 6:08 PM
                    </tspan>
                  </text>
                </g>
              </svg>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box display="flex" justifyContent="space-around" ml="auto">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="300"
                height="300"
                viewBox="0 0 1225.993 1546.268"
              >
                <defs>
                  <linearGradient
                    id="linear-gradient"
                    x1="0.5"
                    x2="0.5"
                    y2="1"
                    gradientUnits="objectBoundingBox"
                  >
                    <stop offset="0" stop-color="#fff" stop-opacity="0" />
                    <stop
                      offset="0.34"
                      stop-color="#fff"
                      stop-opacity="0.992"
                    />
                    <stop offset="1" stop-color="#feffff" />
                  </linearGradient>
                </defs>
                <g
                  id="Group_3"
                  data-name="Group 3"
                  transform="translate(-200.745 -229)"
                >
                  <path
                    id="Subtraction_3"
                    data-name="Subtraction 3"
                    d="M334.688,2943.5h-38V1604.552a93.63,93.63,0,0,0-2.278-20.881,108.488,108.488,0,0,0-6.718-20.32,119.462,119.462,0,0,0-24.326-35.609,110.636,110.636,0,0,0-13.792-11.8,97.745,97.745,0,0,0-15.31-9.068,84.357,84.357,0,0,0-16.454-5.819A74.533,74.533,0,0,0,200.584,1499H60.539a19.242,19.242,0,0,0-14.916,6.529c-3.844,4.282-6.518,10.57-7.949,18.688-2.23,13.326-5.808,24.746-10.633,33.942a57.656,57.656,0,0,1-14.687,18.474A40.234,40.234,0,0,1-12.7,1585.82H-518.929a37.645,37.645,0,0,1-10.483-1.569,42.606,42.606,0,0,1-14.7-7.753,57.659,57.659,0,0,1-14.7-18.491c-4.809-9.178-8.336-20.546-10.483-33.79-1.253-8.118-3.837-14.405-7.681-18.688A19.544,19.544,0,0,0-592.167,1499H-732.21a74.682,74.682,0,0,0-18.695,2.422,85.694,85.694,0,0,0-17.724,6.827,100.311,100.311,0,0,0-16.283,10.566,113.723,113.723,0,0,0-14.374,13.643,120.659,120.659,0,0,0-12,16.059,118.7,118.7,0,0,0-9.149,17.81,108.626,108.626,0,0,0-5.833,18.9,94.672,94.672,0,0,0-2.048,19.326V2943.5h-38V1602a142.046,142.046,0,0,1,2.865-28.416,140.323,140.323,0,0,1,8.216-26.467,141.077,141.077,0,0,1,13-23.951,142.018,142.018,0,0,1,17.217-20.867,142.044,142.044,0,0,1,20.867-17.216,140.939,140.939,0,0,1,23.951-13,140.33,140.33,0,0,1,26.467-8.216A142.063,142.063,0,0,1-725.313,1461h919a142.061,142.061,0,0,1,28.417,2.865,140.212,140.212,0,0,1,50.418,21.217,141.392,141.392,0,0,1,51.085,62.034,140.244,140.244,0,0,1,8.216,26.467A142.032,142.032,0,0,1,334.688,1602V2943.5Z"
                    transform="translate(1082 -1227)"
                    fill="#fff"
                    stroke="#1477f8"
                    stroke-miterlimit="10"
                    stroke-width="10"
                  />
                  <g
                    id="Group_2"
                    data-name="Group 2"
                    transform="translate(0 130)"
                  >
                    <g id="Group_1" data-name="Group 1">
                      <g
                        id="Rectangle_1"
                        data-name="Rectangle 1"
                        transform="translate(333 518)"
                        fill="#1477f8"
                        stroke="#707070"
                        stroke-width="1"
                      >
                        <path
                          d="M60,0H906a60,60,0,0,1,60,60V298a60,60,0,0,1-60,60H0a0,0,0,0,1,0,0V60A60,60,0,0,1,60,0Z"
                          stroke="none"
                        />
                        <path
                          d="M60,.5H906A59.5,59.5,0,0,1,965.5,60V298A59.5,59.5,0,0,1,906,357.5H1a.5.5,0,0,1-.5-.5V60A59.5,59.5,0,0,1,60,.5Z"
                          fill="none"
                        />
                      </g>
                      <text
                        data-name="Lorem Ipsum is simply dummytext of the 
printing and typesettingindustry. 
Lorem Ipsum has beenthe industry’s 
standard dummytext ever since the 1500s,"
                        transform="translate(388 633)"
                        fill="#f5f5f5"
                        font-size="45"
                        font-family="HelveticaNeue, Helvetica Neue"
                      >
                        <tspan x="0" y="0">
                          Lorem Ipsum is simply dummytext of the{' '}
                        </tspan>
                        <tspan x="0" y="54">
                          printing and typesettingindustry.{' '}
                        </tspan>
                        <tspan x="0" y="108">
                          Lorem Ipsum has beenthe industry’s{' '}
                        </tspan>
                        <tspan x="0" y="162">
                          standard dummytext ever since the 1500s,
                        </tspan>
                      </text>
                    </g>
                  </g>
                  <text
                    id="E-Banking"
                    transform="translate(677 466)"
                    fill="#1377f9"
                    font-size="60"
                    font-family="HelveticaNeue, Helvetica Neue"
                  >
                    <tspan x="0" y="0">
                      E-Banking
                    </tspan>
                  </text>
                  <path
                    id="Intersection_1"
                    data-name="Intersection 1"
                    d="M-146.818,1742.5H-875.312V1609.553c0-51.516,45.372-105.553,96.1-105.553h140.044c12.5,0,20.364,9.007,22.864,25.218,9.289,57.28,41.085,61.6,50.373,61.6H-59.7c9.289,0,40.727-3.963,50.374-61.6C-6.467,1513.007,1.393,1504,13.54,1504H153.584c50.73,0,96.458,54.037,96.1,105.553V1742.5Z"
                    transform="translate(1129 -1232)"
                    fill="rgba(20,119,248,0.22)"
                  />
                  <path
                    id="Path_2"
                    data-name="Path 2"
                    d="M0,0H1225.993V563.269H0Z"
                    transform="translate(200.745 1211.999)"
                    fill="url(#linear-gradient)"
                  />
                  <text
                    id="Tuesday_._6:08_PM"
                    data-name="Tuesday . 6:08 PM"
                    transform="translate(579 609)"
                    fill="#001229"
                    font-size="47"
                    font-family="HelveticaNeue, Helvetica Neue"
                  >
                    <tspan x="0" y="0">
                      Tuesday . 6:08 PM
                    </tspan>
                  </text>
                </g>
              </svg>
            </Box>
          </Grid>
          <Grid item md={6}>
            <Box display="flex" height="100%">
              <Box>
                <Typography variant="h4" gutterBottom>
                  Airdady SMS Api
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
                <Box mt={3}>
                  <Link style={{ textDecoration: 'none' }} to="product/verify">
                    <Button endIcon={<ChevronRightRoundedIcon />}>
                      View Details
                    </Button>
                  </Link>
                </Box>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IntegrationSection;
