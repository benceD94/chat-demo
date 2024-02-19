import React, { KeyboardEvent, useContext, useEffect, useState } from "react";
import { Box, Button, CircularProgress, Paper, TextField } from '@mui/material';
import classnames from 'classnames';

import UserItem from "../UserItem";
import { Send, Close } from '@mui/icons-material';

import './style.css';
import { ChatContext } from "../ChatContextProvider";
import { sendMessage } from "../../infra/message";

const Chat: React.FC = () => {
  const {
    recipient,
    sender,
    messages,
    isLoadingMessages,
    setRecipient,
  } = useContext(ChatContext);

  const [message, setMessage] = useState<string>('');

  if (!recipient || !sender) return <></>;

  const handleSendMessage = () => {
    sendMessage({
      senderId: sender?.id,
      receiverId: recipient.id,
      content: message
    }).then(() => {
      setMessage('');
    });
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleCloseChat = () => {
    setRecipient(null);
  };

  return (
    <Paper className="Chat">
      <Box className="Chat-header">
        <UserItem user={recipient} />
        <Button
          variant="text"
          size="small"
          data-testid="close-chat"
          onClick={handleCloseChat}
        >
          <Close />
        </Button>
      </Box>
      <Box className="Chat-body">
        {messages?.map((message, messageIndex) => <Box key={messageIndex} className={classnames([
          'Chat-message',
          message.from === sender?.id && 'Chat-message--out',
          message.to === sender?.id && 'Chat-message--in',
        ])}>
          {message.content}
        </Box>)}
        {isLoadingMessages  && <CircularProgress />}
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
          onKeyUp={handleKeyUp}
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
