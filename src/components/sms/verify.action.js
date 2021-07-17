import Types from './verify.types.js';
import Service from '../../service';

const VerifyProfile = {
  async CreateOtpProfile(data) {
    try {
      const res = await Service.createSmsProfile(data);
      console.log(res.data);
      return {
        type: Types.CREATE_VERIFY_SUCCESS,
        createData: res.data.data,
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
  async deleteOtpProfile(id) {
    try {
      await Service.deleteSmsProfile(id);
      return {
        type: Types.DEL_VERIFY_PROFILE_SUCCESS,
        id,
      };
    } catch (error) {
      return {
        type: Types.DEL_VERIFY_PROFILE_ERROR,
        error: error.response,
      };
    }
  },
  async updateOtpProfile(id, data) {
    try {
      await Service.updateSmsProfile(id, data);
      return {
        type: Types.UPDATE_VERIFY_PROFILE_SUCCESS,
        data: { id, active: data.active }
      };
    } catch (error) {
      return {
        type: Types.UPDATE_VERIFY_PROFILE_ERROR,
        error: error.response,
      };
    }
  },
};

export default VerifyProfile;