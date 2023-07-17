// import { AxiosError } from 'axios';
import { logger } from '../utils/logger';
import AppError from './AppError';

interface IErrorHandled {
	code: number;
	message: string;
	data?: string;
}

function handleError(err: Error): IErrorHandled {
	logger.error(err);

	// if (err instanceof AxiosError) {
	// 	return {
	// 		code: err.response?.status ?? 500,
	// 		message: 'Erro de requisição',
	// 		data: JSON.stringify(err.response?.data),
	// 	};
	// }

	if (err instanceof AppError) {
		return {
			code: err.code,
			message: err.message,
		};
	}
	if (/prisma/g.test(err?.message)) {
		return {
			code: 400,
			message: 'Transaction Error',
			data: err.message,
		};
	}

	return {
		code: 500,
		message: 'Ocorreu algum erro no servidor, tente novamente mais tarde',
		data: err?.message,
	};
}

export default handleError;
