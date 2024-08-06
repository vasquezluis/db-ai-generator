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

	;(async () => {
		const { partialObjectStream } = await streamObject({
			model: aiConfig('gpt-3.5-turbo'),
			prompt: `Genera una estructura de tablas MySQL basadas en la siguiente idea de proyecto: ${context}`,
			system:
				'Generas estructuras MySQL que ayuden al usuario con su idea de proyecto el código generado debe ser código SQL. Incluye comentarios si es necesario. Crea todo en español.',
			schema: tableSchema,
			onFinish: ({ usage, object }) => {
				console.log('usage: ', usage)
			},
		})

		// update tableStream following schema structure
		for await (const partialObject of partialObjectStream) {
			tableStream.update({
				table: {
					description: partialObject.table?.description,
					sql: partialObject.table?.sql,
					map: partialObject.table?.map,
				},
			})
		}

		tableStream.done()
	})()

	return { object: tableStream.value }
}
