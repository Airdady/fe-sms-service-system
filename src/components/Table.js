import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Switch from "@material-ui/core/Switch";
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    marginTop: "1rem",
  },
});

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData(
    "Frozen yoghurt",
    <Switch
      checked={true}
      color="primary"
      name="checkedB"
      inputProps={{ "aria-label": "primary checkbox" }}
    />,
    "1 hour ago",
    <IconButton aria-label="delete">
      <DeleteIcon fontSize="small" />
    </IconButton>
  ),
  createData(
    "Ice cream sandwich",
    <Switch
      color="primary"
      name="checkedB"
      inputProps={{ "aria-label": "primary checkbox" }}
    />,
    "3 days ago",
    <IconButton aria-label="delete">
      <DeleteIcon fontSize="small" />
    </IconButton>
  ),
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Api key</TableCell>
            <TableCell align="right">created</TableCell>
            <TableCell align="right">status</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow key={row.name}>
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
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
