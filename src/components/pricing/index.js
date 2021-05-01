import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuNav from '../home/nav';
import { Container, Typography, Box, Button, Paper } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';
import Footer from '../home/Footer';
import CountrySelector from './country.selector';

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
    minWidth: 350,
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
    height: '250px',
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
        <Box display="flex" alignItems="center" className={classes.bgColor}>
          <Container maxWidth="lg">
            <Grid container style={{ height: '100%' }}>
              <Grid item md={12}>
                <Box
                  display="flex"
                  flexGrow={1}
                  textAlign="center"
                  justifyContent="space-around"
                >
                  <Box justifyContent="space-around" flexGrow={1}>
                    <Typography
                      variant="h3"
                      style={{ color: 'white' }}
                      gutterBottom
                    >
                      Pricing
                    </Typography>
                    <Grid item md={5}>
                      <CountrySelector />
                    </Grid>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </Box>
      </div>
      <Box p={5} width="100%" bgcolor="#f0f3fb" textAlign="left">
        <Container>
          <Grid container spacing={3}>
            <Grid item md={6}></Grid>
          </Grid>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
}
