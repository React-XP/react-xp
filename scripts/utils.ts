import fs from 'node:fs';
import path from 'node:path';

const projectRootPath = path.join(path.resolve('package.json'), '..');

const fsPromises = fs.promises;

export const getPackages = async () => {
  try {
    const files = await fsPromises.readdir(
      path.join(projectRootPath, 'src/packages'),
    );

    return files.filter((file) =>
      fs
        .statSync(path.join(projectRootPath, 'src/packages', file))
        .isDirectory(),
    );
  } catch (e) {
    console.error('Error reading packages directory', e);
  }
};
