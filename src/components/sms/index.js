import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Stepper from '@material-ui/core/Stepper';
import Step from '@material-ui/core/Step';
import StepLabel from '@material-ui/core/StepLabel';
import StepContent from '@material-ui/core/StepContent';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import { Box, Grid } from '@material-ui/core';
import Highlight from 'react-highlight';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: '100%',
  },
  button: {
    marginTop: theme.spacing(1),
    marginRight: theme.spacing(1),
  },
  actionsContainer: {
    marginBottom: theme.spacing(2),
  },
  resetContainer: {
    padding: theme.spacing(3),
  },
}));

function getSteps() {
  return ['overview', 'Integrate', 'Verify'];
}

const Overview = () => (
  <Box>
    <Box display="flex">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
        <Grid item xs={6}>
          <Card>
            <CardContent>
              <Typography color="textSecondary" gutterBottom>
                Word of the Day
              </Typography>
              <Typography variant="body2" component="p">
                well meaning and kindly.
                <br />
                {'"a benevolent smile"'}
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

const Integrate = () => (
  <Box>
    <Box display="flex">
      <Grid container spacing={3}>
        <Grid item xs={6}>
          <Paper style={{ border: 'solid 1px gainsboro' }} elevation={0}>
            <Box
              p={3}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6">NodeJs</Typography>
              <Button variant="outlined" color="primary" size="small">
                Default
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ border: 'solid 1px gainsboro' }} elevation={0}>
            <Box
              p={3}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6">NodeJs</Typography>
              <Button variant="outlined" color="primary" size="small">
                Default
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ border: 'solid 1px gainsboro' }} elevation={0}>
            <Box
              p={3}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6">NodeJs</Typography>
              <Button variant="outlined" color="primary" size="small">
                Default
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ border: 'solid 1px gainsboro' }} elevation={0}>
            <Box
              p={3}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6">NodeJs</Typography>
              <Button variant="outlined" color="primary" size="small">
                Default
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ border: 'solid 1px gainsboro' }} elevation={0}>
            <Box
              p={3}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6">NodeJs</Typography>
              <Button variant="outlined" color="primary" size="small">
                Default
              </Button>
            </Box>
          </Paper>
        </Grid>
        <Grid item xs={6}>
          <Paper style={{ border: 'solid 1px gainsboro' }} elevation={0}>
            <Box
              p={3}
              display="flex"
              alignItems="center"
              justifyContent="space-between"
            >
              <Typography variant="h6">NodeJs</Typography>
              <Button variant="outlined" color="primary" size="small">
                Default
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  </Box>
);

const Doc = () => (
  <Box display="flex" flexDirection="column">
    <Box display="flex" flexDirection="column">
      <Box display="flex">
        <span className="MuiStepLabel-root MuiStepLabel-vertical">
          <span className="MuiStepLabel-iconContainer">
            <svg
              className="MuiSvgIcon-root MuiStepIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="12"></circle>
              <text
                className="MuiStepIcon-text"
                x="12"
                y="16"
                text-anchor="middle"
              >
                1
              </text>
            </svg>
          </span>
          <span className="MuiStepLabel-labelContainer">
            <span className="MuiTypography-root MuiStepLabel-label MuiStepLabel-active MuiTypography-body2 MuiTypography-displayBlock">
              Make sure you have the prerequisites
            </span>
          </span>
        </span>
      </Box>
      <Box py={1} ml={4}>
        <Typography variant="p">
          Our library requires Node.js version 0.10, 0.12, or 4.
        </Typography>
      </Box>
    </Box>
    <Box display="flex" flexDirection="column">
      <Box display="flex">
        <span className="MuiStepLabel-root MuiStepLabel-vertical">
          <span className="MuiStepLabel-iconContainer">
            <svg
              className="MuiSvgIcon-root MuiStepIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="12"></circle>
              <text
                className="MuiStepIcon-text"
                x="12"
                y="16"
                text-anchor="middle"
              >
                2
              </text>
            </svg>
          </span>
          <span className="MuiStepLabel-labelContainer">
            <span className="MuiTypography-root MuiStepLabel-label MuiStepLabel-active MuiTypography-body2 MuiTypography-displayBlock">
              Create an API key
            </span>
          </span>
        </span>
      </Box>
      <Box py={1} ml={4}>
        <Typography variant="p">
          This allows your application to authenticate to our API and send mail.
          You can enable or disable additional permissions on the API keys page.
        </Typography>
      </Box>
    </Box>
    <Box display="flex" flexDirection="column">
      <Box display="flex">
        <span className="MuiStepLabel-root MuiStepLabel-vertical">
          <span className="MuiStepLabel-iconContainer">
            <svg
              className="MuiSvgIcon-root MuiStepIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="12"></circle>
              <text
                className="MuiStepIcon-text"
                x="12"
                y="16"
                text-anchor="middle"
              >
                3
              </text>
            </svg>
          </span>
          <span className="MuiStepLabel-labelContainer">
            <span className="MuiTypography-root MuiStepLabel-label MuiStepLabel-active MuiTypography-body2 MuiTypography-displayBlock">
              Install the package
            </span>
          </span>
        </span>
      </Box>
      <Box py={1} ml={4}>
        <Typography variant="p">
          The following recommended installation requires npm. If you are
          unfamiliar with npm, see the npm docs. Npm comes installed with
          Node.js since node version 0.8.x, therefore you likely already have
          it:
        </Typography>
        <Typography variant="caption">
          <Highlight language="json">{`npm install airdady`}</Highlight>
        </Typography>
      </Box>
    </Box>
    <Box display="flex" flexDirection="column">
      <Box display="flex">
        <span className="MuiStepLabel-root MuiStepLabel-vertical">
          <span className="MuiStepLabel-iconContainer">
            <svg
              className="MuiSvgIcon-root MuiStepIcon-root"
              focusable="false"
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <circle cx="12" cy="12" r="12"></circle>
              <text
                className="MuiStepIcon-text"
                x="12"
                y="16"
                text-anchor="middle"
              >
                4
              </text>
            </svg>
          </span>
          <span className="MuiStepLabel-labelContainer">
            <span className="MuiTypography-root MuiStepLabel-label MuiStepLabel-active MuiTypography-body2 MuiTypography-displayBlock">
              Send your first SMS
            </span>
          </span>
        </span>
      </Box>
      <Box py={2} ml={4}>
        <Typography variant="p">
          The following is the minimum needed code to send an email:
        </Typography>
        <Typography variant="caption">
          <Highlight language="json">
            {`
  // using Twilio SendGrid's v3 Node.js Library
  // https://github.com/sendgrid/sendgrid-nodejs
  javascript
  const sgMail = require('@sendgrid/mail')
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  const msg = {
    to: 'test@example.com', // Change to your recipient
    from: 'test@example.com', // Change to your verified sender
    subject: 'Sending with SendGrid is Fun',
    text: 'and easy to do anywhere, even with Node.js',
    html: '<strong>and easy to do anywhere, even with Node.js</strong>',
  }
  sgMail
    .send(msg)
    .then(() => {
      console.log('Email sent')
    })
    .catch((error) => {
      console.error(error)
    })
  `}
          </Highlight>
        </Typography>
      </Box>
    </Box>
  </Box>
);

function getStepContent(step) {
  switch (step) {
    case 0:
      return <Overview />;
    case 1:
      return <Integrate />;
    case 2:
      return <Doc />;
    default:
      return 'Unknown step';
  }
}

export default function VerticalLinearStepper() {
  const classes = useStyles();
  const [activeStep, setActiveStep] = React.useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep} orientation="vertical">
        {steps.map((label, index) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
            <StepContent style={{ maxWidth: 900, margin: 'auto' }}>
              <Typography>{getStepContent(index)}</Typography>
              <div className={classes.actionsContainer}>
                <div>
                  <Button
                    disabled={activeStep === 0}
                    onClick={handleBack}
                    className={classes.button}
                  >
                    Back
                  </Button>
                  <Button
                    variant="contained"
                    color="primary"
                    onClick={handleNext}
                    className={classes.button}
                  >
                    {activeStep === steps.length - 1 ? 'Finish' : 'Next'}
                  </Button>
                </div>
              </div>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} className={classes.resetContainer}>
          <Typography>All steps completed - you&apos;re finished</Typography>
          <Button onClick={handleReset} className={classes.button}>
            Reset
          </Button>
        </Paper>
      )}
    </div>
  );
}
