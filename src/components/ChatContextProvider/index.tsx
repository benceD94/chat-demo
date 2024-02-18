import React, { useState } from 'react';
import { User } from '../../types/user';

export interface Context {
  isLoaded?: boolean;
  recipient: User | null;
  setRecipient: (user: User) => void;
}

const defaultCallback = () => {
  throw new Error('ChatContextProvider not initialized.');
};

export const ChatContext = React.createContext<Context>({
  isLoaded: false,
  recipient: null,
  setRecipient: defaultCallback,
});
ChatContext.displayName = 'ChatContextProvider';

const ChatContextProvider: React.FC<{children: React.ReactNode;}> = ({ children }) => {
  const [internalRecipient, setInternalRecipient] = useState<User | null>(null);

  const value = {
    isLoaded: true,
    recipient: internalRecipient,
    setRecipient: setInternalRecipient,
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};

export default ChatContextProvider;
