import React, { useEffect } from "react";
import { useQuery } from 'react-query';
import Queries from "../../constants/queries";
import { getUsers } from "../../infra/users";

const FriendsList: React.FC = () => {
  const { data: users, isLoading } = useQuery(
    [Queries.Users],
    () => getUsers()
  );

  return (
    <p>FriendsList</p>
  );
};

export default FriendsList;
