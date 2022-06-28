const express = require('express');

const runsByPeriod = require('./runs-by-period');

const repoPathRouter = new express.Router({ mergeParams: true });
const handlersRouter = new express.Router({ mergeParams: true });

handlersRouter.get('/runs-by-period', runsByPeriod);

repoPathRouter.use('/:orgName/:repoName', handlersRouter);

module.exports = repoPathRouter;
