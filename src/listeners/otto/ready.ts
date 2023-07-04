import { REST, Routes } from 'discord.js';
import Mongo from '../../Structures/Clients/Mongo.js';
import Otto from '../../Structures/Clients/Otto.js';

export default {
	name: 'ready',
	callback: async (otto: Otto) => {
		otto.logger.info(`${otto.user?.username} connected successfully, with status: ${otto.user?.presence.status}!`);

		await Mongo.connect();

		const rest = new REST().setToken(process.env.OTTO_TOKEN);
		const slashCommands = (await otto.loadSlashCommands()) || [];
		const contextCommands = (await otto.loadContextCommands()) || [];

		const commands = [...slashCommands, ...contextCommands];

		await rest
			.put(Routes.applicationCommands(process.env.OTTO_ID), {
				body: commands,
			})
			.then((result: any) => {
				otto.logger.info(`${result.length} commands loaded successfully!`);
			});
	},
};
