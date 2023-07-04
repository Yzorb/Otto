import Otto from '../../Structures/Clients/Otto.js';

export default {
	name: 'error',
	callback: (otto: Otto, error: Error) => {
		otto.logger.error(error);
	},
};
