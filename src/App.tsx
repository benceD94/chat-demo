import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import { makeServer } from "./mirage";
import FriendsList from './components/FriendsList';

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
      <FriendsList />
    </QueryClientProvider>
  );
}

export default App;
