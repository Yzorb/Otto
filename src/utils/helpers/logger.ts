import debug from 'debug';
import { nameSpace } from '../../resources/constants/constants.js';
import { IHLogger } from '../../resources/constants/interfaces.js';

const defaultLogger: debug.IDebugger = debug(nameSpace);

const logger: IHLogger = {
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
	debug: (content) => {
		const debugLogger = defaultLogger.extend('debug');

		debugLogger(content);
	},
};

export default logger;
