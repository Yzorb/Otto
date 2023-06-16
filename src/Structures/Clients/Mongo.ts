import mongoose, { Connection, STATES, connection } from 'mongoose';
import logger from '../../utils/helpers/logger.js';

export default {
	connect: async () => {
		const result = await mongoose.connect('mongodb+srv://<user>:<password>@otto-cluster.l2fjjhc.mongodb.net/?retryWrites=true&w=majority', {
			user: process.env.MONGO_USER,
			pass: process.env.MONGO_PASS,
			dbName: process.env.MONGO_DB_NAME,
		});

		return result;
	},
};
