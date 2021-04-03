import Router from '../config';

const Api = {
  capturePayment: (data) => Router.post('/payments/capture', data),
  login: (data) => Router.post('/auth/login', data),
  createOtpProfile: (data) => Router.post('/verify', data),
  getOtpProfile: () => Router.get('/verify'),
};

export default Api;
