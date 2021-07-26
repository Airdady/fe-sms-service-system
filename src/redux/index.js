import { combineReducers } from 'redux';

import VerifyProfile from '../components/verify/verify.reducer';
import SmsProfile from '../components/sms/sms.reducer';
import UserData from './global.reducer';
import Payment from '../components/payments/payment.reducer';

const allReducers = combineReducers({
  VerifyProfile,
  SmsProfile,
  UserData,
  Payment
});

export default allReducers;
