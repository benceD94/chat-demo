import { User } from "../types/user";

const BACKEND_HOSTS = process.env.REACT_APP_BACKEND_HOST_URL;

interface UsersResponse {
  users: User[];
};

export const getUsers = async (): Promise<UsersResponse> => {
  const res = await fetch(`${BACKEND_HOSTS}/users`);
  return res.json();
}