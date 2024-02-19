import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import { makeServer } from "./mirage";
import ChatContextProvider from './components/ChatContextProvider';
import ChatDemo from './views/ChatDemo';

makeServer({ environment: 'development' });

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
    },
  },
});

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <ChatContextProvider>
        <ChatDemo />
      </ChatContextProvider>
    </QueryClientProvider>
  );
}

export default App;
