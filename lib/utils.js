const _ = require('lodash');
const copyServerlessEnvironmentValuesToProcessEnvironment = serverless => {
  const serviceEnvironment = serverless.service.provider.environment || {};
  const customEnvironment = _.get(serverless, 'service.custom.sequelizeMigrations', {});
  return Object.assign(process.env, serviceEnvironment, customEnvironment);
};

module.exports = {
  copyServerlessEnvironmentValuesToProcessEnvironment
};