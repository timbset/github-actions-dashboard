const fetch = require('node-fetch');
const qs = require('node:querystring');

const { buildActionsApiUrl, formatDate } = require('./utils');

const getLastRunsDuration = async (orgName, repoName) => {
  const date = new Date();
  const formattedEndDate = formatDate(date);
  date.setUTCDate(date.getUTCDate() - 7);
  const formattedStartDate = formatDate(date);

  const response = await fetch(
    buildActionsApiUrl(
      `${orgName}/${repoName}`,
      '/actions/runs?' + qs.stringify({
        status: 'completed',
        created: `${formattedStartDate}..${formattedEndDate}`,
        per_page: 100,
      }),
    )
  );

  const data = await response.json();

  const durationByDateMap = new Map();

  for (const run of data.workflow_runs) {
    const formattedDate = formatDate(new Date(run.created_at));
    const previousCount = durationByDateMap.get(formattedDate);

    durationByDateMap.set(formattedDate, previousCount != null ? {  } : {});
  }

  return data.workflow_runs.map((run) => ({
    original: run,
    duration: new Date(run.updated_at).getTime() - new Date(run.created_at).getTime(),
  }));
};

module.exports = {
  getLastRunsDuration,
};
