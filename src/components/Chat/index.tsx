import React, { KeyboardEvent, useContext, useState } from "react";
import { useQuery } from 'react-query';
import { Box, Button, CircularProgress, Paper, TextField } from '@mui/material';
import classnames from 'classnames';

import Queries from "../../constants/queries";
import UserItem from "../UserItem";
import { Send } from '@mui/icons-material';

import './style.css';
import { ChatContext } from "../ChatContextProvider";
import { getMessageForUser, sendMessage } from "../../infra/message";

const Chat: React.FC = () => {
  const { recipient, sender } = useContext(ChatContext);

  const [message, setMessage] = useState<string>('');

  const { data: messages, isLoading, refetch } = useQuery(
    [Queries.Users, recipient],
    () => getMessageForUser(recipient?.id as string).then((res) => res.messages),
    {
      enabled: !!recipient,
      // TODO: replace auto refetch with websocket
      refetchInterval: 3000,
    }
  );

  if (!recipient || !sender) return <></>;

  const handleSendMessage = () => {
    sendMessage({
      senderId: sender?.id,
      recieverId: recipient.id,
      content: message
    }).then(() => {
      setMessage('');
      refetch();
    });
  };

  const handleKeyUp = (event: KeyboardEvent<HTMLElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  }

  return (
    <Paper className="Chat">
      <Box className="Chat-header">
        <UserItem user={recipient} />
      </Box>
      <Box className="Chat-body">
        {isLoading  && <CircularProgress />}
        {messages?.map((message, messageIndex) => <Box key={messageIndex} className={classnames([
          'Chat-message',
          message.from === sender?.id && 'Chat-message--out',
          message.to === sender?.id && 'Chat-message--in',
        ])}>
          {message.content}
        </Box>)}
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
