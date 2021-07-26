import Types from './payments.types';
import Api from '../../service';

const PaymentAction = {
    capturePayment: async (data) => {
        try {
          const res = await Api.capturePayment(data);
          return {
            type: Types.PAYMENT_SUCCESS,
            data: res.data.data,
          };
        } catch (error) {
          return {
            type: Types.PAYMENT_FAIL,
            error: error.response,
          };
        }
      },
      
    getUserCredit: async () => {
        try {
          const res = await Api.getUserCredit();
          return {
            type: Types.USER_CREDIT_SUCCESS,
            credit: res.data.data,
          };
        } catch (error) {
          return {
            type: Types.USER_CREDIT_FAIL,
            error: error.response,
          };
        }
      }
}

export default PaymentAction;
