import { HelmetProvider } from 'react-helmet-async';
import { AuthProvider } from '~/client/components/contexts/UserContext';
import Main from '~/client/components/root/Main';

export const App = () => {
  return (
    <HelmetProvider>
      <AuthProvider>
        <Main />
      </AuthProvider>
    </HelmetProvider>
  );
};
