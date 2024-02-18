import React, { useState } from 'react';
import { User } from '../../types/user';

export interface Context {
  isLoaded?: boolean;
  recipient: User | null;
  sender: User | null;
  setRecipient: (user: User) => void;
}

const defaultCallback = () => {
  throw new Error('ChatContextProvider not initialized.');
};

export const ChatContext = React.createContext<Context>({
  isLoaded: false,
  recipient: null,
  sender: null,
  setRecipient: defaultCallback,
});
ChatContext.displayName = 'ChatContextProvider';

const ChatContextProvider: React.FC<{children: React.ReactNode;}> = ({ children }) => {
  const [internalRecipient, setInternalRecipient] = useState<User | null>(null);
  const [internalSender] = useState<User | null>({
    name: 'Demo User',
    id: '123',
  });

  const value = {
    isLoaded: true,
    recipient: internalRecipient,
    sender: internalSender,
    setRecipient: setInternalRecipient,
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
