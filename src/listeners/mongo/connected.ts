import mongoose, { STATES } from 'mongoose';
import Otto from '../../Structures/Clients/Otto.js';

export default {
	name: 'connected',
	once: true,
	callback: (otto: Otto) => {
		otto.logger.info(`Mongo successfully connected to ${mongoose.connection.name} (${mongoose.connection.id}) with status: ${STATES[mongoose.connection.readyState]}!`);
	},
};
