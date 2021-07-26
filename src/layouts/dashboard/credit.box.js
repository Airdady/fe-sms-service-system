import React, { useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Typography } from '@material-ui/core';
import Action from '../../components/payments/payment.action';
import { useSelector, useDispatch } from 'react-redux';

const CreditBox = () => {
  // const [balance, setBalance] = useState(0);
  const dispatch = useDispatch()

  useMemo(async() => {
    dispatch(await Action.getUserCredit());
  },[dispatch])

  const balance = useSelector(({ Payment }) => Payment.credit);
 
  console.log('====================================');
  console.log(balance);
  console.log('====================================');
  return (
    <Box
      width="100%"
      px={3}
      py={1}
      display="flex"
      bgcolor="primary"
      alignItems="center"
    >
      <Box mr="auto">
        <Typography color="primary" variant="h6">${balance}</Typography>
        <Typography variant="caption">Credit Balance</Typography>
      </Box>
      <Link to="/payments">
        <Button variant="contained" color="primary" size="small">
          Top up
        </Button>
      </Link>
    </Box>
  );
};

export default CreditBox;
