import { CommandInteraction, CacheType } from 'discord.js';
import SlashCommandBase from '../../../Structures/Bases/SlashCommandBase.js';
import Otto from '../../../Structures/Clients/Otto.js';

export default class extends SlashCommandBase {
	constructor() {
		super({
			name: 'teste',
			description: 'slash command test',
			type: 1,
		});
	}

	public async callback(otto: Otto, interaction: CommandInteraction<CacheType>): Promise<undefined> {
		interaction.reply('test');
	}
}
