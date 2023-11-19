import axios from 'axios';
import proxy from '../configs/host';

// const env = location.hostname === 'localhost' ? 'mock' : 'release';
const env = 'development';
const API_HOST = proxy[env].API;

const CODE = {
  LOGIN_TIMEOUT: 1000,
  REQUEST_SUCCESS: 0,
  REQUEST_FORBID: 1001,
};

export const instance = axios.create({
  baseURL: API_HOST,
  timeout: 5000,
  withCredentials: true,
});

instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      const { data } = response;
      if (data.code === CODE.REQUEST_SUCCESS) {
        return data;
      }
      return Promise.reject(data);
    }
    return Promise.reject(response?.data);
  },
  (e) => Promise.reject(e),
);

export default instance;
