import React, {useState, useEffect} from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Switch from '@material-ui/core/Switch';
import DeleteIcon from '@material-ui/icons/Delete';
import IconButton from '@material-ui/core/IconButton';
import TimeAgo from 'timeago-react';
import { useDispatch } from 'react-redux';
import Actions from './verify.action';
import service from '../../service'

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    marginTop: '1rem',
  },
});

export default function BasicTable() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [data, setData] = useState([])

  useEffect(() => {
   profile()
  }, [data])

const profile = async () => {
  const results = await service.getOtpProfile()
  setData(results.data.data)
}

  const handleClick = (id) => async (e) => {
    e.preventDefault();
    console.log(id);
    dispatch(await Actions.deleteOtpProfile(id));
  };

  const handleChange = (id, active) => async (e) => {
    e.preventDefault();
    console.log(id);
    dispatch(await Actions.updateOtpProfile(id, { active }));
  };

  return (
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Profile Name</TableCell>
            <TableCell align="left">Sender Name</TableCell>
            <TableCell align="left">Code Length</TableCell>
            <TableCell align="left">Expiry (sec)</TableCell>
            <TableCell align="left">Time</TableCell>
            <TableCell align="left">Status</TableCell>
            <TableCell align="right">Action</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((profile) => (
            <TableRow key={profile._id}>
              <TableCell component="th" scope="row">
                {profile.profileName}
              </TableCell>
              <TableCell align="left">{profile.senderId}</TableCell>
              <TableCell align="center">{profile.otplen}</TableCell>
              <TableCell align="left">{profile.expiry}</TableCell>
              <TableCell align="left">
                <TimeAgo datetime={profile.createdAt} locale="en" />
              </TableCell>
              <TableCell align="right">
                <Switch
                  color="primary"
                  name="active"
                  checked={profile.active}
                  onChange={handleChange(profile._id, !profile.active)}
                  inputProps={{ 'aria-label': 'primary checkbox' }}
                />
              </TableCell>
              <TableCell align="right">
                <IconButton
                  onClick={handleClick(profile._id)}
                  aria-label="delete"
                >
                  <DeleteIcon fontSize="small" />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}