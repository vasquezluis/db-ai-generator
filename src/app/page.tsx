'use client'

import { useState } from 'react'
import UserInput from '@/components/UserInput'
import { readStreamableValue } from 'ai/rsc'
import { useApiKeyStore } from '@/lib/store/api'
import { errorToast, warningToast } from '@/components/Loaders'
import { type SubmitProps } from '@/lib/types'
import { generateTableResponse } from '@/lib/actions'
import Tables from '@/components/response/Tables'

export const dynamic = 'force-dynamic'
export const maxDuration = 30

export default function Home() {
	const [tableGeneration, setTableGeneration] = useState<string>('')
	const apiKey = useApiKeyStore((state) => state.apiKey)

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

					for await (const partialObject of readStreamableValue(object)) {
						if (partialObject !== undefined) {
							setTableGeneration(
								JSON.stringify(partialObject.table?.script, null, 2)
							)
						}
					}
				} catch (error) {
					console.log('error: ', error)
					errorToast('Ha ocurrido un error')
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
					<Tables dataStream={tableGeneration} />
				</div>
			</section>
		</main>
	)
}
