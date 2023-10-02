import { QueryClient, QueryCache, MutationCache } from '@tanstack/react-query';
import { AxiosError } from 'axios';
import { toastError, toastSuccess } from '../common/utils/toast';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 0,
      // refetchOnWindowFocus: env.MODE === 'production',
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retryOnMount: false,
      keepPreviousData: false,
    },
  },
  queryCache: new QueryCache({
    onError: (error, _query) => {
      toastError(error as AxiosError);
    },
  }),
  mutationCache: new MutationCache({
    onSuccess() {
      toastSuccess();
    },
    onError: (error, _query) => {
      toastError(error as AxiosError);
    },
  }),
});
