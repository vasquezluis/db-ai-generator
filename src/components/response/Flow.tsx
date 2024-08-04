import { useEffect } from 'react'
import ReactFlow, { useNodesState, useEdgesState } from 'reactflow'
import 'reactflow/dist/style.css'
import TableNode from './TableNode'
import '@/app/globals.css'

const edgesSetup = [
	{
		id: 'el-2',
		source: '1',
		target: '2',
		animated: false,
		style: { stroke: '#fff' },
	},
]

const nodesSetup = [
	{
		id: '1',
		type: 'tableNode',
		data: {
			label: 'Users',
			columns: [
				{ name: 'id', type: 'int' },
				{ name: 'name', type: 'varchar' },
				{ name: 'email', type: 'varchar' },
			],
		},
		position: { x: 0, y: 0 },
	},
	{
		id: '2',
		data: {
			label: 'Orders',
			columns: [
				{ name: 'order_id', type: 'int' },
				{ name: 'user_id', type: 'integer' },
				{ name: 'amount', type: 'decimal' },
			],
		},
		position: { x: 150, y: 0 },
		type: 'tableNode',
	},
	{
		id: '3',
		data: {
			label: 'User_Orders',
			columns: [
				{ name: 'order_id', type: 'int' },
				{ name: 'user_id', type: 'int' },
				{ name: 'amount', type: 'decimal' },
			],
		},
		position: { x: 150, y: 150 },
		type: 'tableNode',
	},
]

const nodeTypes = {
	tableNode: TableNode,
}

function Flow() {
	const [nodes, setNodes] = useNodesState([])
	const [edges, setEdges] = useEdgesState([])

	useEffect(() => {
		setNodes(nodesSetup)

		setEdges(edgesSetup)
	}, [])

	return (
		<div className='h-1/2 w-1/2 rounded-md border border-neutral-500'>
			<ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} />
		</div>
	)
}

export default Flow
