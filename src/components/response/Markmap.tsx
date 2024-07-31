'use client'

import { useEffect, useRef } from 'react'
import { Markmap } from 'markmap-view'
import {Transformer} from 'markmap-lib'

const MarkmapView = ({ markdown }: { markdown: string }) => {
	const svgRef = useRef(null)
  const transformer = new Transformer()

	useEffect(() => {
		if (svgRef.current !== null) {
			const { root } = transformer.transform(markdown)
			const markmap = Markmap.create(svgRef.current)
			markmap.setData(root)
			void markmap.fit()

		}
	}, [markdown])

	return (
		<svg
			ref={svgRef}
			style={{
				width: '700px',
				height: '700px',
        color: 'white'
			}}
		/>
	)
}

export default MarkmapView
