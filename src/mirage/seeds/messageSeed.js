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
  server.create('message', {
    from: 'ffdddc5c-8415-5764-9d61-865ec350db8d',
    to: '123',
    content: 'Hey',
    timeSent: new Date().setHours(-2),
  });
  server.create('message', {
    from: 'ffdddc5c-8415-5764-9d61-865ec350db8d',
    to: '123',
    content: 'How\'s it going?',
    timeSent: new Date().setHours(-1),
  });
  server.create('message', {
    from: '193f6e47-7b58-5702-b7f6-7f9fba98b8cc',
    to: '123',
    content: 'Hi',
    timeSent: new Date().setHours(-2),
  });
  server.create('message', {
    from: '193f6e47-7b58-5702-b7f6-7f9fba98b8cc',
    to: '123',
    content: 'How is your day going?',
    timeSent: new Date().setHours(-1),
  });
};
