import { Client } from 'discord.js';
import { ottoConfig } from '../../resources/constants/constants.js';
import { ILogger } from '../../resources/constants/interfaces.js';
import logger from '../../utils/helpers/logger.js';

export default class extends Client {
	logger: ILogger;

	constructor() {
		super(ottoConfig);

		this.logger = logger;
	}

	public connect(token: string | undefined = process.env.OTTO_TOKEN): void {
		try {
			super.login(token).then(() => {
				logger.info(`${this.user?.username} connected successfully, with status: ${this.user?.presence.status}!`);
			});
		} catch (error) {
			logger.error(error);
		}
	}
}
