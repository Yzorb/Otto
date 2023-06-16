import Otto from '../../Structures/Clients/Otto.js';

export default {
	name: 'uncaughtException',
	callback: (otto: Otto, error: Error) => {
		otto.logger.error(`Unhandled exception: ${error}`);
	},
};
