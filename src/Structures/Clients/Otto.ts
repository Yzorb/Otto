import { Client, CommandInteraction } from 'discord.js';
import mongoose from 'mongoose';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { ottoConfig } from '../../resources/constants/constants.js';
import { ILogger } from '../../resources/constants/interfaces.js';
import logger from '../../utils/helpers/logger.js';

export default class extends Client {
	logger: ILogger;

	constructor() {
		super(ottoConfig);

		this.logger = logger;
	}

	public async loadListeners(): Promise<void> {
		try {
			const dirname: string = path.dirname(fileURLToPath(import.meta.url));
			const folders: string[] = fs.readdirSync(path.join(dirname, '..', '..', 'listeners'));

			for (const folder of folders) {
				const files: string[] = fs.readdirSync(path.join(dirname, '..', '..', 'listeners', folder));

				for (const file of files) {
					if (file.endsWith('.js')) {
						const options = await import(`../../listeners/${folder}/${file}`);
						const { name, once, callback } = options.default;

						switch (folder) {
							default:
								if (once) {
									this.once(name, (...args) => callback(this, ...args));
								} else {
									this.on(name, (...args) => callback(this, ...args));
								}
								break;
							case 'mongo':
								if (once) {
									mongoose.connection.once(name, (...args) => callback(this, ...args));
								} else {
									mongoose.connection.on(name, (...args) => callback(this, ...args));
								}
								break;
							case 'process':
								if (once) {
									process.once(name, (...args) => callback(this, ...args));
								} else {
									process.on(name, (...args) => callback(this, ...args));
								}
								break;
						}
					}
				}
			}
		} catch (error) {
			logger.error(error);
		}
	}

	public async loadCommands(interaction: CommandInteraction | undefined = undefined): Promise<object[] | undefined> {
		try {
			const dirname: string = path.dirname(fileURLToPath(import.meta.url));
			const folders: string[] = fs.readdirSync(path.join(dirname, '..', '..', 'slashCommands', 'commands'));
			const commandsOptions: object[] = [];

			for (const folder of folders) {
				const files: string[] = fs.readdirSync(path.join(dirname, '..', '..', 'slashCommands', 'commands', folder));

				for (const file of files) {
					if (file.endsWith('.js')) {
						const handler = (await import('../../slashCommands/handler.js')).default;
						const options = await import(`../../slashCommands/commands/${folder}/${file}`);

						if (interaction) {
							handler(this, interaction, options.default);
						}

						commandsOptions.push(options.default);
					}
				}
			}

			return commandsOptions;
		} catch (error) {
			logger.error(error);
		}
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
