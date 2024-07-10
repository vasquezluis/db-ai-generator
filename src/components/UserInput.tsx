'use client'

import { type ChangeEvent, type FormEvent, useState } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import { createResponse } from '@/lib/actions'
import HoverCardInfo from './HoverCard'
import { Skeleton } from '@/components/ui/skeleton'

const UserInput = () => {
	const [userInput, setUserInput] = useState('')
	const [isLoading, setIsLoading] = useState(false)
	const [error, setError] = useState(false)

	const handleChangeUserInput = (e: ChangeEvent<HTMLTextAreaElement>) => {
		setUserInput(e.target.value)
	}

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setIsLoading(true)

		const response = await createResponse(userInput)

		if (response.message === 'error') {
			setError(true)
		}

		if (response !== undefined) {
			setIsLoading(false)
		}

		setUserInput('')
	}

	if (error) {
		return (
			<div>
				<h2>Hay un error</h2>
			</div>
		)
	}

	return (
		<section className='flex w-full flex-col items-center justify-center gap-y-5'>
			<form
				className='flex w-1/3 flex-col items-center justify-center gap-y-2'
				// eslint-disable-next-line @typescript-eslint/no-misused-promises
				onSubmit={handleSubmit}
			>
				<section className='flex w-full items-center justify-end'>
					<div className='flex items-center justify-center rounded-full border border-sky-700 bg-neutral-700'>
						<HoverCardInfo />
					</div>
				</section>
				<section className='flex w-full flex-col items-end justify-center gap-y-2'>
					<Textarea
						className='h-36 max-h-36 w-full border border-neutral-500 bg-neutral-800 text-white outline-none'
						onChange={handleChangeUserInput}
						value={userInput}
						placeholder='Una biblioteca con el registro de los libros, el autor, el año, la imprenta, quién presta el libro, la hora del préstamo, quién lo prestó, con su nombre y carné de estudiante...'
					/>
					<Button
						type='submit'
						variant='outline'
						className='border-none bg-green-600 text-white outline-none hover:bg-green-500 hover:text-white'
					>
						Enviar
					</Button>
				</section>
			</form>

			{isLoading && (
				<div className='flex flex-col space-y-3'>
					<Skeleton className='h-[125px] w-[250px] rounded-xl' />
					<div className='space-y-2'>
						<Skeleton className='h-4 w-[250px]' />
						<Skeleton className='h-4 w-[200px]' />
					</div>
				</div>
			)}
		</section>
	)
}

export default UserInput
