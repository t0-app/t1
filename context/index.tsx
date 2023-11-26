import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeWrapper } from 'config/theme';

const queryClient = new QueryClient();

interface AppProvidersProps {
  children: React.ReactNode;
}
const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <ThemeWrapper>
      <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
    </ThemeWrapper>
  );
};

export { AppProviders };
