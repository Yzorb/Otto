import { ContextMenuCommandInteraction, CacheType } from 'discord.js';
import ContextCommandBase from '../../../Structures/Bases/ContextCommandBase.js';
import Otto from '../../../Structures/Clients/Otto.js';

export default class extends ContextCommandBase {
	constructor() {
		super({
			name: 'teste',
			type: 2,
		});
	}

	public async callback(otto: Otto, interaction: ContextMenuCommandInteraction<CacheType>): Promise<undefined> {
		interaction.reply('context command test');
	}
}
