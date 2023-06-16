import { Schema, model } from 'mongoose';

const usersSchema = new Schema({
	userId: {
		type: String,
		unique: true,
	},
	language: {
		language: {
			type: String,
			default: process.env.LANGUAGE_DEFAULT,
		},
		isTraductor: {
			type: Boolean,
			default: false,
		},
	},
});
