/**
 * 🚀 Logger utility
 * Logs only in local / development environment
 */

const isDevNodeEnv =
	process.env.NODE_ENV === 'development' || process.env.NEXT_PUBLIC_VERCEL_ENV === 'development';

/**
 * Log messages only when running locally
 */
export const log = (...args: unknown[]): void => {
	if (!isDevNodeEnv) return;

	console.log('--------------------------------');
	console.log(...args);
	console.log('--------------------------------');
};

/**
 * Optional helpers (useful in debugging)
 */
export const warn = (...args: unknown[]): void => {
	if (!isDevNodeEnv) return;

	console.log('--------------------------------');
	console.warn(...args);
	console.log('--------------------------------');
};

export const error = (...args: unknown[]): void => {
	if (!isDevNodeEnv) return;

	console.log('--------------------------------');
	console.error(...args);
	console.log('--------------------------------');
};
