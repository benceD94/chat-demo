import React from 'react';
import {QueryClient, QueryClientProvider} from 'react-query';

import { makeServer } from "./mirage";
import FriendsList from './components/FriendsList';
import { Grid } from '@mui/material';

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
      <Grid container>
        <Grid item xs={1} md={2}>
          <FriendsList />
        </Grid>
      </Grid>
    </QueryClientProvider>
  );
}

export default App;
