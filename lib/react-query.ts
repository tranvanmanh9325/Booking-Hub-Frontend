import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 1000 * 60 * 5, // Data is fresh for 5 minutes
      gcTime: 1000 * 60 * 30, // Unused data is garbage collected after 30 minutes
      retry: 1, // Retry failed requests once
      refetchOnWindowFocus: false, // Do not refetch on window focus by default
    },
  },
});