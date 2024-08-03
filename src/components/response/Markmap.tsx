'use client'

import { useEffect, useRef } from 'react'
import { Markmap } from 'markmap-view'
import { Transformer } from 'markmap-lib'

const MarkmapView = ({ markdown }: { markdown: string }) => {
	const svgRef = useRef<SVGSVGElement | null>(null)
	const transformer = new Transformer()

	useEffect(() => {
		if (svgRef.current !== null) {
			svgRef.current.innerHTML = ''

			const { root } = transformer.transform(markdown)
			const markmap = Markmap.create(svgRef.current)
			markmap.setData(root)
			void markmap.fit()
		}
	}, [markdown])

	if (markdown === '') {
		return
	}

	return (
		<div className='flex flex-1 justify-center items-center rounded-md border border-neutral-500'>
			<svg
				ref={svgRef}
				style={{
					width: '100%',
					height: '500px',
					maxHeight: '100%',
					color: 'white',
				}}
			/>
		</div>
	)
}

export default MarkmapView
