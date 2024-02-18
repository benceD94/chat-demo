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
    recipient: null,
    sender: null,
    setRecipient: jest.fn(),
    ...overrides,
  };

  return (
    <ChatContext.Provider value={value}>
      {children}
    </ChatContext.Provider>
  );
};
