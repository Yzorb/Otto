declare namespace NodeJS {
	export interface ProcessEnv {
		OTTO_TOKEN: string;
		OTTO_ID: string;
		LANGUAGE_DEFAULT: string;
		MONGO_USER: string;
		MONGO_PASS: string;
		MONGO_DB: string;
	}
}
