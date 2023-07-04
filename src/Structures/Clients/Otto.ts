import { Client, CommandInteraction, ContextMenuCommandInteraction } from 'discord.js';
import mongoose from 'mongoose';
import fs from 'node:fs';
import path from 'node:path';
import { ottoConfig } from '../../resources/constants/constants.js';
import { IHLogger } from '../../resources/constants/interfaces.js';
import logger from '../../utils/helpers/logger.js';
import { dirname } from '../../utils/utils.js';

export default class extends Client {
	logger: IHLogger;

	constructor() {
		super(ottoConfig);

		this.logger = logger;
	}

	public async loadListeners(): Promise<void> {
		try {
			const folders: string[] = fs.readdirSync(path.join(dirname(import.meta.url), '..', '..', 'listeners'));
			for (const folder of folders) {
				const files: string[] = fs.readdirSync(path.join(dirname(import.meta.url), '..', '..', 'listeners', folder));
				for (const file of files) {
					if (file.endsWith('.js')) {
						const options = await import(`../../listeners/${folder}/${file}`);
						const { name, once, callback } = options.default;

						switch (folder) {
							case 'otto':
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

	public async loadSlashCommands(interaction?: CommandInteraction): Promise<object[] | undefined> {
		try {
			const folders: string[] = fs.readdirSync(path.join(dirname(import.meta.url), '..', '..', 'commands', 'slash'));
			const commandsOptions: object[] = [];

			for (const folder of folders) {
				const files: string[] = fs.readdirSync(path.join(dirname(import.meta.url), '..', '..', 'commands', 'slash', folder));

				for (const file of files) {
					const handler = (await import('../Handles/Slash.js')).default;
					const options = new (await import(`../../commands/slash/${folder}/${file}`)).default();

					console.log(options);

					if (interaction) {
						handler(this, interaction, options);
					}

					commandsOptions.push(options);
				}
			}

			return commandsOptions;
		} catch (error) {
			logger.error(error);
		}
	}

	public async loadContextCommands(interaction?: ContextMenuCommandInteraction): Promise<object[] | undefined> {
		try {
			const folders: string[] = fs.readdirSync(path.join(dirname(import.meta.url), '..', '..', 'commands', 'context'));
			const commandsOptions: object[] = [];

			for (const folder of folders) {
				const files: string[] = fs.readdirSync(path.join(dirname(import.meta.url), '..', '..', 'commands', 'context', folder));

				for (const file of files) {
					const handler = (await import('../Handles/Context.js')).default;
					const options = new (await import(`../../commands/context/${folder}/${file}`)).default();

					if (interaction) {
						handler(this, interaction, options);
					}

					commandsOptions.push(options);
				}
			}

			return commandsOptions;
		} catch (error) {
			logger.error(error);
		}
	}

	public connect(token: string | undefined = process.env.OTTO_TOKEN): void {
		try {
			super.login(token);
		} catch (error) {
			logger.error(error);
		}
	}
}
