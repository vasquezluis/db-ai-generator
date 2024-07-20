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
				'Generas estructuras MySQL que ayuden al usuario con su idea de proyecto el código generado debe cumplir con la estructura para ser usado junto a react-markdown y react-syntax-highlighter, incluye comentarios si es necesario.',
			schema: tableSchema,
		})

		for await (const partialObject of partialObjectStream) {
			tableStream.update({
				table: {
					script: partialObject.table?.script,
				},
			})
		}

		tableStream.done()
	})()

	return { object: tableStream.value }
}
