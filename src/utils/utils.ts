import { fileURLToPath } from 'node:url';
import path from 'node:path';

export const dirname = (url: string) => {
	return path.dirname(fileURLToPath(url));
};
