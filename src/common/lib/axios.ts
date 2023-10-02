// import { INDEX_PAGE, NOT_PERMITTED, TOKEN_PAYLOAD_KEY, useAuthStore } from '@/features/authentication';
import axios, { AxiosError, AxiosResponse, InternalAxiosRequestConfig } from 'axios';
import { API_BASE_URL, env } from '../../configs';

// interface OriginalConfig extends AxiosRequestConfig {
//   _retry?: boolean;
// }

export const service = (baseURL?: string) => {
  const instance = axios.create({
    baseURL: baseURL ?? API_BASE_URL,
    timeout: 60000,
  });

  instance.interceptors.request.use(onRequest, onRequestError);
  instance.interceptors.response.use(onResponse, onResponseError);

  return instance;
};

const onRequest = (config: InternalAxiosRequestConfig) => {
  // console.log('🚀 ~ onRequest', onRequest)
  // const accessToken = useAuthStore.getState().accessToken;
  // if (!accessToken) {
  //   useAuthStore.getState().removeAuthenticate();
  //   redirect(INDEX_PAGE);
  // } else (config.headers as AxiosRequestHeaders)[TOKEN_PAYLOAD_KEY] = `Bearer ${accessToken}`;

  return config;
};

const onRequestError = (error: AxiosError) => {
  console.log('request error: ' + error);
  // Promise.reject(error).catch(handleRequestError);
  throw error;
};

const onResponse = (response: AxiosResponse) => {
  return response.data;
  // if (!response.data.error) return response.data.data;
  // else {
  //   Promise.reject(response.data.error).catch(handleRequestError);
  //   return undefined;
  // }
  // console.log('🚀 @ onResponse ok but custom error', response);
  // const { error } = response.data;
  // throw error;
  // const errorMessage = `Error ${error.responseCode}: ${error.description}`;
  // console.log('🚀 ~ errorMessage', errorMessage);
  // throw new Error(errorMessage);
};

const onResponseError = async (error: AxiosError<any, any>) => {
  console.log('🚀 @ onResponse error: ', error);
  // const config = error.config as OriginalConfig;

  // Access Token was expired
  // if (error.response?.status === 401 && !config._retry) {
  //   config._retry = true;
  //   const accessToken = await getAccessTokenOnExpired();
  //   if (!accessToken) return;
  //   axios.defaults.headers.common[TOKEN_PAYLOAD_KEY] = `Bearer ${accessToken}`;
  //   return axios(config);
  // }

  // if (error.response?.status === 403) redirect(NOT_PERMITTED);
  // else Promise.reject(error).catch(handleRequestError);
  // else
  return error?.response?.data;
};
const defaultRequest = service();
export const authRequest = service(env.AUTH_API);

export default defaultRequest;
