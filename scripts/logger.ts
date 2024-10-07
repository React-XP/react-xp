export const logger = (level: number, ...args) => {
	const now = new Date();
	const prefix = ' '.repeat(level * 2);

	console.log(`${now.toISOString()} ${prefix}`, ...args);
};
