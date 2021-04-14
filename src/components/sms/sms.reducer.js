import Types from './sms.types.js';

const initialState = {
  loaded: false,
  data: [],
  error: {},
};

const smsProfile = (state = initialState, action) => {
  switch (action.type) {
    case Types.CREATE_SMS_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.createData],
        loaded: true,
      };
    case Types.CREATE_SMS_ERROR:
      return { ...state, error: action.error, loaded: true };
    case Types.GET_SMS_PROFILE_SUCCESS:
      return { ...state, data: action.data, loaded: true };
    case Types.GET_SMS_PROFILE_ERROR:
      return { ...state, error: action.error, loaded: true };
    case Types.DEL_SMS_PROFILE_SUCCESS:
      const data = state.data.filter((profile) => profile._id !== action.id);
      return { ...state, data, loaded: true };
    case Types.DEL_SMS_PROFILE_ERROR:
      return { ...state, error: action.error, loaded: true };
    case Types.UPDATE_SMS_PROFILE_SUCCESS:
      const updatedData = state.data.filter((profile) => {
        if (profile._id === action.data.id) {
          profile.active = action.data.active;
        }
        return profile;
      });
      return { ...state, data: updatedData, loaded: true };
    case Types.UPDATE_SMS_PROFILE_ERROR:
      return { ...state, error: action.error, loaded: true };
    default:
      return state;
  }
};

export default smsProfile;
