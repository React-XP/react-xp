const fs = require('node:fs');
const path = require('node:path');
const { execSync } = require('node:child_process');

const PACKAGES = [
  {
    name: 'core',
    root: path.join(__dirname, '../src/packages/core'),
    paths: ['src/hooks', 'src/modules'],
  },
  {
    name: 'theme',
    root: path.join(__dirname, '../src/packages/theme'),
    paths: ['src/hooks', 'src/modules', 'src/providers'],
  },
  {
    name: 'ui',
    root: path.join(__dirname, '../src/packages/ui'),
    paths: ['src/components'],
  },
];

const getFoldersName = (path) => {
  return fs.readdirSync(path).filter((file) => {
    return fs.statSync(`${path}/${file}`).isDirectory();
  });
};

(() => {
  console.log('Start updating package.json exports ...\n');

  for (_package of PACKAGES) {
    console.log(`==> ${_package.name} :: Backup package.json ...`);

    const packageJsonPath = path.join(_package.root, 'package.json');
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));

    fs.writeFileSync(
      path.join(_package.root, 'package.backup.json'),
      JSON.stringify(packageJson, null, 2)
    );

    let packageExports = packageJson.exports || {};

    for (packagePath of _package.paths) {
      console.log(
        `==> ${_package.name}/${packagePath} :: Updating package.json exports ...`
      );

      const foldersName = getFoldersName(path.join(_package.root, packagePath));
      const exports = foldersName.reduce((acc, folderName) => {
        acc[`./${folderName}`] = {
          source: `./${packagePath}/${folderName}/index.ts`,
          default: `./${packagePath.replace(
            'src',
            'dist'
          )}/${folderName}/index.js`,
        };
        return acc;
      }, {});

      packageExports = { ...packageExports, ...exports };

      //   console.log('foldersName', JSON.stringify(foldersName, null, 2));
      //   console.log('exports', JSON.stringify(exports, null, 2));
    }

    packageJson.exports = packageExports;

    fs.writeFileSync(packageJsonPath, JSON.stringify(packageJson, null, 2));

    console.log(`==> ${_package.name} :: Package.json exports of updated!\n`);
  }

  console.log('All package.json exports updated!');
})();
