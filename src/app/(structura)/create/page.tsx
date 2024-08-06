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
import MarkmapView from '@/components/response/Markmap'
import Markdown from '@/components/response/Markdown'

export const dynamic = 'force-dynamic'
export const maxDuration = 30

const tabList = {
	TAB1: 'script',
	TAB2: 'map',
}

export default function Home() {
	const [sqlScript, setSqlScript] = useState<string>('')
	const [mapScript, setMapScript] = useState<string>('')
	const [descriptionScript, setDescriptionScript] = useState<string>('')
	const [tabSelected, setTabSelected] = useState(tabList.TAB1)

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
								setDescriptionScript(partialObject.table?.description ?? '')
								setSqlScript(partialObject.table?.sql ?? '')
								setMapScript(partialObject.table?.map ?? '')
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

				<div className='flex w-full flex-col items-start justify-center gap-x-1 md:w-3/4 md:flex-row'>
					<div className='flex w-full flex-1 flex-col'>
						{descriptionScript !== '' && (
							<div className='w-full rounded-md bg-neutral-900 py-3 text-center text-white'>
								DESCRIPCIÓN
							</div>
						)}
						<Markdown markdown={descriptionScript} />
					</div>
					<div className='flex w-full flex-1 flex-col'>
						{sqlScript !== '' && mapScript !== '' && (
							<div className='flex w-full'>
								<button
									className='flex w-full flex-1 items-center justify-center rounded-bl-md rounded-tl-md bg-neutral-800 py-3 text-white hover:bg-neutral-900'
									onClick={() => {
										setTabSelected(tabList.TAB1)
									}}
								>
									CÓDIGO
								</button>
								<button
									className='flex w-full flex-1 items-center justify-center rounded-br-md rounded-tr-md bg-neutral-700 py-3 text-white hover:bg-neutral-800'
									onClick={() => {
										setTabSelected(tabList.TAB2)
									}}
								>
									MAPA
								</button>
							</div>
						)}
						<div>
							{tabSelected === tabList.TAB1 ? (
								<Tables dataStream={sqlScript} />
							) : (
								<MarkmapView markdown={mapScript} />
							)}
						</div>
					</div>
				</div>
			</section>
		</main>
	)
}
