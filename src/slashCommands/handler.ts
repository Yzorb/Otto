import { Client, CommandInteraction } from 'discord.js';

export default (otto: Client, interaction: CommandInteraction, commandsOptions: any) => {
	if (interaction.commandName === commandsOptions.name) {
		commandsOptions.callback(interaction);
	}
};
