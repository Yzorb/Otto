import debug from 'debug';
import { nameSpace } from '../../resources/constants/constants.js';
import { ILogger } from '../../resources/constants/interfaces.js'

const defaultLogger: debug.IDebugger = debug(nameSpace);

const logger: ILogger = {
	info: (content) => {
		const infoLogger = defaultLogger.extend('info');

		infoLogger(content);
	},
	warn: (content) => {
		const warnLogger = defaultLogger.extend('warn');

		warnLogger(content);
	},
	error: (content) => {
		const errorLogger = defaultLogger.extend('error');

		errorLogger(content);
	},
};

export { logger as default, ILogger };
