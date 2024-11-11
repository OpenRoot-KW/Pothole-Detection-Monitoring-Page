import axios from 'axios';
import { localStorageKeys } from '../data/localStorageKeys';
import { toast } from 'react-toastify';

export const initAxios = () => {
  axios.defaults.baseURL = process.env['REACT_APP_API_URL'];
  axios.defaults.withCredentials = true;

  axios.interceptors.request.use((config) => {
    const accessToken = localStorage.getItem(localStorageKeys.accessToken);

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }

    return config;
  });

  axios.interceptors.response.use(undefined, (error) => {
    if (axios.isAxiosError(error)) {
      const errorMessage =
        error.response?.data?.message || '알 수 없는 오류가 발생했어요';

      toast(errorMessage, {
        type: 'error',
      });
      // alert(errorMessage);
    }
    throw error;
  });
};
