import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import { makeServer } from "./mirage";
import FriendsList from './components/FriendsList';
import { Grid } from '@mui/material';
import ChatContextProvider from './components/ChatContextProvider';
import Chat from './components/Chat';

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
        <Grid container spacing={2}>
          <Grid item xs={1} md={2}>
            <FriendsList />
          </Grid>
          <Grid item xs={11} md={4}>
            <Chat />
          </Grid>
        </Grid>
      </ChatContextProvider>
    </QueryClientProvider>
  );
}

export default App;
