import fs from 'node:fs';
import path from 'node:path';
import { logger } from './logger';

const projectRootPath = path.join(path.resolve('package.json'), '..');

const getArgs = () => {
	// biome-ignore lint/suspicious/noExplicitAny: <explanation>
	const args: Record<string, any> = {};

	process.argv.forEach((val, index) => {
		if (index > 1) {
			const split = val.split('=');
			args[split[0]] = split[1];
		}
	});

	return args;
};

(() => {
	const args = getArgs();

	const packageName = args.name;

	logger(0, `Create a ${packageName} package in the src/packages directory`);

	if (packageName === undefined) {
		logger(0, 'Please provide a package name using the --name flag');

		return;
	}

	try {
		if (fs.statSync(path.join(projectRootPath, `src/packages/${packageName}`)).isDirectory()) {
			logger(0, `The package ${packageName} already exists`);

			return;
		}
	} catch (error) {}

	fs.cpSync(
		path.join(projectRootPath, 'src/templates/new-package'),
		path.join(projectRootPath, `src/packages/${packageName}`),
		{ recursive: true }
	);

	for (const file of fs.readdirSync(path.join(projectRootPath, `src/packages/${packageName}`), { recursive: true })) {
		let filePath = path.join(projectRootPath, `src/packages/${packageName}`, file as string);

		logger(1, `Updating ${file}`, filePath);

		if (fs.statSync(filePath).isFile()) {
			let fileContent = fs.readFileSync(filePath, { encoding: 'utf8' });

			fileContent = fileContent.replace(/<package-name>/g, packageName);

			if (filePath.includes('<package-name>')) {
				fs.rmSync(filePath);

				filePath = filePath.replace('<package-name>', packageName);
			}

			fs.writeFileSync(filePath, fileContent, { encoding: 'utf8' });
		}
	}
})();
