import { type DeepPartial } from 'ai'
import { z } from 'zod'

export const tableSchema = z.object({
	table: z.object({
		sql: z.string().describe('Structure of all tables in sql code.'),
		markdown: z.string().describe(`
			Explanation of the SQL tables generated in Markdown format. 
			Each table explanation should include:
			1. The purpose of the table.
			2. A description of each column, including data types and constraints.
			3. Relationships between tables (foreign keys).
			4. Any relevant indexes or unique constraints.
			`),
		mermaid: z
			.string()
			.describe(
				'Structure of all tables in mermaid code for entiry-relationship diagram (erDiagram).'
			),
	}),
})

export type PartialTable = DeepPartial<typeof tableSchema>
