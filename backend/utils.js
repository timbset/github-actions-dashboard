const constants = require('./constants');

const buildActionsApiUrl = (repoPath, apiPath) => `${constants.apiUrl}/repos/${repoPath}${apiPath}`;

const zerosStringCache = {};

const getZerosString = (count) => {
  if (zerosStringCache[count] == null) {
    zerosStringCache[count] = Array.from({ length: count }).fill('0').join('');
  }

  return zerosStringCache[count];
};

const addLeadingZeros = (num, digits = 2) => `${getZerosString(digits)}${num}`.slice(-digits);

const formatDate = (date) => [
  date.getUTCFullYear(),
  addLeadingZeros(date.getUTCMonth() + 1),
  addLeadingZeros(date.getUTCDate()),
].join('-');

module.exports = {
  buildActionsApiUrl,
  formatDate,
};
