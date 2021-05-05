import Types from './auth.types';
import Service from '../../service';

const Auth = {
  async Login(data, history, from) {
    try {
      const res = await Service.login(data);
      localStorage.setItem("user", JSON.stringify(res.data.data));
      return {
        type: Types.LOGIN,
        createData: res.data.data,
      };
    } catch (error) {
      return {
        type: Types.LOGIN,
        error: error.response,
      };
    }
  },
};

export default Auth;
