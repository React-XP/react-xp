const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');

const WATCH_FOLDERS = [
  { name: 'core', path: path.join(__dirname, '../src/packages/core/src/') },
  { name: 'theme', path: path.join(__dirname, '../src/packages/theme/src/') },
  { name: 'ui', path: path.join(__dirname, '../src/packages/ui/src/') },
];

const runningBuildPackages = (packageName) => {
  console.log(`Building package "${packageName}"...`);

  execSync(`pnpm run build:package-${packageName}`, { stdio: 'inherit' });
};

const watchingForChanges = () => {
  console.log('Watching for changes in packages...');

  for (watchFolder of WATCH_FOLDERS) {
    fs.watch(watchFolder.path, { recursive: true }, (eventType, fileName) => {
      console.log(`Detected changes in "${fileName}"`);
      // if (eventType === 'rename') {
      //   console.log(`${fileName} was added/deleted`);
      // } else {
      //   console.log(`${fileName} was updated`);
      // }
      runningBuildPackages(watchFolder.name);
    });
  }
};

watchingForChanges();
