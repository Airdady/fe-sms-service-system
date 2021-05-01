import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuNav from '../../home/nav';
import { Container, Typography, Box, Button, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import SearchInput from '../../home/search';
import Highlight from 'react-highlight';
import ProductFeatures from './features';
import ProductReports from './reports';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import StarIcon from '@material-ui/icons/Star';
import Footer from '../../home/Footer';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundSize: 'cover',
    background:
      'url(https://numverify.com/images/promo_bgs/numverify_promo_bg.jpg)',
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
    height: '350px',
    // clipPath: "polygon(100% 0, 100% 99%, 0 78%, 0 0)",
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
    <Box display="flex" flexDirection="column" flexGrow={1}>
      <div className={classes.root}>
        <MenuNav />
        {/* <div className={classes.bgColor}> */}
        <div className={classes.bgColor}>
          <Container maxWidth="lg" style={{ height: '350px' }}>
            <Grid container style={{ height: '100%' }}>
              <Grid item md={4} style={{ marginTop: '6rem' }}>
                <Typography variant="h6" style={{ color: 'white' }}>
                  Global Phone Number Validation & Lookup JSON API
                </Typography>
                <Box mt={4} display>
                  <Button variant="contained">Get started</Button>
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
                  marginTop: '2rem',
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
      <Box p={5} width="100%" bgcolor="#f0f3fb" textAlign="left">
        <Container>
          <Grid container spacing={3}>
            <Box mt={5}>
              <Box textAlign="left" mb={3}>
                <Typography variant="h4">What is Route OTP?</Typography>
                <Typography variant="subtitle1">
                  Route OTP is a security solution that ensures safe and secure
                  login process. Integrate Route OTP in your existing system and
                  manage the entire end to end business process ranging from OTP
                  generation, delivery via SMS, time tracking and authentication
                  without utilizing any additional resources.
                </Typography>
              </Box>
              <ProductFeatures />
            </Box>
          </Grid>
        </Container>
      </Box>
      <Box p={5} width="100%" bgcolor="white" mt={4} textAlign="left">
        <Container>
          <Grid container spacing={3}>
            <Grid item md={6}>
              <img
                style={{ width: '90%' }}
                src="https://www.moshified.com/easy@2x.31665d23.jpg"
              />
            </Grid>
            <Grid item md={6}>
              <Box mb={2}>
                <Typography variant="h5">Wordpress Made Easy</Typography>
                <Typography variant="subtitle1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  obcaecati vel ad unde est illo at. Labore excepturi officia
                  dolores!
                </Typography>
              </Box>
              <Button variant="outlined">Read Documentation</Button>
            </Grid>
            <Grid item md={6}>
              <Box mb={2}>
                <Typography variant="h5">Wordpress Made Easy</Typography>
                <Typography variant="subtitle1">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quam
                  obcaecati vel ad unde est illo at. Labore excepturi officia
                  dolores!
                </Typography>
              </Box>
              <Button variant="outlined">Read Documentation</Button>
            </Grid>
            <Grid item md={6}>
              <img
                style={{ width: '90%' }}
                src="https://www.moshified.com/easy@2x.31665d23.jpg"
              />
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Box p={5} width="100%" bgcolor="#f0f3fb" mt={4} textAlign="center">
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
