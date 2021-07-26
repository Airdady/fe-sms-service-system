import Types from './payments.types';

const initialState = {
  loaded: false,
  data: {},
  error: {},
};

const capturePayment = (state = initialState, action) => {
  switch (action.type) {
    case Types.PAYMENT_SUCCESS:
      return {
        ...state,
        data: action.data.data,
        loaded: true,
      };
    case Types.PAYMENT_FAIL:
      return { ...state, error: action.error, loaded: true };
    case Types.USER_CREDIT_SUCCESS:
      return {
        ...state,
        credit: action.credit.balance,
        loaded: true,
      };
    case Types.USER_CREDIT_FAIL:
      return { ...state, error: action.error, loaded: true };
    default:
      return state;
  }
};

export default capturePayment;