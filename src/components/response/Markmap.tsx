'use client'

import { useEffect, useRef } from 'react'
import { Markmap } from 'markmap-view'
import { Transformer } from 'markmap-lib'

const MarkmapView = ({
	markdown,
	setScript,
}: {
	markdown: string
	setScript: (data: string) => void
}) => {
	const svgRef = useRef<SVGSVGElement | null>(null)
	const transformer = new Transformer()

	const code = `
# SQL Schema Overview
## Tables
`

	useEffect(() => {
		if (svgRef.current !== null) {
			svgRef.current.innerHTML = ''

			const { root } = transformer.transform(markdown)
			const markmap = Markmap.create(svgRef.current)
			markmap.setData(root)
			void markmap.fit()
		}
	}, [markdown])

	useEffect(() => {
		setScript(code)
	}, [])

	if (markdown === '') {
		return
	}

	return (
		<svg
			ref={svgRef}
			style={{
				width: '700px',
				height: '700px',
				color: 'white',
			}}
		/>
	)
}

export default MarkmapView
