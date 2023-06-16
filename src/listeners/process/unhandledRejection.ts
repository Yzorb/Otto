import Otto from '../../Structures/Clients/Otto.js';

export default {
	name: 'unhandledRejection',
	callback: (otto: Otto, reason: any) => {
		otto.logger.error(`Unhandled promise rejection: ${reason}`);
	},
};
