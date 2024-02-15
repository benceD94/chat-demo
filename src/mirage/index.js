import { Model, createServer } from 'miragejs';

import { createUsersSeed } from './seeds/usersSeed';

const BACKEND_HOSTS = process.env.REACT_APP_BACKEND_HOST_URL;

export function makeServer({ environment = 'test' } = {}) {
  const endpointURL = `${BACKEND_HOSTS}`;

  let server = createServer({
    environment,

    models: {
      users: Model,
    },

    seeds(server) {
      createUsersSeed(server);
    },

    routes() {
      // Users
      this.get(`${endpointURL}/users`, (schema) => {
        return schema.users.all();
      });

      this.passthrough(`${endpointURL}/***`);
    },
  });

  return server;
}
