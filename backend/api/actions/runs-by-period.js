const fetch = require('node-fetch');

const { buildActionsApiUrl } = require('../../utils');

module.exports = async (req, res) => {
  const { orgName, repoName } = req.params;
  const response = await fetch(buildActionsApiUrl(`${orgName}/${repoName}`, '/actions/runs'));
  const data = await response.json();
  res.json(data);
};
