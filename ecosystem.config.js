module.exports = {
  apps: [
    {
      name: 'yjs-server',
      script: './node_modules/.bin/y-websocket',
      env: {
        HOST: 'localhost',
        PORT: 6010,
        YPERSISTENCE: './data',
      },
    },
  ],
};

