// 'use client'

// import React, { useEffect, useRef } from 'react'
// import * as d3 from 'd3'
// import { sqlCode } from '@/lib/constants'

// const parseSQL = (sql) => {
// 	const tables = []
// 	const lines = sql.split('\n')
// 	let currentTable = null

// 	lines.forEach((line) => {
// 		line = line.trim()
// 		if (line.startsWith('CREATE TABLE')) {
// 			const tableName = line.split(' ')[2]
// 			currentTable = { name: tableName, columns: [] }
// 			tables.push(currentTable)
// 		} else if (line.startsWith(')')) {
// 			currentTable = null
// 		} else if (currentTable && line) {
// 			const column = line.split(' ')[0]
// 			currentTable.columns.push(column)
// 		}
// 	})

// 	return tables
// }

// const drawDiagram = (tables, ref) => {
// 	const svg = d3.select(ref.current)
// 	svg.selectAll('*').remove() // Clear any existing content

// 	const width = 800
// 	const height = 600

// 	const margin = { top: 20, right: 20, bottom: 20, left: 20 }
// 	const innerWidth = width - margin.left - margin.right
// 	const innerHeight = height - margin.top - margin.bottom

// 	const g = svg
// 		.attr('width', width)
// 		.attr('height', height)
// 		.append('g')
// 		.attr('transform', `translate(${margin.left},${margin.top})`)

// 	const tableGroup = g
// 		.selectAll('.table')
// 		.data(tables)
// 		.enter()
// 		.append('g')
// 		.attr('class', 'table')
// 		.attr('transform', (d, i) => `translate(${i * 200},${i * 100})`)

// 	tableGroup
// 		.append('rect')
// 		.attr('width', 150)
// 		.attr('height', (d) => d.columns.length * 20 + 30)
// 		.attr('fill', '#f3f3f3')
// 		.attr('stroke', '#333')

// 	tableGroup
// 		.append('text')
// 		.attr('x', 75)
// 		.attr('y', 20)
// 		.attr('text-anchor', 'middle')
// 		.attr('font-size', '14px')
// 		.attr('font-weight', 'bold')
// 		.text((d) => d.name)

// 	tableGroup
// 		.selectAll('.column')
// 		.data((d) => d.columns)
// 		.enter()
// 		.append('text')
// 		.attr('x', 10)
// 		.attr('y', (d, i) => 40 + i * 20)
// 		.attr('font-size', '12px')
// 		.text((d) => d)
// }

// const Diagram = () => {
// 	const ref = useRef()

// 	useEffect(() => {
// 		const tables = parseSQL(sqlCode)
// 		drawDiagram(tables, ref)
// 	}, [])

// 	return (
// 		<div className='flex items-center justify-center'>
// 			<svg ref={ref}></svg>
// 		</div>
// 	)
// }

// export default Diagram
