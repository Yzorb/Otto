import { CommandInteraction } from 'discord.js';
import Otto from '../../Structures/Clients/Otto.js';

export default {
	name: 'interactionCreate',
	callback: (otto: Otto, interaction: CommandInteraction) => {
		otto.loadCommands(interaction);
	},
};
