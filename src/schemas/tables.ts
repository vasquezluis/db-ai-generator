import { type DeepPartial } from 'ai'
import { z } from 'zod'

export const tableSchema = z.object({
	table: z.object({
		script: z.string().describe('Structure of all tables in sql code.'),
		mermaid: z
			.string()
			.describe(
				'Structure of all tables in mermaid code for entiry-relationship diagram (erDiagram).'
			),
	}),
})

export type PartialTable = DeepPartial<typeof tableSchema>
