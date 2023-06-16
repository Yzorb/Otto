import { REST, Routes } from 'discord.js';
import Otto from '../../Structures/Clients/Otto.js';
import Mongo from '../../Structures/Clients/Mongo.js';

export default {
	name: 'ready',
	callback: async (otto: Otto) => {
		await Mongo.connect();

		const rest = new REST().setToken(`${process.env.OTTO_TOKEN}`);
		const slashCommands = await otto.loadCommands();

		rest.put(Routes.applicationCommands(`${otto.user?.id}`), {
			body: slashCommands,
		}).then((result: any) => {
			otto.logger.info(`${result.length} slash commands have been uploaded!`);
		});
	},
};
