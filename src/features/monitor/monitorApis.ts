import { service } from '../../common/lib/axios';
import {
  InstanceResponse,
  ListResponse,
  Response,
} from '../../common/types';
import { env } from '~/configs/environmentConfig';
import {
  LanguageResponse,
  Vehicle,
  VehicleGroup,
  VehicleGroupTree,
} from './types';
import { GetVehiclesParams } from './types/monitorRequests';
const request = service(env.APP_API);

const monitorAPIs = {
  getVehicles(
    data: GetVehiclesParams
  ): InstanceResponse<ListResponse<Vehicle>> {
    return request({
      url: '/monitor/vehiclelist',
      method: 'post',
      data,
    });
  },

  // getVehiclesWithTree(
  //   data: GetVehiclesParams
  // ): InstanceResponse<Response<VehicleGroupTree[]>> {
  //   return request({
  //     url: '/monitor/vehiclestatusinlist??api-version=1.0',
  //     method: 'post',
  //     data: {
  //       ...data,
  //       keyword: '',
  //       customerId: 'a1052c77-6216-4b48-bce9-a6c2362f9591',
  //     },
  //   });
  // },

  getVehicleGroup(id: string): InstanceResponse<Response<VehicleGroup[]>> {
    return request({
      url: `/monitor/getallvehiclegroupbycustomer/${id}`,
      method: 'get',
    });
  },

  getLanguage(
    applicationId: string
  ): InstanceResponse<Response<LanguageResponse[]>> {
    return request({
      url: `/language/getclientjson`,
      method: 'post',
      data: { applicationId },
    });
  },
};

export default monitorAPIs;
