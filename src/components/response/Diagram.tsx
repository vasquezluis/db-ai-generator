'use client'

import { useEffect, useState, useRef } from 'react'
import mermaid from 'mermaid'

const Diagram = ({ diagramScript }: { diagramScript: string }) => {
	const [isClient, setIsClient] = useState(false)
	const diagramRef = useRef<HTMLDivElement>(null)

	useEffect(() => {
		setIsClient(true)
	}, [])

	useEffect(() => {
		if (isClient) {
			mermaid.initialize({ startOnLoad: true, theme: 'dark' })
		}
	}, [isClient])

	useEffect(() => {
		if (isClient && diagramScript) {
			const renderDiagram = async () => {
				if (diagramRef.current) {
					diagramRef.current.innerHTML = ''
					const { svg } = await mermaid.render('mermaid-diagram', diagramScript)
					diagramRef.current.innerHTML = svg
				}
			}
		}
	}, [isClient, diagramScript])

	if (!isClient) {
		return null
	}

	if (diagramScript === '') {
		return null
	}

	return (
		<section
			ref={diagramRef}
			className='mermaid flex items-center justify-center text-3xl'
		/>
	)
}

export default Diagram
