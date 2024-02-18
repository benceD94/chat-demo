import React, { useContext } from "react";
import { useQuery } from 'react-query';
import { CircularProgress, Box, Paper } from '@mui/material';

import Queries from "../../constants/queries";
import { getUsers } from "../../infra/users";
import UserItem from "../UserItem";

import './style.css';
import { User } from "../../types/user";
import { ChatContext } from "../ChatContextProvider";

const FriendsList: React.FC = () => {
  const { setRecipient } = useContext(ChatContext);

  const { data: users, isLoading } = useQuery(
    [Queries.Users],
    () => getUsers().then((res) => res.users)
  );

  if (isLoading || !users) return <CircularProgress />;

  const handleMessageUser = (user: User) => {
    setRecipient(user);
  };

  return (
    <Paper className="FriendsList">
      {users?.map((user) => 
        <Box key={user.id} className="FriendsList-item">
          <UserItem user={user} onMessageUser={handleMessageUser} />
        </Box>
      )}
    </Paper>
  );
};

export default FriendsList;
