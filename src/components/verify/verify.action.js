import Types from './verify.types.js';
import Service from '../../service';

const VerifyProfile = {
  async CreateOtpProfile(data) {
    try {
      const res = await Service.createOtpProfile(data);
      console.log(res.data);
      return {
        type: Types.CREATE_VERIFY_SUCCESS,
        createData: res.data,
      };
    } catch (error) {
      return {
        type: Types.CREATE_VERIFY_ERROR,
        error: error.response,
      };
    }
  },
  async GetOtpProfile() {
    try {
      const res = await Service.getOtpProfile();
      return {
        type: Types.GET_VERIFY_PROFILE_SUCCESS,
        data: res.data.data,
      };
    } catch (error) {
      return {
        type: Types.GET_VERIFY_PROFILE_ERROR,
        error: error.response,
      };
    }
  },
};

export default VerifyProfile;
