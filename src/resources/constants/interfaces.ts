import { ApplicationCommandOption, CommandInteraction, ContextMenuCommandInteraction, PermissionFlagsBits } from 'discord.js';
import Otto from '../../Structures/Clients/Otto.js';
export interface IHLogger {
	info: (content: unknown) => void;
	warn: (content: unknown) => void;
	error: (content: unknown) => void;
	debug: (content: unknown) => void;
}

export interface ILResponse {
	userId: string;
	label: string;
	args: object;
}

export interface ISlashCommands {
	name: string;
	name_localizations?: object;
	description: string;
	description_localizations?: object;
	type: 1;
	options?: ApplicationCommandOption[];
	dm_permission?: boolean | undefined;
	default_member_permissions?: keyof typeof PermissionFlagsBits;
	nsfw?: boolean;
	version?: string;
	callback(otto: Otto, interaction: CommandInteraction): Promise<undefined>;
}

export interface IContextCommand {
	name: string;
	type: 2;
	callback(otto: Otto, interaction: ContextMenuCommandInteraction): Promise<undefined>;
}
