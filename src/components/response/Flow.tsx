import { useEffect } from 'react'
import ReactFlow, {
	ReactFlowProvider,
	useNodesState,
	useEdgesState,
} from 'reactflow'
import 'reactflow/dist/style.css'
import TableNode from './TableNode'
import '@/app/globals.css'

const edgesSetup = [
	{
		id: '1-2',
		source: '1',
		target: '2',
		type: 'smoothstep',
		animated: true,
		label: 'foreign key',
		style: { stroke: '#fff', strokeWidth: 2 },
	},
]

const nodesSetup = [
	{
		id: '1',
		data: {
			label: 'Users',
		},
		position: { x: 0, y: 0 },
		type: 'output',
	},
	{
		id: '2',
		data: {
			label: 'Orders',
		},
		position: { x: 300, y: 0 },
		type: 'output',
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
		<div
			style={{ height: '100%' }}
			className='h-1/2 w-1/2 rounded-md border border-neutral-500'
		>
				<ReactFlow nodes={nodes} edges={edges} nodeTypes={nodeTypes} />
		</div>
	)
}

export default Flow
