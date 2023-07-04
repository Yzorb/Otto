import { ContextMenuCommandInteraction } from 'discord.js';
import { IContextCommand } from '../../resources/constants/interfaces.js';
import Otto from '../Clients/Otto.js';

export default class ContextCommandBase implements IContextCommand {
	public name: string;
	public type: 2;

	constructor(slashCommandOptions: Omit<ContextCommandBase, 'callback'>) {
		this.name = slashCommandOptions.name;
		this.type = slashCommandOptions.type;
	}

	public async callback(otto: Otto, interaction: ContextMenuCommandInteraction): Promise<undefined> {
		const username = otto.user?.username || 'otto';
		interaction.reply(username);
	}
}
