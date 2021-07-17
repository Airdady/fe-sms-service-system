import Types from './verify.types.js';

const initialState = {
  loaded: false,
  data: [],
  error: {},
};

const verifyProfile = (state = initialState, action) => {
  switch (action.type) {
    case Types.CREATE_VERIFY_SUCCESS:
      return {
        ...state,
        data: [...state.data, action.createData],
        loaded: true,
      };
    case Types.CREATE_VERIFY_ERROR:
      return { ...state, error: action.error, loaded: true };
    case Types.GET_VERIFY_PROFILE_SUCCESS:
      return { ...state, data: action.data, loaded: true };
    case Types.GET_VERIFY_PROFILE_ERROR:
      return { ...state, error: action.error, loaded: true };
    case Types.DEL_VERIFY_PROFILE_SUCCESS:
      const data = state.data.filter((profile) => profile._id !== action.id);
      return { ...state, data, loaded: true };
    case Types.DEL_VERIFY_PROFILE_ERROR:
      return { ...state, error: action.error, loaded: true };
    case Types.UPDATE_VERIFY_PROFILE_SUCCESS:
      const updatedData = state.data.filter((profile) => {
        if (profile._id === action.data.id) {
          profile.active = action.data.active;
        }
        return profile;
      });
      console.log(updatedData);
      return { ...state, data: updatedData, loaded: true };
    case Types.UPDATE_VERIFY_PROFILE_ERROR:
      return { ...state, error: action.error, loaded: true };
    default:
      return state;
  }
};

export default verifyProfile;