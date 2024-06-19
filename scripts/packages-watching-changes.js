const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');

const WATCH_FOLDERS = [
  path.join(__dirname, '../src/packages/core/src/'),
  path.join(__dirname, '../src/packages/theme/src/'),
  path.join(__dirname, '../src/packages/ui/src/'),
];

const runningBuildPackages = () => {
  execSync('pnpm run build:packages', { stdio: 'inherit' });
};

const watchingForChanges = () => {
  console.log('Watching for changes in packages...');

  for (watchFolder of WATCH_FOLDERS) {
    fs.watch(watchFolder, { recursive: true }, (eventType, fileName) => {
      console.log(`Detected changes in "${fileName}"`);
      // if (eventType === 'rename') {
      //   console.log(`${fileName} was added/deleted`);
      // } else {
      //   console.log(`${fileName} was updated`);
      // }
      runningBuildPackages();
    });
  }
};

watchingForChanges();
