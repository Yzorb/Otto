import Otto from '../../Structures/Clients/Otto.js';

export default {
	name: 'debug',
	callback: (otto: Otto, message: string) => {
		otto.logger.debug(message);
	},
};
