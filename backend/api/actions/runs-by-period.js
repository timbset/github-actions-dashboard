const { getLastRunsDuration } = require('../../controller');

module.exports = async (req, res) => {
  res.json({
    runs: await getLastRunsDuration(req.params.orgName, req.params.repoName),
  });
};
