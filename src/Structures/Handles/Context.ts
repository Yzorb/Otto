import { ContextMenuCommandInteraction } from 'discord.js';
import Otto from '../Clients/Otto.js';
import { IContextCommand } from '../../resources/constants/interfaces.js';

export default (otto: Otto, interaction: ContextMenuCommandInteraction, commandsOptions: IContextCommand) => {
	const { name, callback } = commandsOptions;

	if (interaction.commandName === name) {
		callback(otto, interaction);
	}
};
