import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Accordion from '@material-ui/core/Accordion';
import AccordionDetails from '@material-ui/core/AccordionDetails';
import AccordionSummary from '@material-ui/core/AccordionSummary';
import Typography from '@material-ui/core/Typography';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import { useSelector } from 'react-redux';
import Form from './form';
import { Box, Grid, IconButton, Paper } from '@material-ui/core';
import AddRoundedIcon from '@material-ui/icons/AddRounded';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    flexBasis: '33.33%',
    flexShrink: 0,
  },
  secondaryHeading: {
    fontSize: theme.typography.pxToRem(15),
    color: theme.palette.text.secondary,
  },
}));

export default function ControlledAccordions() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState('panel1');

  const handleChange = (panel) => (event, isExpanded) => {
    setExpanded(isExpanded ? panel : false);
  };

  const data = useSelector(({ VerifyProfile }) => VerifyProfile.data);
  return (
    <Grid item md={4}>
      <Box mb={2}>
        <Paper>
          <Box p={2}>
            <Typography>Add Profile</Typography>
            <Box>
              <Form data={{}} />
            </Box>
          </Box>
        </Paper>
      </Box>
      <Paper className={classes.paper}>
        <Box>
          <div className={classes.root}>
            {!!data?.length &&
              data.map((profile, i) => (
                <Accordion
                  key={i}
                  elevation={0}
                  expanded={expanded === `panel${profile._id}`}
                  onChange={handleChange(`panel${profile._id}`)}
                >
                  <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls={`panel${profile._id}bh-content`}
                    id={`panel${profile._id}bh-header`}
                  >
                    <Typography className={classes.heading}>
                      {profile.profileName}
                    </Typography>
                    <Typography className={classes.secondaryHeading}>
                      {profile.senderName}
                    </Typography>
                  </AccordionSummary>
                  <AccordionDetails>
                    <Box>
                      <Form data={profile} />
                    </Box>
                  </AccordionDetails>
                </Accordion>
              ))}
          </div>
        </Box>
      </Paper>
    </Grid>
  );
}
