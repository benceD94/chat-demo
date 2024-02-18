export const createMessageSeed = (server) => {
  server.create('message', {
    from: '3bc0f43f-9acf-5b0d-887a-f83baa5975ab',
    to: '123',
    content: 'Hello',
    timeSent: new Date().setHours(-2),
  });
  server.create('message', {
    from: '3bc0f43f-9acf-5b0d-887a-f83baa5975ab',
    to: '123',
    content: 'How are you?',
    timeSent: new Date().setHours(-1),
  });
};
