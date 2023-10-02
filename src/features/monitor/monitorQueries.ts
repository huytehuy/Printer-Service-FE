import { QueryFunctionContext } from '@tanstack/react-query';
import monitorAPIs from './monitorApis';
import { GetVehiclesParams } from './types/monitorRequests';

export const monitorKeys = {
  base: () => ['monitor'] as const,
  list: (data: GetVehiclesParams) =>
    [...monitorKeys.base(), 'list', data] as const,
  listTree: (data: GetVehiclesParams) =>
    [...monitorKeys.base(), 'listTree', data] as const,
  listGroup: (data: GetVehiclesParams) =>
    [...monitorKeys.base(), 'listGroup', data] as const,
  listLanguage: (applicationId: string) =>
    [...monitorKeys.base(), 'language', applicationId] as const,
};

export const monitorQueries = {
  getVehiclesQueryFn: async ({
    queryKey,
  }: QueryFunctionContext<ReturnType<typeof monitorKeys.list>>) => {
    const [, , getVehiclesParams] = queryKey;
    const response = await monitorAPIs.getVehicles(getVehiclesParams);
    // console.log('🚀 ~ response:', response);

    if (response?.isSuccess) return response as any;
    console.log('🚀 ~ response:', response as any);
    throw new Error(`${response?.errorCodes[0]}`);
  },

  // getVehiclesWithTreeQueryFn: async ({
  //   queryKey,
  // }: QueryFunctionContext<ReturnType<typeof monitorKeys.listTree>>) => {
  //   const [, , getVehiclesParams] = queryKey;
  //   const response = await monitorAPIs.getVehiclesWithTree(getVehiclesParams);

  //   if (response?.isSuccess) {
  //     // console.log('🚀 ~ response:', response);

  //     const formatData = (response?.data || []).filter(
  //       (item) => item.vehicles.length !== 0
  //     );

  //     // console.log('🚀 ~ response:', response as any);
  //     return {
  //       isSuccess: response.isSuccess,
  //       data: {
  //         items: formatData,
  //         totalCount: 0,
  //       },
  //       errorCodes: response.errorCodes,
  //     } as ListResponse<VehicleGroupTree>;
  //   }

  //   throw new Error(`${response?.errorCodes[0]}`);
  // },

  getVehicleGroupQueryFn: async ({
    queryKey,
  }: QueryFunctionContext<ReturnType<typeof monitorKeys.listGroup>>) => {
    const [, , getVehiclesParams] = queryKey;
    const response = await monitorAPIs.getVehicleGroup(
      getVehiclesParams.customerId
    );
    // console.log('🚀 ~ file: monitorQueries.ts:23 ~ getVehicleGroupFn: ~ response:', response);

    if (response?.isSuccess) return response;

    // console.log('🚀 ~ file: monitorQueries.ts:28 ~ getVehicleGroupFn: ~ response:', response);

    throw new Error(`${response?.errorCodes[0]}`);
  },

  getLanguageQueryFn: async ({
    queryKey,
  }: QueryFunctionContext<ReturnType<typeof monitorKeys.listLanguage>>) => {
    const [, , applicationId] = queryKey;
    const response = await monitorAPIs.getLanguage(applicationId);

    if (response?.isSuccess) return response;

    throw new Error(`${response?.errorCodes[0]}`);
  },
};
