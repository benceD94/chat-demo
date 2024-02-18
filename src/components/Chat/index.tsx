import React, { useContext, useState } from "react";
import {  Box, Button, Paper, TextField } from '@mui/material';

import UserItem from "../UserItem";
import { Send } from '@mui/icons-material';

import './style.css';
import { ChatContext } from "../ChatContextProvider";

const Chat: React.FC = () => {
  const { recipient } = useContext(ChatContext);

  const [message, setMessage] = useState<string>('');

  if (!recipient) return <></>;

  const handleSendMessage = () => {
    setMessage('');
  };

  return (
    <Paper className="Chat">
      <Box className="Chat-header">
        <UserItem user={recipient} />
      </Box>
      <Box className="Chat-body">
        message
      </Box>
      <Box className="Chat-footer">
        <TextField
          fullWidth
          id="message-input"
          label="Message"
          size="small"
          variant="outlined"
          value={message}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setMessage(event.target.value);
          }}
        />
        <Button
          variant="text"
          size="small"
          data-testid="message-user-button"
          onClick={handleSendMessage}
        >
          <Send />
        </Button>
      </Box>
    </Paper>
  );
};

export default Chat;
