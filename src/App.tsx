import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import { makeServer } from "./mirage";
import FriendsList from './components/FriendsList';
import { Grid } from '@mui/material';
import ChatContextProvider from './components/ChatContextProvider';

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
        <Grid container>
          <Grid item xs={1} md={2}>
            <FriendsList />
          </Grid>
        </Grid>
      </ChatContextProvider>
    </QueryClientProvider>
  );
}

export default App;
