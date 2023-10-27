import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();

interface AppProvidersProps {
  children: React.ReactNode;
}
const AppProviders = ({ children }: AppProvidersProps) => {
  return <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>;
};

export { AppProviders };
