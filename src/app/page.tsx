'use client'

import { useState } from 'react'
import UserInput from '@/components/UserInput'
import { readStreamableValue } from 'ai/rsc'
import { useApiKeyStore } from '@/lib/store/api'
import { errorToast, warningToast } from '@/components/Loaders'
import { type SubmitProps } from '@/lib/types'
import { generateTableResponse } from '@/lib/actions'
import { useDataStore } from '@/lib/store/data'
import Tables from '@/components/response/Tables'
// import Diagram from '@/components/response/Diagram'
import MarkmapView from '@/components/response/Markmap'

export const dynamic = 'force-dynamic'
export const maxDuration = 30

export default function Home() {
	const [scriptGeneration, setScriptGeneration] = useState<string>('')
	// const [mermaidGeneration, setMermaidGeneration] = useState<string>('')
	const apiKey = useApiKeyStore((state) => state.apiKey)
	// const setIsLoading = useDataStore((state) => state.setIsLoading)
	const setError = useDataStore((state) => state.setError)

	const onSubmit: SubmitProps = async (values, actions) => {
		if (apiKey !== '') {
			if (values.userInput.trim() === '') {
				warningToast('Por favor escribe tu prompt')
			} else {
				try {
					const { object } = await generateTableResponse({
						context: values.userInput,
						key: apiKey,
					})

					if (object !== undefined) {
						for await (const partialObject of readStreamableValue(object)) {
							if (partialObject !== undefined) {
								setScriptGeneration(partialObject.table?.script ?? '')
								// setMermaidGeneration(partialObject.table?.mermaid ?? '')
							}
						}
					}

					actions.resetForm()
				} catch (error) {
					setError('Ha ocurrido un error, vuelve a intentarlo.')
					errorToast('Ha ocurrido un error, vuelve a intentarlo.')
				}
			}
		} else {
			errorToast('OpenAI Api Key no asignada')
		}
	}

	return (
		<main className='flex min-h-screen w-full flex-col items-center justify-start pt-10'>
			<section className='flex w-full flex-col items-center justify-center gap-y-10'>
				<UserInput onSubmit={onSubmit} />

				<div className='flex items-center justify-center gap-x-3'>
					<Tables dataStream={scriptGeneration} />
					{/* <Diagram diagramScript={mermaidGeneration} /> */}
					<MarkmapView
						markdown={scriptGeneration}
						setScript={setScriptGeneration}
					/>
				</div>
			</section>
		</main>
	)
}
