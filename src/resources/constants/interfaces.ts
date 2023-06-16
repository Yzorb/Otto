import { Client } from 'discord.js';

export interface ILogger {
	info: (content: unknown) => void;
	warn: (content: unknown) => void;
	error: (content: unknown) => void;
}
