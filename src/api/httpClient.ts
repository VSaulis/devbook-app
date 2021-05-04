import { API_URL } from 'react-native-dotenv';
import axios from 'axios';
import { store } from 'store';

const httpClient = axios.create({
  baseURL: API_URL
});

httpClient.interceptors.request.use(
  async (request) => {
    const { token } = store.getState().auth;
    if (token) {
      request.headers.Authorization = `Bearer ${token}`;
    }
    return request;
  },
  (error) => Promise.reject(error)
);

httpClient.interceptors.response.use(async (response) => response.data);

export default httpClient;
