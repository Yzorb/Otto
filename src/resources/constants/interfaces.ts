export interface ILogger {
	info: (content: string | number | boolean | object) => void;
	warn: (content: string | number | boolean | object) => void;
	error: (content: string | number | boolean | object) => void;
};