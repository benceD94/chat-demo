/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useContext, useEffect } from 'react';
import { QueryClient, QueryClientProvider } from 'react-query';
import { render } from '@testing-library/react';

import ChatContextProvider, { ChatContext, Context } from '..';

type TestingComponentProps = {
  setupFunction?: (context: Context) => any;
};
const TestingComponent = ({ setupFunction }: TestingComponentProps) => {
  const context = useContext(ChatContext);

  useEffect(() => {
    if (setupFunction) setupFunction(context);
  }, []);

  return <>This is a test component!</>;
};

const defaultJsx = (
  overrides: Partial<TestingComponentProps> = {},
  queryClient = new QueryClient(),
) => {
  return (
    <QueryClientProvider client={queryClient}>
      <ChatContextProvider>
        <TestingComponent {...overrides} />
      </ChatContextProvider>
    </QueryClientProvider>
  );
};

describe('ChatContextProvider', () => {
  describe('isLoaded', () => {
    it('should have been loaded', () => {
      render(
        defaultJsx({
          setupFunction: (context) => {
            expect(context.isLoaded).toEqual(true);
          },
        }),
      );
    });
  });

  describe('recipient', () => {
    it('should be null by default', () => {
      render(
        defaultJsx({
          setupFunction: (context) => {
            expect(context.recipient).toEqual(null);
          },
        }),
      );
    });
  });
});
