const BACKEND_HOSTS = process.env.REACT_APP_BACKEND_HOST_URL;

export const getUsers = async () => {
  const res = await fetch(`${BACKEND_HOSTS}/users`);
  return res.json();
}