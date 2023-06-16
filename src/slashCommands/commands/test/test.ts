import { CommandInteraction } from 'discord.js';

export default {
	name: 'test',
	description: 'test for command',
	callback: (interaction: CommandInteraction) => {
		interaction.reply('tested');
	},
};
