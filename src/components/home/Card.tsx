import ToolIcon from '../icons/Tool'

const Card = ({
	title,
	description,
}: {
	title: string
	description: string
}) => {
	return (
		<div className='w-full max-w-full gap-y-4 rounded-lg border border-neutral-800 bg-neutral-700 p-3 shadow-md shadow-neutral-900 md:max-w-xs'>
			<ToolIcon />
			<h5 className='tracking-tighttext-white text-2xl font-semibold text-neutral-200'>
				{title}
			</h5>
			<p className='font-normal text-neutral-400'>{description}</p>
		</div>
	)
}

export default Card
