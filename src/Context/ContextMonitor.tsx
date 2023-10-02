// import { useQuery } from '@tanstack/react-query';
import {
  ReactNode,
  createContext,
  useContext,
} from 'react';
// import { monitorKeys, monitorQueries } from '~/features/monitor';
import { ControlMonitorProps } from './Types/contextMonitor';

export const ControlMonitor = createContext<ControlMonitorProps>({
  data: undefined,
  isError: false,
  isLoading: false,
});

const ContextMonitor = ({ children }: { children: ReactNode }) => {
  const data = null;
  const isError = true;
  const isLoading = true;

  // const queryOptions = {
  //   queryKey: monitorKeys.listTree({
  //     // ...defaultGetVehiclesParams,
  //   }),
  //   // queryFn: monitorQueries.getVehiclesWithTreeQueryFn,
  // };

  // const {
  //   data,
  //   isError,
  //   isLoading,
  // } = useQuery({
  //   keepPreviousData: true,
  //   ...queryOptions,
  // });
  return (
    <ControlMonitor.Provider
      value={{
        data,
        isError,
        isLoading,
      }}
    >
      {children}
    </ControlMonitor.Provider>
  );
};

export function useMonitorContext() {
  const context = useContext(ControlMonitor);
  if (!context) {
    throw new Error(
      'useMonitorContext must be used under ControlMonitorProvider'
    );
  }
  return context;
}

export default ContextMonitor;
