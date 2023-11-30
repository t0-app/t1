import * as React from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ThemeWrapper } from 'src/config/theme';
import { SessionProvider } from './auth';

const queryClient = new QueryClient();

interface AppProvidersProps {
  children: React.ReactNode;
}
const AppProviders = ({ children }: AppProvidersProps) => {
  return (
    <SessionProvider>
      <ThemeWrapper>
        <QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
      </ThemeWrapper>
    </SessionProvider>
  );
};

export { AppProviders };
