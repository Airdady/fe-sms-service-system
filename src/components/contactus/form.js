import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Paper } from '@material-ui/core';

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

const ExpertForm = () => {
  const classes = useStyles();

  return (
    <Paper>
      <Box p={4} className={classes.paper}>
        <Typography variant="h4">Talk To an Expert</Typography>
        <Typography variant="subtitle1">
          To Request for a Quote or want to schedule a business call contact us
          directly. Fill the form bellow and one of our experts will get back to
          you as soon as possible tank you
        </Typography>
        <form className={classes.form} noValidate>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="lastName"
                label="Last Name"
                name="lastName"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                id="email"
                label="Email Address"
                name="email"
                autoComplete="email"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                variant="outlined"
                required
                fullWidth
                name="telephone"
                label="telephone"
                type="telephone"
                id="telephone"
                autoComplete="current-telephone"
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                multiline
                variant="outlined"
                rows={5}
                defaultValue=""
              />
            </Grid>
          </Grid>
          <Button
            type="submit"
            fullWidth
            variant="contained"
            color="primary"
            className={classes.submit}
          >
            talk to experts
          </Button>
        </form>
      </Box>
    </Paper>
  );
};

export default ExpertForm;
