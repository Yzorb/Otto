import { CommandInteraction } from 'discord.js';
import Otto from '../Clients/Otto.js';
import { ISlashCommands } from '../../resources/constants/interfaces.js';

export default (otto: Otto, interaction: CommandInteraction, commandsOptions: ISlashCommands) => {
	const { name, callback } = commandsOptions;

	if (interaction.commandName === name) {
		callback(otto, interaction);
	}
};
