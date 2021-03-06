import React from 'react';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import Grid from '@material-ui/core/Grid';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Paper } from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import FolderIcon from '@material-ui/icons/Folder';
import RadioButtonCheckedIcon from '@material-ui/icons/RadioButtonChecked';
import { Link } from 'react-router-dom';
import ChevronRightRoundedIcon from '@material-ui/icons/ChevronRightRounded';
import CodeSection from '../codeViewer';

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

const DocumentationSection = () => {
  const classes = useStyles();
  const [dense] = React.useState(false);
  const [secondary] = React.useState(false);
  return (
    <Box
      bgcolor="primary.main"
      px={6}
      py={12}
      style={{ transform: 'skewY(-3deg)' }}
    >
      <Container style={{ transform: 'skewY(3deg)' }} maxWidth="xl">
        <Grid container spacing={3}>
          <Grid item md={7} sm={12}>
            <Box width="100%">
              <CodeSection />
            </Box>
          </Grid>
          <Grid item md={5}>
            <Typography variant="h5">Integrate in minutes</Typography>
            <Typography variant="h6">
              A few lines of code that scale, from startups to the Fortune 500
            </Typography>
            <Grid item md={12}>
              <Typography variant="h6" className={classes.title}>
                Icon with text
              </Typography>
              <Box width={'100%'}>
                <List dense={dense}>
                  {[
                    'Extensive API documentation',
                    'Libraries available in popular languages',
                    'Intuitive, easy-to-use tutorials',
                  ].map((e) => (
                    <ListItem style={{ padding: 0 }}>
                      <ListItemIcon style={{ minWidth: '30px' }}>
                        <RadioButtonCheckedIcon style={{ width: 20 }} />
                      </ListItemIcon>
                      <ListItemText
                        primary={e}
                        secondary={secondary ? 'Secondary text' : null}
                      />
                    </ListItem>
                  ))}
                </List>
              </Box>
              <Link style={{ textDecoration: 'none' }} to="product/verify">
                <Button endIcon={<ChevronRightRoundedIcon />}>
                  View Details
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default DocumentationSection;
