import Router from '../config';

const Api = {
  capturePayment: (data) => Router.post('/payments/capture', data),
  login: (data) => Router.post('/auth/login', data),
  createOtpProfile: (data) => Router.post('/verify_profile/', data),
  getOtpProfile: () => Router.get('/verify_profile/'),
  getLogs: () => Router.get('/api_logs/'),
  getStats: () => Router.get('/stats/'),
  deleteOtpProfile: (id) => Router.delete(`/verify_profile/${id}`),
  updateOtpProfile: (id, data) => Router.patch(`/verify_profile/${id}`, data),
  createSmsProfile: (data) => Router.post('/sms_profile', data),
  getSmsProfile: () => Router.get('/sms_profile'),
  deleteSmsProfile: (id) => Router.delete(`/sms_profile/${id}`),
  updateSmsProfile: (id, data) => Router.patch(`/sms_profile/${id}`, data),
};

export default Api;
