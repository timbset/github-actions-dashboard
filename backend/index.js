const express = require('express');

const actionsRouter = require('./api/actions');

const port = process.env.PORT ?? '8080';

const app = express();

app.use('/actions', actionsRouter);

app.use('*', (req, res, next) => {
  console.log(`Unknown request: ${req.url}`);
  next();
});

const server = app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});

const closeServer = () => {
  server.close();
};

process.on('SIGINT', closeServer);
process.on('SIGTERM', closeServer);

// const controller = require('./controller');
//
// const main = async () => {
//   console.log(await controller.getLastRunsDuration('DevExpress', 'DevExtreme'));
// };
//
// main();
