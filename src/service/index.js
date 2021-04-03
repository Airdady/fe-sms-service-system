import Router from '../config';

const Api = {
  capturePayment: (data) => Router.post('/payments/capture', data),
  login: (data) => Router.post('/auth/login', data)
};

export default Api;