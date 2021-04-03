import Types from './verify.types.js';

const initialState = {
  loaded: false,
  data: [],
  error: {},
};

const verifyProfile = (state = initialState, action) => {
  switch (action.type) {
    case Types.CREATE_VERIFY_SUCCESS:
      return { ...state, createData: action.createData, loaded: true };
    case Types.CREATE_VERIFY_ERROR:
      return { ...state, error: action.error, loaded: true };
    case Types.GET_VERIFY_PROFILE_SUCCESS:
      return { ...state, data: action.data, loaded: true };
    case Types.GET_VERIFY_PROFILE_ERROR:
      return { ...state, error: action.error, loaded: true };
    default:
      return state;
  }
};

export default verifyProfile;
