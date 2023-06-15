import { DotenvConfigOptions, configDotenv } from 'dotenv';
import debug from 'debug';
import { nameSpace } from '../../resources/constants/constants.js';

export default {
	EnableLogger: (name: string = nameSpace) => {
		debug.enable(name);
	},
	DotEnvConfig: (options: DotenvConfigOptions) => {
		configDotenv(options);
	},
};
