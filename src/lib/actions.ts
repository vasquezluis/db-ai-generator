/* eslint-disable @typescript-eslint/no-floating-promises */
'use server'

import { createOpenAI } from '@ai-sdk/openai'
import { streamObject } from 'ai'
import { createStreamableValue } from 'ai/rsc'
import { type PartialTable, tableSchema } from '@/schemas/tables'
import { type generateProps } from './types'

export const generateTableResponse = async ({
	context,
	key,
}: generateProps) => {
	'use server'

	const tableStream = createStreamableValue<PartialTable>()
	const aiConfig = createOpenAI({ apiKey: key })

	try {
		;(async () => {
			try {
				const { partialObjectStream } = await streamObject({
					model: aiConfig('gpt-3.5-turbo'),
					prompt: `Genera una estructura de tablas MySQL basadas en la siguiente idea de proyecto: ${context}`,
					system:
						'Generas estructuras MySQL que ayuden al usuario con su idea de proyecto el código generado debe ser código SQL. Incluye comentarios si es necesario. Crea todo en español.',
					schema: tableSchema,
					onFinish: ({ usage, object }) => {
						console.log('usage: ', usage.totalTokens)
					},
				})

				// update tableStream following schema structure
				for await (const partialObject of partialObjectStream) {
					tableStream.update({
						table: {
							sql: partialObject.table?.sql,
							map: partialObject.table?.map,
							description: partialObject.table?.description,
						},
					})
				}

				tableStream.done()
			} catch (error: unknown) {
				if (error instanceof Error) {
					console.error('StreamObject error: ', error.message)
					tableStream.error(error)
				} else {
					console.error('Unexpected error:', error)
					tableStream.error(new Error('Unexpected error occurred'))
				}
			}
		})()

		return { object: tableStream.value }
	} catch (error) {
		if (error instanceof Error) {
			console.error('OpenAI configuration error:', error.message)
		} else {
			console.error('Unexpected error:', error)
		}
		return { object: 'error en la peticion' }
	}
}
