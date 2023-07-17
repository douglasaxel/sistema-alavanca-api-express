import pino from 'pino';

export const logger = pino({
	transport: {
		target: 'pino-pretty',
		options: {
			colorize: true,
			translateTime: 'HH:MM:ss Z',
			ignore: 'hostname,reqId',
		},
	},
});
