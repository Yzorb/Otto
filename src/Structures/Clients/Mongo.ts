import mongoose from 'mongoose';

export default {
	connect: async () => {
		const result = await mongoose.connect('mongodb+srv://<user>:<password>@otto-cluster.l2fjjhc.mongodb.net/?retryWrites=true&w=majorit', {
			user: process.env.MONGO_USER,
			pass: process.env.MONGO_PASS,
			dbName: process.env.MONGO_DB,
		});

		return result;
	},
};
