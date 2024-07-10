'use server'

import { type Response, type ResponseError } from './types'

export const createResponse = async (
	input: string
): Promise<Response | ResponseError> => {
	try {
		const response = {
			message: 'respuesta',
			body: [
				{
					id: 1,
					content: 'este es el contenido de la respuesta',
					input,
				},
			],
		}

		return await new Promise((resolve) => {
			setTimeout(() => {
				resolve(response)
			}, 3000)
		})
	} catch (error) {
		return {
			message: 'error',
			error,
		}
	}
}
