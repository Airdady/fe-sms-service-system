import Router from '../config';

const Api = {
  capturePayment: (data) => Router.post('/payments/capture', data),
  login: (data) => Router.post('/auth/login', data),
  createOtpProfile: (data) => Router.post('/verify', data),
  getOtpProfile: () => Router.get('/verify'),
  deleteOtpProfile: (id) => Router.delete(`/verify/${id}`),
  updateOtpProfile: (id, data) => Router.patch(`/verify/${id}`, data),
  createSmsProfile: (data) => Router.post('/sms', data),
  getSmsProfile: () => Router.get('/sms'),
  deleteSmsProfile: (id) => Router.delete(`/sms/${id}`),
  updateSmsProfile: (id, data) => Router.patch(`/sms/${id}`, data),
};

export default Api;
