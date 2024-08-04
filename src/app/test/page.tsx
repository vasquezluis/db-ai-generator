'use client'

import { useState, useEffect } from 'react'

// import MarkmapView from '@/components/response/Markmap'
import Tables from '@/components/response/Tables'
import Flow from '@/components/response/Flow'
import Test from '@/components/response/Test'

const code = `
# SQL Schema Overview
## Tables
`

const page = () => {
	const [markdown, setMarkdown] = useState('')

	useEffect(() => {
		setMarkdown(code)
	}, [])

	return (
		<main className='flex h-screen w-full flex-col items-center justify-center'>
			{/* <div>
				<textarea
					value={markdown}
					onChange={(e) => {
						setMarkdown(e.target.value)
					}}
				/>
			</div> */}
			{/* <button
				onClick={() => {
					setmermaidCode(mermaid2)
				}}
			>
				Change mermaid
			</button> */}
			<div></div>
			<div className='flex h-1/2 w-1/2 items-center justify-center'>
				<Tables dataStream={markdown} />
				{/* <MarkmapView markdown={markdown} /> */}
				<Flow />
				<Test />
			</div>
		</main>
	)
}

export default page
