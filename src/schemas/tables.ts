import { type DeepPartial } from 'ai'
import { z } from 'zod'

export const tableSchema = z.object({
	table: z.object({
		script: z.string().describe('Structure of all tables in sql code.'),
	}),
})

export type PartialTable = DeepPartial<typeof tableSchema>
