import { exec } from 'node:child_process';
import fs from 'node:fs';
import { logger } from './logger';

const commonPrdDeps = {};

const commonDevDeps = {
  '@biomejs/biome': '^1.9.3',
  '@glzr/semantic-release-npm': '^1.5.0',
  '@jcoreio/semantic-release-npm': '^12.0.2',
  '@react-xp/biome-config': 'workspace:*',
  '@semantic-release/changelog': '^6.0.3',
  '@semantic-release/commit-analyzer': '^13.0.0',
  '@semantic-release/git': '^10.0.1',
  '@semantic-release/github': '^11.0.0',
  '@semantic-release/npm': '^12.0.1',
  '@semantic-release/release-notes-generator': '^14.0.1',
  '@storybook/react': '^8.3.5',
  '@types/react': '^18.3.11',
  '@types/react-dom': '^18.3.0',
  nodemon: '^3.1.7',
  react: '^18.3.1',
  'react-dom': '^18.3.1',
  'react-native': '^0.75.4',
  rimraf: '^6.0.1',
  'semantic-release': '^24.1.2',
  'semantic-release-monorepo': '^8.0.2',
  typescript: '^5.6.2',
};

/**
 * version values:
 * - <specific-version>: force install a specific version
 * - stable: install the latest stable version
 * - auto: install the latest version
 */
const packages = [
  { path: 'src/packages/console', name: '@react-xp/console', version: 'auto' },
];

const getVersions = async () => {
  const packageVersions = {};
  let successCount = 0;
  let errorCount = 0;

  return new Promise<object>((resolve, reject) => {
    const callback = (package_, versionsString = '') => {
      if (versionsString) {
        successCount++;

        const versions = JSON.parse(versionsString);

        let index = versions.length;
        let keepLooping = true;

        do {
          index--;
          const version = versions[index];
          keepLooping = true;

          if (package_.version === 'auto') {
            packageVersions[package_.name] = `^${version}`;

            keepLooping = false;
          } else if (package_.version === 'stable') {
            const isStable = !version.includes('-');

            if (isStable) {
              packageVersions[package_.name] = `^${version}`;

              keepLooping = false;
            }
          } else {
            packageVersions[package_.name] = package_.version;

            keepLooping = false;
          }

          if (index === 0) {
            keepLooping = false;
          }
        } while (keepLooping);
      } else {
        errorCount++;
      }

      if (successCount + errorCount === packages.length) {
        if (errorCount > 0) {
          reject();
        } else {
          resolve(packageVersions);
        }
      }
    };

    for (const package_ of packages) {
      exec(
        `npm view ${package_.name} versions --json`,
        (error, stdout, stderr) => {
          if (error) {
            errorCount++;
            console.error(`exec error: ${error}`);

            callback(package_);

            return;
          }

          callback(package_, stdout);
        },
      );
    }
  });
};

const syncDeps = async () => {
  logger(0, '###   Start syncing dependencies  ###');
  logger(0, '-------------------------------------');

  const versions = await getVersions();

  for (const package_ of packages) {
    (async () => {
      const packagePath = package_.path;
      logger(1, `> Syncing dependencies in ${packagePath}`);

      fs.copyFileSync(
        `${packagePath}/package.json`,
        `${packagePath}/package.json.bak`,
      );

      try {
        const packageJson = JSON.parse(
          fs.readFileSync(`${packagePath}/package.json`, 'utf8'),
        );

        for (const peerDep in packageJson.peerDependencies) {
          if (
            commonPrdDeps[peerDep] &&
            commonPrdDeps[peerDep] !== packageJson.peerDependencies[peerDep]
          ) {
            packageJson.peerDependencies[peerDep] = commonPrdDeps[peerDep];

            logger(
              2,
              `--> Updated peer dependency ${peerDep} to ${commonPrdDeps[peerDep]}`,
            );
          }
        }

        for (const devDep in packageJson.devDependencies) {
          if (
            versions[devDep] &&
            versions[devDep] !== packageJson.devDependencies[devDep]
          ) {
            packageJson.devDependencies[devDep] = versions[devDep];

            logger(
              2,
              `--> Updated dev dependency ${devDep} to ${versions[devDep]}`,
            );
          }

          if (
            commonPrdDeps[devDep] &&
            commonPrdDeps[devDep] !== packageJson.devDependencies[devDep]
          ) {
            packageJson.devDependencies[devDep] = commonPrdDeps[devDep];

            logger(
              2,
              `--> Updated dev dependency ${devDep} to ${commonPrdDeps[devDep]}`,
            );
          }

          if (
            commonDevDeps[devDep] &&
            commonDevDeps[devDep] !== packageJson.devDependencies[devDep]
          ) {
            packageJson.devDependencies[devDep] = commonDevDeps[devDep];

            logger(
              2,
              `--> Updated dev dependency ${devDep} to ${commonDevDeps[devDep]}`,
            );
          }
        }

        const contentPackageJson = JSON.stringify(packageJson, null, 2);

        fs.writeFileSync(`${packagePath}/package.json`, contentPackageJson);

        logger(1, `> Successfully synced dependencies in ${packagePath}`);
      } catch (err) {
        console.error(err);

        fs.copyFileSync(
          `${packagePath}/package.json.bak`,
          `${packagePath}/package.json`,
        );

        logger(1, `Failed to sync dependencies in ${packagePath}`);
      }

      fs.rmSync(`${packagePath}/package.json.bak`);

      logger(0, '\n');
    })();
  }

  exec(
    'npm run prettier-format-all-package-json',
    (error, stdout, stderr) => {},
  );

  logger(0, '-------------------------------------');
  logger(0, '### Finished syncing dependencies ###');
};

await syncDeps();
