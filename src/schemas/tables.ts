import { type DeepPartial } from 'ai'
import { z } from 'zod'

export const tableSchema = z.object({
	table: z.object({
		sql: z.string().describe('Estructura de todas las tablas en codigo sql.'),
		markdown: z.string().describe(`
			Explicacion de las tablas SQL generadas en formato Markdown.
			Cada explicacion de tabla deben incluir:
			1. The proposito de la tabla.
			2. Una descripcion de cada columna, incluyendo tipos de datos y constraints.
			3. Relaciones entre tablas (foreign keys).
			4. Cualquier indice relevante (indexes) o unique constraints.
			`),
		mermaid: z
			.string()
			.describe(
				'Estructura de todas las tablas en mermaid code for diagramas entidad-relacion (erDiagram).'
			),
	}),
})

export type PartialTable = DeepPartial<typeof tableSchema>
