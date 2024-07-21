'use client'

import { useEffect, useState } from 'react'
import mermaid from 'mermaid'

const Diagram = ({ diagramScript }: { diagramScript: string }) => {
	const [isClient, setIsClient] = useState(false)

	useEffect(() => {
		setIsClient(true)
	}, [])

	useEffect(() => {
		if (isClient) {
			mermaid.initialize({ startOnLoad: true, theme: 'dark' })
			mermaid.contentLoaded()
		}
	}, [isClient])

	if (!isClient) {
		return null
	}

	if (diagramScript === '') {
		return null
	}

	return (
		<section className='mermaid flex items-center justify-center text-3xl'>
			{diagramScript}
		</section>
	)
}

export default Diagram
