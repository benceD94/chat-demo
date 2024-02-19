import { Model, createServer } from 'miragejs';

import { createUsersSeed } from './seeds/usersSeed';
import { createMessageSeed } from './seeds/messageSeed';

const BACKEND_HOSTS = process.env.REACT_APP_BACKEND_HOST_URL;

export function makeServer({ environment = 'test' } = {}) {
  const endpointURL = `${BACKEND_HOSTS}`;

  let server = createServer({
    environment,

    models: {
      users: Model,
      messages: Model,
    },

    seeds(server) {
      createUsersSeed(server);
      createMessageSeed(server);
    },

    routes() {
      // Users
      this.get(`${endpointURL}/users`, (schema) => {
        return schema.users.all();
      });

      // Messages
      this.get(`${endpointURL}/messages/:userId`, (schema, request) => {
        const userId = request.params.userId;
        return schema.messages.all().filter((message) => {
          return message.from === userId || message.to === userId;
        });
      });

      this.post(`${endpointURL}/messages/:senderId/:receiverId`, (schema, request) => {
        const senderId = request.params.senderId;
        const receiverId = request.params.receiverId;
        const content = JSON.parse(request.requestBody);

        schema.messages.create({
          from: senderId,
          to: receiverId,
          ...content
        });

        // Create fake response
        setTimeout(() => {
          schema.messages.create({
            to: senderId,
            from: receiverId,
            content: 'Fake answer'
          });
        }, 3000)
      });

      this.passthrough(`${endpointURL}/***`);
    },
  });

  return server;
}
