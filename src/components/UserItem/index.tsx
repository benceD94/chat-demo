import React, { useMemo } from "react";
import { Box, Button } from '@mui/material';
import MessageIcon from '@mui/icons-material/Message';

import { User } from "../../types/user";

import './style.css';

export interface Props {
  user: User;
  onMessageUser?: (user: User) => void;
}

const UserItem: React.FC<Props> = ({ user, onMessageUser }) => {

  const handleMessageUser = () => {
    if (onMessageUser) onMessageUser(user);
  };

  // Return user image if possible, otherwise user initials
  const userIcon = useMemo(() => {
    if (user.image) return <img
      src={user.image}
      data-testid="user-image"
      alt={user.name}
    />

    const nameParts = user.name.split(' ');
    return nameParts.map((value) => value[0].toUpperCase()).join('')
  }, [user])

  return (
    <Box className="UserItem">
      <Box className="UserItem-image">{userIcon}</Box>
      {user.name}
      {onMessageUser && <Box className="UserItem-action">
        <Button
          variant="text"
          size="small"
          data-testid="message-user-button"
          onClick={handleMessageUser}
        >
          <MessageIcon />
        </Button>
      </Box>}
    </Box>
  );
};

export default UserItem;
