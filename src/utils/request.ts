import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';
import proxy from '../configs/host';

// const env = location.hostname === 'localhost' ? 'mock' : 'release';
const env = 'mock';
const API_HOST = env === 'mock' ? '/' : proxy.test.API;

const CODE = {
  LOGIN_TIMEOUT: 1000,
  REQUEST_SUCCESS: 0,
  REQUEST_FORBID: 1001,
};

// 定义接口IAxiosInstance，扩展了AxiosInstance
interface IAxiosInstance extends AxiosInstance {
  request<T = any>(config: AxiosRequestConfig): Promise<T>;
  get<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  delete<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  head<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  options<T = any>(url: string, config?: AxiosRequestConfig): Promise<T>;
  post<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  put<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  patch<T = any>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
}

export const instance: IAxiosInstance = axios.create({
  baseURL: API_HOST,
  timeout: 5000,
  withCredentials: true,
});

instance.interceptors.request.use((config) => config);

instance.interceptors.response.use(
  (response) => {
    if (response.status === 200) {
      const { data } = response;
      if (data.code === CODE.REQUEST_SUCCESS) {
        return data;
      }
      return response;
    }
    return undefined;
  },
  (err) => {
    const { config } = err;

    if (!config || !config.retry) return Promise.reject(err);

    config.retryCount = config.retryCount || 0;

    if (config.retryCount >= config.retry) {
      return Promise.reject(err);
    }

    config.retryCount += 1;

    const backoff = new Promise((resolve) => {
      setTimeout(() => {
        resolve({});
      }, config.retryDelay || 1);
    });

    return backoff.then(() => instance(config));
  },
);

export default instance;
