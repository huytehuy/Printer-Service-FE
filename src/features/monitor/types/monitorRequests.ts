import { SearchParams } from 'mf-share/src/common/types';

export type GetVehiclesParams = SearchParams & {
  customerId: string;
  vehicleGroupIds: string[];
  status: number[];
};
