import React from 'react';

import { ChatContext, Context } from '..';

type MockProps = Partial<Context> & {
  children: React.ReactNode;
};

export const MockChatContextProvider: React.FC<MockProps> = ({
  children,
  ...overrides
}) => {
  const value: Context = {
    isLoaded: true,
    isLoadingMessages: false,
    recipient: null,
    sender: null,
    messages: [],
    setRecipient: jest.fn(),
    ...overrides,
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};
