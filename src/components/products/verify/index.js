import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuNav from '../../home/nav';
import { Container, Typography, Box, Button, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import SearchInput from '../../home/search';
import Highlight from 'react-highlight';
import ProductFeatures from './features';
import Footer from '../../home/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundSize: 'cover',
    background:
      'url(https://i.ibb.co/kc0sppy/abstract-digital-technology-background-with-network-connection-lines.jpg)',
    '& .hljs': {
      borderRadius: theme.shape.borderRadius,
    },
  },
  table: {
    minWidth: 450,
    marginTop: '1rem',
  },
  cardContent: {
    marginTop: '-8rem',
    position: 'relative',
    zIndex: 100,
    padding: '1rem',
  },
  bgColor: {
    width: '100%',
    height: '400px',
    background: 'transparent',
  },
  rightBtn: {
    marginLeft: '1rem',
    background: theme.palette.primary.dark,
  },
  popularPaper: {
    padding: '1rem',
    textAlign: 'center',
    borderLeft: 0,
    background: 'transparent',
    color: 'white',
  },
  centerContent: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'start',
  },
  goodies: {
    width: '100%',
    marginBottom: '3rem',
    padding: '3rem 0',
  },
}));

export default function BasicTable() {
  const classes = useStyles();

  return (
    <Box display="flex" bgcolor="white" flexDirection="column" flexGrow={1}>
      <div className={classes.root}>
        {/* <div className={classes.bgColor}> */}
        <div className={classes.bgColor}>
          <Container maxWidth="lg" style={{ height: '350px' }}>
            <Grid container style={{ height: '100%' }}>
              <Grid item md={4} style={{ marginTop: '6rem' }}>
        <Typography variant="h4" style={{ color: 'white' }}>
              Verification SMS
                </Typography>
                <Typography variant="h6" style={{ color: 'white' }}>
                Increase the registration conversion rate and speed up your business process
                </Typography>
                <Typography variant="p" style={{color: 'white'}}>
                Support a variety of languages, help global users to carry out security verification through the fastest way, 
                retain every customer, 
                let customers feel the enterprise's efficient service, 
                promote the business development of the enterprise.
                </Typography>
                <Box mt={4} display>
                  <Button variant="contained">Free Trail</Button>
                  <Button variant="contained" className={classes.rightBtn}>
                    Talk to Experts
                  </Button>
                </Box>
              </Grid>
              <Grid
                item
                xs={6}
                style={{
                  display: 'flex',
                  justifyContent: 'space-around',
                  backgroundSize: 'cover',
                  marginLeft: 'auto',
                }}
              >
                <Grid
                  container
                  xs={10}
                  style={{
                    alignItems: 'center',
                  }}
                >
                  <Paper
                    style={{
                      width: '100%',
                      background: '#ffffff4a',
                    }}
                  >
                    <Grid container xs={12}>
                      <Box mx={2} mt={2} flexGrow={1}>
                        <SearchInput />
                      </Box>
                      <Box mx={2} flexGrow={1}>
                        <Highlight language="json">
                          {`{
   "valid": true,   
   "local_format": "4158586273",
   "intl_format": "+14158586273",
   "country_code": "US",
   "country_name": "United States of America",
   "location": "Novato",
   "carrier": "AT&T Mobility LLC",
   "line_type": "mobile"
}`}
                        </Highlight>
                      </Box>
                    </Grid>
                  </Paper>
                </Grid>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
      <Box
        p={5}
        width="100%"
        bgcolor="white"
        textAlign="left"
        style={{ marginTop: '-2.5rem', transform: 'skewY(-3deg)' }}
      >
        <Container style={{ transform: 'skewY(3deg)' }}>
          <Grid container spacing={3}>
            <Box mt={5}>
              <Box textAlign="left" mb={3}>
                <Typography variant="h4">Stable and reliable technical support
to help you efficiently serve global customers</Typography>
              </Box>
              <ProductFeatures />
            </Box>
          </Grid>
        </Container>
      </Box>
      <Box
        px={5}
        py={12}
        width="100%"
        bgcolor="#f0f3fb"
        mt={4}
        textAlign="left"
        style={{ transform: 'skewY(-3deg)' }}
      >
        <Container style={{ transform: 'skewY(3deg)' }}>
          <Box my={5}>
            <Typography variant="h4">Assist new user registration and activation to retain every customer</Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item md={3}>
              <Paper className={classes.paper}>
                <Box className={classes.box} p={3}>
                  <Typography variant="h6">Convenient log in</Typography>
                  <Typography variant="subtitle1" className={classes.p}>
                    Dynamic authentication improves retention rate by eliminating the need to remember complex passwords.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item md={3}>
              <Paper className={classes.paper}>
                <Box className={classes.box} p={3}>
                  <Typography variant="h6">Ensure safety</Typography>
                  <Typography variant="subtitle1" className={classes.p}>
                  Sensitive operations are confirmed and 
                  authenticated to reduce malicious operations by illegal users and 
                  ensure account security
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item md={3}>
              <Paper className={classes.paper}>
                <Box className={classes.box} p={3}>
                  <Typography variant="h6">Identity authentication</Typography>
                  <Typography variant="subtitle1" className={classes.p}>
                  Guarantee the authenticity of registration, 
                  mobile phone number binding, retrieve password, 
                  and avoid repeated data.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item md={3}>
              <Paper className={classes.paper}>
                <Box className={classes.box} p={3}>
                  <Typography variant="h6">Information confirmation
                  <Typography variant="subtitle1" className={classes.p}>
                  Important information authentication, 
                  such as information change, 
                  payment confirmation, 
                  activity confirmation, 
                  to ensure information security.</Typography>
.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        px={5}
        py={12}
        width="100%"
        bgcolor="#002045"
        textAlign="left"
        style={{ transform: 'skewY(-3deg)' }}
      >
        <Container style={{ transform: 'skewY(3deg)' }}>
          <Box my={5}>
            <Typography variant="h4">Leading platform advantages and professional guarantee</Typography>
            
          </Box>
          <Grid container spacing={3}>
            <Grid item md={4}>
              <Paper className={classes.paper}>
                <Box className={classes.box} p={3}>
                  <Typography variant="h6">Channel advantage</Typography>
                  <Typography variant="subtitle1" className={classes.p}>
                  In-depth cooperation with hundreds of overseas operators, 
                  multi-protocol docking to ensure that demand is met, 
                  and multiple submission methods can easily reach the worldwide.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item md={4}>
              <Paper className={classes.paper}>
                <Box className={classes.box} p={3}>
                  <Typography variant="h6">Platform advantage</Typography>
                  <Typography variant="subtitle1" className={classes.p}>
                  With 15 years of international telecom operation experience, 
                  we can carry out independent research and 
                  development based on user needs and 
                  present a continuously optimized industry platform.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item md={4}>
              <Paper className={classes.paper}>
                <Box className={classes.box} p={3}>
                  <Typography variant="h6">Cost advantage</Typography>
                  <Typography variant="subtitle1" className={classes.p}>
                  The directly connected channel has low resource price and high efficiency. 
                  The platform has flexible billing mode, 
                  which can be sent on demand and provides multiple payment modes for users to choose.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box
        p={5}
        width="100%"
        bgcolor="#f0f3fb"
        textAlign="left"
        style={{ transform: 'skewY(-3deg)' }}
      >
        <Container style={{ transform: 'skewY(3deg)' }}>
          <Box my={5}>
            <Typography variant="h4">Create more value for your enterprise</Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item md={5}>
              <Paper className={classes.paper}>
                <Box className={classes.box} p={3}>
                  <Typography variant="h6">Easy Deployment</Typography>
                  <Typography variant="subtitle1" className={classes.p}>
                    Effortlessly integrate two API’s within few minutes before
                    starting the service.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item md={7}>
                <Typography variant="p" style={{color: 'black'}}>
                Don't underestimate text messages.
                </Typography>
            <Grid container spacing={3}>
            <Grid item md={12}>
              <Paper className={classes.paper}>
                <Box className={classes.box} p={3}>
                  <Typography variant="h6">New customers through verification code</Typography>
                  <Typography variant="subtitle1" className={classes.p}>
                  Provide a global stable connection SMS channel for your website and APP, 
                  quickly verify the authenticity of customers, improve the conversion rate of registration, 
                  help products to attract new customers efficiently.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item md={12}>
              <Paper className={classes.paper}>
                <Box className={classes.box} p={3}>
                  <Typography variant="h6">Product promotion</Typography>
                  <Typography variant="subtitle1" className={classes.p}>
                  Analyze registered users, 
                  filter potential users, 
                  promote your products and activities to them through messages, 
                  creating more value for your enterprise.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item md={12}>
              <Paper className={classes.paper}>
                <Box className={classes.box} p={3}>
                  <Typography variant="h6">Retentive customer maintenance</Typography>
                  <Typography variant="subtitle1" className={classes.p}>
                  We can send orders reminder, 
                  meeting notice, 
                  holiday blessing and so on through SMS, 
                  accurately grasp the time and events to interact with customers at key points of customer contact, 
                  and extend customer life cycle.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            </Grid>
            </Grid>
            
          </Grid>
        </Container>
      </Box>
      <Box
        p={5}
        width="100%"
        bgcolor="#f0f3fb"
        textAlign="left"
        style={{ transform: 'skewY(-3deg)' }}
      >
        <Container style={{ transform: 'skewY(3deg)' }}>
          <Box my={5}>
            <Typography variant="h4">4 steps to access in</Typography>
          </Box>

          <Grid container spacing={3}>
            <Grid item md={3}>
              <Paper className={classes.paper}>
                <Box className={classes.box} p={3}>
                  <Typography variant="h6">Sign up</Typography>
                  <Typography variant="subtitle1" className={classes.p}>
                  Authorization key is automatically generated after signed up.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item md={3}>
              <Paper className={classes.paper}>
                <Box className={classes.box} p={3}>
                  <Typography variant="h6">Protocal setting</Typography>
                  <Typography variant="subtitle1" className={classes.p}>
                  Support SMPP protoal,allow API HTTPinterface.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item md={3}>
              <Paper className={classes.paper}>
                <Box className={classes.box} p={3}>
                  <Typography variant="h6">Docking platform adjusting</Typography>
                  <Typography variant="subtitle1" className={classes.p}>
                  Adjusting accoding to mimicking production environment,avoid unknowns in advance.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
            <Grid item md={3}>
              <Paper className={classes.paper}>
                <Box className={classes.box} p={3}>
                  <Typography variant="h6">Production process</Typography>
                  <Typography variant="subtitle1" className={classes.p}>
                  Schedule taskes,status report timely.
                  </Typography>
                </Box>
              </Paper>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box p={5} width="100%" mt={4} textAlign="center">
        <Container>
          <Grid container spacing={3}>
            <Grid style={{ margin: 'auto' }} item md={7}>
              <Box width="100%" mt={5}>
                <Typography variant="h3" gutterBottom>
                  Contact us to get a service presentation.
                </Typography>
                <Typography variant="subtitle1" gutterBottom>
                  D7 can give you a service presentation, help you gain your
                  customers’ trust and qualify your leads to recognise the true
                  value of words.
                </Typography>
                <Box width="100%" mt={2}>
                  <Button variant="outlined">Read Documentation</Button>
                </Box>
              </Box>
            </Grid>
          </Grid>
        </Container>
      </Box>

      <Footer />
    </Box>
  );
}
