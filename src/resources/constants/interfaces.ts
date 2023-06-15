export interface ILogger {
	info: (content: string | number | boolean | object | unknown) => void;
	warn: (content: string | number | boolean | object | unknown) => void;
	error: (content: string | number | boolean | object | unknown) => void;
}
