import React, { useContext } from 'react';

import { Grid } from '@mui/material';
import FriendsList from '../../components/FriendsList';
import Chat from '../../components/Chat';
import { ChatContext } from '../../components/ChatContextProvider';
import classNames from 'classnames';

import './style.css';

function ChatDemo() {
  const { recipient } = useContext(ChatContext);
  return (
    <>
      <p className="ChatDemo-AppBanner">
        For a better mobile experience please download the <a href="https://doodle.com/features/mobile">App</a>
      </p>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={4} md={2} className={classNames(recipient && 'ChatDemo-FriendList_wrapper--hidden')}>
          <FriendsList />
        </Grid>
        <Grid item xs={12} sm={8} md={4}>
          <Chat />
        </Grid>
      </Grid>
    </>
  );
}

export default ChatDemo;
