const sharedConfig = require('@react-xp/release-config');
const { name } = require('./package.json');

const transformedName = name.replace('@react-xp/', '');

module.exports = {
  ...sharedConfig,
  tagFormat: `${transformedName}@\${version}`,
};
