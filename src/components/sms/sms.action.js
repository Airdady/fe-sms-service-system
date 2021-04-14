import Types from './sms.types.js';
import Service from '../../service';

const SmsProfile = {
  async CreateSmsProfile(data) {
    try {
      const res = await Service.createSmsProfile(data);
      console.log(res.data);
      return {
        type: Types.CREATE_SMS_SUCCESS,
        createData: res.data.data,
      };
    } catch (error) {
      return {
        type: Types.CREATE_SMS_ERROR,
        error: error.response,
      };
    }
  },
  async GetSmsProfile() {
    try {
      const res = await Service.getSmsProfile();
      return {
        type: Types.GET_SMS_PROFILE_SUCCESS,
        data: res.data.data,
      };
    } catch (error) {
      return {
        type: Types.GET_SMS_PROFILE_ERROR,
        error: error.response,
      };
    }
  },
  async deleteSmsProfile(id) {
    try {
      await Service.deleteSmsProfile(id);
      return {
        type: Types.DEL_SMS_PROFILE_SUCCESS,
        id,
      };
    } catch (error) {
      return {
        type: Types.DEL_SMS_PROFILE_ERROR,
        error: error.response,
      };
    }
  },
  async updateSmsProfile(id, data) {
    try {
      await Service.updateSmsProfile(id, data);
      return {
        type: Types.UPDATE_SMS_PROFILE_SUCCESS,
        data: { id, active: data.active }
      };
    } catch (error) {
      return {
        type: Types.UPDATE_SMS_PROFILE_ERROR,
        error: error.response,
      };
    }
  },
};

export default SmsProfile;
