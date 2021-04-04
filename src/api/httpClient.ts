import axios from 'axios';

const httpClient = axios.create({
  baseURL: 'http://192.168.1.143:5000/api',
});

httpClient.interceptors.request.use(
  async (request) => {
    console.log(request);
    return request;
  },
  (error) => Promise.reject(error)
);

httpClient.interceptors.response.use(
  async (response) => {
    console.log(response);
    return response.data;
  },
  (error) => {
    const { response } = error;
    console.log(response);
    return Promise.reject(error);
  }
);

export default httpClient;
