import React, { useEffect, useState } from 'react';
import { User } from '../../types/user';
import { Message } from '../../types/message';
import { useQuery } from 'react-query';
import Queries from '../../constants/queries';
import { getMessageForUser } from '../../infra/message';

export interface Context {
  isLoaded?: boolean;
  isLoadingMessages: boolean;
  recipient: User | null;
  sender: User | null;
  messages: Message[];
  setRecipient: (user: User | null) => void;
}

const defaultCallback = () => {
  throw new Error('ChatContextProvider not initialized.');
};

export const ChatContext = React.createContext<Context>({
  isLoaded: false,
  isLoadingMessages: false,
  recipient: null,
  sender: null,
  messages: [],
  setRecipient: defaultCallback,
});
ChatContext.displayName = 'ChatContextProvider';

/**
 * TODO: For future improvement store messages in an object where the key is the recipientID
 * This way the frontend can cache old messages and doesn't need to reload them.
 * eg.:
 * internalMessages: {
 *    [userId: string]: Message[],
 * }
 */
const ChatContextProvider: React.FC<{children: React.ReactNode;}> = ({ children }) => {
  const [internalRecipient, setInternalRecipient] = useState<User | null>(null);
  const [internalSender] = useState<User | null>({
    name: 'Demo User',
    id: '123',
  });
  const [internalMessages, setInternalMessages] = useState<Message[]>([]);


  const { isFetching } = useQuery(
    [Queries.Messages, internalRecipient],
    () => getMessageForUser(internalRecipient?.id as string).then((res) => {
      setInternalMessages(res.messages);
    }),
    {
      enabled: !!internalRecipient,
      // TODO: replace auto refetch with websocket
      refetchInterval: 2000,
    }
  );

  //  When recipient changes remove old messages
  useEffect(() => {
    setInternalMessages([]);
  }, [internalRecipient]);

  const value = {
    isLoaded: true,
    isLoadingMessages: isFetching,
    recipient: internalRecipient,
    sender: internalSender,
    messages: internalMessages,
    setRecipient: setInternalRecipient,
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
