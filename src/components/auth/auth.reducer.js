import Types from './auth.types';

const initialState = {
  user: {},
};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case Types.LOGIN:
      localStorage.setItem("user", JSON.stringify(action.data));
      return {
        ...state,
        user: action.data.user,
      };
    case Types.LOGOUT:
      localStorage.removeItem('user')
      return { ...state, user: {} };
    default:
      return state;
  }
};

export default userData;