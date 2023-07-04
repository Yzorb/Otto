import { ApplicationCommandOption, CommandInteraction, PermissionFlagsBits } from 'discord.js';
import { ISlashCommands } from '../../resources/constants/interfaces.js';
import Otto from '../Clients/Otto.js';

export default class SlashCommandBase implements ISlashCommands {
	public name: string;
	public name_localizations?: object;
	public description: string;
	public description_localizations?: object;
	public type: 1;
	public options?: ApplicationCommandOption[];
	public dm_permission?: boolean | undefined;
	public default_member_permissions?: keyof typeof PermissionFlagsBits;
	public nsfw?: boolean;
	public version?: string;

	constructor(slashCommandOptions: Omit<SlashCommandBase, 'callback'>) {
		this.name = slashCommandOptions.name;
		this.name_localizations = slashCommandOptions.name_localizations;
		this.description = slashCommandOptions.description;
		this.description_localizations = slashCommandOptions.description_localizations;
		this.type = slashCommandOptions.type;
		this.options = slashCommandOptions.options;
		this.dm_permission = slashCommandOptions.dm_permission;
		this.default_member_permissions = slashCommandOptions.default_member_permissions;
		this.nsfw = slashCommandOptions.nsfw;
		this.version = slashCommandOptions.version;
	}

	public async callback(otto: Otto, interaction: CommandInteraction): Promise<undefined> {
		const username = otto.user?.username || 'otto';
		interaction.reply(username);
	}
}
