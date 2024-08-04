interface Data {
	data: {
		label: string
		columns: Array<{
			name: string
			type: string
		}>
	}
}

const TableNode = ({ data }: Data) => {
	return (
		<div>
			<div className='rounded-tl-md rounded-tr-md border-b-neutral-700 bg-sky-500 p-1 text-center font-bold text-white'>
				<strong>{data.label}</strong>
			</div>
			<ul>
				{data.columns.map((col, index) => (
					<li
						key={index}
						className='p-1 last:rounded-bl-md last:rounded-br-md odd:bg-neutral-500 even:bg-neutral-700'
					>
						<span className='text-left text-neutral-200'>{col.name}</span>{' '}
						<span className='text-right text-neutral-400'>({col.type})</span>
					</li>
				))}
			</ul>
		</div>
	)
}

export default TableNode
