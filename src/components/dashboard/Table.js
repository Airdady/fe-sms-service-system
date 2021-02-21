import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import CheckCircleRoundedIcon from "@material-ui/icons/CheckCircleRounded";
import DoneRoundedIcon from "@material-ui/icons/DoneRounded";
import CloseRoundedIcon from "@material-ui/icons/CloseRounded";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
});


export default function DenseTable() {
  const classes = useStyles();

  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} size="small" aria-label="a dense table">
        <TableHead>
          <TableRow>
            <TableCell>Accounts</TableCell>
            <TableCell align="right">Trial</TableCell>
            <TableCell align="right">Premium</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          <TableRow>
            <TableCell component="th" scope="row">
              Ability to remove signature “Sent from telego”
            </TableCell>
            <TableCell align="right">
              <CheckCircleRoundedIcon style={{ color: "green" }} />
            </TableCell>
            <TableCell align="right">
              <DoneRoundedIcon style={{ color: "green" }} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Ability to remove signature “Sent from telego”
            </TableCell>
            <TableCell align="right">
              <CloseRoundedIcon style={{ color: "grey" }} />
            </TableCell>
            <TableCell align="right">
              <DoneRoundedIcon style={{ color: "green" }} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Ability to remove signature “Sent from telego”
            </TableCell>
            <TableCell align="right">
              <CloseRoundedIcon style={{ color: "grey" }} />
            </TableCell>
            <TableCell align="right">
              <DoneRoundedIcon style={{ color: "green" }} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Ability to remove signature “Sent from telego”
            </TableCell>
            <TableCell align="right">
              <CloseRoundedIcon style={{ color: "grey" }} />
            </TableCell>
            <TableCell align="right">
              <DoneRoundedIcon style={{ color: "green" }} />
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell component="th" scope="row">
              Ability to remove signature “Sent from telego”
            </TableCell>
            <TableCell align="right">
              <CloseRoundedIcon style={{ color: "grey" }} />
            </TableCell>
            <TableCell align="right">
              <DoneRoundedIcon style={{ color: "green" }} />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </TableContainer>
  );
}
