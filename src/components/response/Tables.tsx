'use client'

import { type FC } from 'react'
import { type TableProps } from '@/lib/types'
// import LoadingSkeleton from '../Skeleton'
import SyntaxHighlighter from 'react-syntax-highlighter'
// import { Prism as PrismSyntaxHighlighter } from 'react-syntax-highlighter'

// import { dracula } from 'react-syntax-highlighter/dist/cjs/styles/prism'
import { monokai } from 'react-syntax-highlighter/dist/cjs/styles/hljs'

export const dynamic = 'force-dynamic'
export const maxDuration = 30

const Tables: FC<TableProps> = ({ dataStream }) => {
	// if (pending === true) {
	// 	return (
	// 		<div className='flex w-1/2 items-center justify-center'>
	// 			<LoadingSkeleton />
	// 			<LoadingSkeleton />
	// 		</div>
	// 	)
	// }

	// if (error !== null) {
	// 	return (
	// 		<div className='flex flex-col items-center justify-center space-y-3 text-red-400'>
	// 			<span>Error en la petición! </span>
	// 			<span>Vuelve a intentarlo</span>
	// 		</div>
	// 	)
	// }

	if (dataStream !== '') {
		return (
			<div className='mt-4 flex w-full max-w-4xl items-center justify-center gap-x-3 rounded-md'>
				{/* <PrismSyntaxHighlighter language='sql' style={dracula} showLineNumbers> */}
				{/* </PrismSyntaxHighlighter> */}

				<SyntaxHighlighter language='sql' style={monokai} showLineNumbers>
					{dataStream}
				</SyntaxHighlighter>
			</div>
		)
	}
}

export default Tables
