import 'axios';
type ServerResponse<T> = Promise<T | undefined>;

declare module 'axios' {
  export interface AxiosInstance extends Axios {
    (config: AxiosRequestConfig): ServerResponse<T>;
    (url: string, config?: AxiosRequestConfig): ServerResponse<T>;
  }
}
