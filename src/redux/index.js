import { combineReducers } from 'redux';

import VerifyProfile from '../components/verify/verify.reducer';
import SmsProfile from '../components/sms/sms.reducer';
import UserData from './global.reducer';

const allReducers = combineReducers({
  VerifyProfile,
  SmsProfile,
  UserData,
});

export default allReducers;
