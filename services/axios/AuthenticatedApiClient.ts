import { backend } from '../../config';
import axios from 'axios';
import { getSession, signOut } from 'next-auth/react';


const AuthenticatedApiClient = () => {
  const defaultOptions = {
    baseURL: `${backend}/api`,
    headers: { 
      'Content-Type': 'application/json',
    },
  };

  const instance = axios.create(defaultOptions);

  instance.interceptors.request.use(async (request) => {
    const data = await getSession();
    let token: any = {};
    if (data && data.token) {
      token = data.token;
    }
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
      console.log(error);
      
      const {response: {status}} = error;
      if(Number(status) === 401) {
        signOut();
      }
    },
  );

  return instance;
};

export default AuthenticatedApiClient;