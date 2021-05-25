import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Typography } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});

function createData(calories, fat, carbs, protein) {
  return { calories, fat, carbs, protein };
}

const rows = [
  createData('Local Numbers', '$ 0.005', '$ 0.0000'),
  createData('Toll Free Numbers', '$ 0.005', '$ 0.0000'),
  createData('Short Code', '$ 0.005', '$ 0.0000'),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer elevation={0} component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell align="left">
              <Typography variant="h6">SMS Api </Typography>
            </TableCell>
            <TableCell align="right">Source Number Type</TableCell>
            <TableCell align="right">To send SMS</TableCell>
            <TableCell align="right">To receive SMS</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell align="right"></TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
