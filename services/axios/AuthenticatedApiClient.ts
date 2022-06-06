import { backend } from '../../config';
import axios from 'axios';


const AuthenticatedApiClient = () => {
  const defaultOptions = {
    baseURL: `${process.env.API_URL}/api`,
    headers: { 
      'Content-Type': 'application/json',
    },
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(async (request) => {
    let token: any = {};
    /*
    if (data && data.token) {
      token = data.token;
    }
    */
    if (token && request.headers) {
      request.headers.Authorization = `Bearer ${token.token}`;
    }
    return request;
  });

  instance.interceptors.response.use(
    (response) => {
      return response;
    },
    (error) => {
      const {response: {status}} = error;
      if(Number(status) === 401) {
        signOut();
      }
      return Promise.reject(error);
    },
  );

  return instance;
};

export default AuthenticatedApiClient;