import { Message } from "../types/message";

const BACKEND_HOSTS = process.env.REACT_APP_BACKEND_HOST_URL;

interface MessageResponse {
  messages: Message[];
};

interface SendMessageRequest {
  senderId: string;
  recieverId: string;
  content: string;
}

export const getMessageForUser = async (userId: string): Promise<MessageResponse> => {
  const res = await fetch(`${BACKEND_HOSTS}/messages/${userId}`);
  return res.json();
}

export const sendMessage = async ({
  senderId,
  recieverId,
  content,
}: SendMessageRequest) => {
  return await fetch(`${BACKEND_HOSTS}/messages/${senderId}/${recieverId}`, {
    method: "POST",
    body: JSON.stringify({content})
  });
}