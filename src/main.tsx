import { MantineProvider } from '@mantine/core';
import { Notifications } from '@mantine/notifications';
import { theme } from './configs';
import './index.css';
import { QueryClientProvider } from '@tanstack/react-query';
import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import 'virtual:uno.css';
import { queryClient } from './lib/reactQuery';
import App from './App';
// import { worker } from './mocks/browser';
// import { isMobile } from 'react-device-detect';

// remove when not using mock service
// if (import.meta.env.DEV) {
// worker.start({
//   onUnhandledRequest: 'bypass',
//   quiet: true,
// });
// }

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <MantineProvider theme={theme} withGlobalStyles withNormalizeCSS>
        <BrowserRouter>
          <Notifications position='bottom-right' />
          <App/>
        </BrowserRouter>
      </MantineProvider>
    </QueryClientProvider>
  </React.StrictMode>
);
