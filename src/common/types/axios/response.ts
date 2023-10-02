export type InstanceResponse<T = any> = Promise<T | undefined>;

export interface Response<T = any> {
  isSuccess: boolean;
  data: T | null;
  errorCodes: string[];
}

export interface ListResponse<T = unknown> {
  isSuccess: boolean;
  data: {
    items: T[];
    totalCount: number;
  };
  errorCodes: string[];
}
