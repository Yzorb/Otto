import { CommandInteraction, ContextMenuCommandInteraction, Interaction } from 'discord.js';
import Otto from '../../Structures/Clients/Otto.js';

export default {
	name: 'interactionCreate',
	callback: (otto: Otto, interaction: Interaction) => {
		if (interaction.isChatInputCommand()) {
			otto.loadSlashCommands(interaction as CommandInteraction);
		} else if (interaction.isContextMenuCommand()) {
			otto.loadContextCommands(interaction as ContextMenuCommandInteraction);
		}
	},
};
