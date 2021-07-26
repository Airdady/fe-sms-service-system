import React from 'react';
import CssBaseline from '@material-ui/core/CssBaseline';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import CheckCircleRoundedIcon from '@material-ui/icons/CheckCircleRounded';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableRow from '@material-ui/core/TableRow';
import Button from '@material-ui/core/Button';
import { Link } from 'react-router-dom';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {'Copyright © '}
      <Link color="inherit" href="/">
        Airdady
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

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
    marginTop: theme.spacing(1),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

export default function SuccessPage() {
  const classes = useStyles();

  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <div className={classes.paper}>
      <CheckCircleRoundedIcon style={{ fontSize: 100, color: '#02b302' }} />
        <Typography variant="h4" gutterBottom>
          Payment successful
        </Typography>
        <TableContainer>
      <Table aria-label="simple table">
        <TableBody>
            <TableRow>
              <TableCell component="th" scope="row">
                Payment Type
              </TableCell>
              <TableCell align="right">Paypal</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Amount
              </TableCell>
              <TableCell align="right">$300</TableCell>
            </TableRow>
            <TableRow>
              <TableCell component="th" scope="row">
                Transaction ID
              </TableCell>
              <TableCell align="right">IUWEUIEWUIWUEIUEWI</TableCell>
            </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
    <Box mt={5}>
    <Link to="/dashboard">
    <Button variant="contained" color="primary">
  Close
</Button>
</Link>
</Box>
      </div>
      <Box mt={8}>
        <Copyright />
      </Box>
    </Container>
  );
}