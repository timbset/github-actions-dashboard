const constants = require('./constants');

const buildActionsApiUrl = (repoPath, apiPath) => `${constants.apiUrl}/repos/${repoPath}${apiPath}`;

module.exports = {
  buildActionsApiUrl,
};
