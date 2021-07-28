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
import NotFound from '../notFound/NotFound';
import Loading from '../loading/Loading';

const useStyles = makeStyles({
  table: {
    minWidth: 650,
    marginTop: '1rem',
  },
});

export default function BasicTable() {
  const dispatch = useDispatch();
  const classes = useStyles();
  const [data, setdata] = useState([])
  const [Load, setLoad] = useState(true)

  useEffect(() => {
    work()
  }, [data])

  const work = async () => {
    const role = await service.getSmsProfile();
    setdata(role.data.data)
    setLoad(false)
  }

  // console.log(data)


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
    <>
    {Load ? <Loading /> : (!data.length ? <NotFound message={'Verify Messages Not Found'}/> :
    <TableContainer>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Profile Name</TableCell>
            <TableCell align="left">SenderId</TableCell>
            <TableCell align="left">dlr</TableCell>
            <TableCell align="left">dlrUrl</TableCell>
            <TableCell align="left">dlr level</TableCell>
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
              <TableCell align="center">{profile.dlr}</TableCell>
              <TableCell align="left">{profile.dlrUrl}</TableCell>
              <TableCell align="left">{profile.dlrLevel}</TableCell>
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
    )
    }
    </>
  );
}