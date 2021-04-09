import Types from './types';

const initialState = {
  user: {},
};

const userData = (state = initialState, action) => {
  switch (action.type) {
    case Types.GET_USER_DETAILS:
      const user = localStorage.getItem('user');
      return {
        ...state,
        user: user && JSON.parse(user).user,
      };
    case Types.LOGOUT:
      localStorage.removeItem('user')
      return { ...state, user: {} };
    default:
      return state;
  }
};

export default userData;
