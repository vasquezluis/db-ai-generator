import { type DeepPartial } from 'ai'
import { z } from 'zod'

// const columnSchema = z.object({
// 	name: z.string(),
// 	type: z.string(),
// })

// const nodeSchema = z.object({
// 	id: z.string(),
// 	type: z.string().optional(),
// 	data: z.object({
// 		label: z.string(),
// 		columns: z.array(columnSchema),
// 	}),
// 	position: z.object({
// 		x: z.number(),
// 		y: z.number(),
// 	}),
// })

// const edgeSchema = z.object({
// 	id: z.string(),
// 	source: z.string(),
// 	target: z.string(),
// 	animated: z.boolean().optional(),
// 	style: z
// 		.object({
// 			stroke: z.string(),
// 		})
// 		.optional(),
// })

export const tableSchema = z.object({
	table: z.object({
		description: z.string().describe(`
			Explicacion en formato markdown del código SQL generado.
			La explicación debe incluir titulo y contenido de:
			1. Descripción de cada tabla
			2. Flujo de datos en las tablas generadas
			3. Posibles plataformas para alojar la base de datos.
			4. Información útil acerca del código SQL generado
			5. Posible partición de tablas si las tablas son grandes
			6. Consideraciones de seguridad al desplegar/usar la base de datos
			7. Manejo de datos no estructurados
			`),
		sql: z
			.string()
			.describe(
				'Estructura de todas las tablas en codigo SQL incluyendo la creación de la base de datos.'
			),
		map: z.string().describe(`
			Explicacion de las tablas SQL generadas en formato Markdown.
			Cada explicacion de tabla deben incluir:
			1. The proposito de la tabla.
			2. Una descripcion de cada columna, incluyendo tipos de datos y constraints.
			3. Relaciones entre tablas (foreign keys).
			4. Cualquier indice relevante (indexes) o unique constraints.
			`),

		// nodesSetup: z
		// 	.array(nodeSchema)
		// 	.describe('Configuracion de los nodos para ReactFlow basados en las estructuras SQL generadas.'),
		// edgesSetup: z
		// 	.array(edgeSchema)
		// 	.describe('Configuracion de los bordes para ReactFlow basados en las estructuras SQL generadas.'),
	}),
})

export type PartialTable = DeepPartial<typeof tableSchema>
