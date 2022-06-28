const express = require('express');

const actionsRouter = require('./api/actions');

const port = process.env.PORT ?? '8080';

const app = express();

app.use('/actions', actionsRouter);

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const closeServer = () => {
  server.close();
};

process.on('SIGINT', closeServer);
process.on('SIGTERM', closeServer);
