'use client'

import { useState, useEffect } from 'react'

import MarkmapView from '@/components/response/Markmap'

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
		<main className='flex h-screen w-full items-center justify-center'>
			<div>
				<textarea
					value={markdown}
					onChange={(e) => {
						setMarkdown(e.target.value)
					}}
				/>
			</div>
			<div className='border border-pink-700'>
				<MarkmapView markdown={markdown} />
			</div>
		</main>
	)
}

export default page
