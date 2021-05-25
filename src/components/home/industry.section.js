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

const IndustrySection = () => {
  const classes = useStyles();

  return (
    <Box px={6} py={12}>
      <Container>
        <Grid container spacing={3}>
          <Grid item md={12}>
            <Box textAlign="center" width="100%">
              <Typography variant="h4">
                More than 5,000 businesses use Reloadly API
              </Typography>
              <Typography variant="h6">
                More than 5,000 businesses use Reloadly’s data and airtime API
                to process millions of transactions. Looking for a more
                reliable, agile cost effective provider?. Talk to our experts
                for bulk pricing.
              </Typography>
            </Box>
          </Grid>
          <Grid item md={6}>
            <img
              src="https://cdn.reloadly.com/assets-v2/images/globe.svg"
              alt="globe"
            />
          </Grid>
          <Grid style={{ display: 'flex', alignItems: 'center' }} item md={6}>
            <Grid container spacing={3}>
              <Grid item md={3}>
                <Paper>
                  <Box p={2}>
                    <img
                      src="https://cdn.reloadly.com/assets-v2/images/globe5.svg"
                      alt="yes"
                    />
                    <Typography variant="caption">Mobile Operators</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item md={3}>
                <Paper>
                  <Box p={2}>
                    <img
                      src="https://cdn.reloadly.com/assets-v2/images/globe5.svg"
                      alt="yes"
                    />
                    <Typography variant="caption">Mobile Operators</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item md={3}>
                <Paper>
                  <Box p={2}>
                    <img
                      src="https://cdn.reloadly.com/assets-v2/images/globe5.svg"
                      alt="yes"
                    />
                    <Typography variant="caption">Mobile Operators</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item md={3}>
                <Paper>
                  <Box p={2}>
                    <img
                      src="https://cdn.reloadly.com/assets-v2/images/globe5.svg"
                      alt="yes"
                    />
                    <Typography variant="caption">Mobile Operators</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item md={3}>
                <Paper>
                  <Box p={2}>
                    <img
                      src="https://cdn.reloadly.com/assets-v2/images/globe5.svg"
                      alt="yes"
                    />
                    <Typography variant="caption">Mobile Operators</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item md={3}>
                <Paper>
                  <Box p={2}>
                    <img
                      src="https://cdn.reloadly.com/assets-v2/images/globe5.svg"
                      alt="yes"
                    />
                    <Typography variant="caption">Mobile Operators</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item md={3}>
                <Paper>
                  <Box p={2}>
                    <img
                      src="https://cdn.reloadly.com/assets-v2/images/globe5.svg"
                      alt="yes"
                    />
                    <Typography variant="caption">Mobile Operators</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item md={3}>
                <Paper>
                  <Box p={2}>
                    <img
                      src="https://cdn.reloadly.com/assets-v2/images/globe5.svg"
                      alt="yes"
                    />
                    <Typography variant="caption">Mobile Operators</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item md={3}>
                <Paper>
                  <Box p={2}>
                    <img
                      src="https://cdn.reloadly.com/assets-v2/images/globe5.svg"
                      alt="yes"
                    />
                    <Typography variant="caption">Mobile Operators</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item md={3}>
                <Paper>
                  <Box p={2}>
                    <img
                      src="https://cdn.reloadly.com/assets-v2/images/globe5.svg"
                      alt="yes"
                    />
                    <Typography variant="caption">Mobile Operators</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item md={3}>
                <Paper>
                  <Box p={2}>
                    <img
                      src="https://cdn.reloadly.com/assets-v2/images/globe5.svg"
                      alt="yes"
                    />
                    <Typography variant="caption">Mobile Operators</Typography>
                  </Box>
                </Paper>
              </Grid>
              <Grid item md={3}>
                <Paper>
                  <Box p={2}>
                    <img
                      src="https://cdn.reloadly.com/assets-v2/images/globe5.svg"
                      alt="yes"
                    />
                    <Typography variant="caption">Mobile Operators</Typography>
                  </Box>
                </Paper>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default IndustrySection;
