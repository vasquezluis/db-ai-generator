'use client'

import { Button } from '@/components/ui/button'

import { infoToast, successToast } from '@/components/Loaders'
import { useEffect } from 'react'

export default function Home() {
	const handleClick = () => {
		successToast('Todo bien')
	}

	useEffect(() => {
		infoToast(
			'Porfavor ingresa una API Key de OpenAI válida para utilizar la aplicación.'
		)
	}, [])

	return (
		<main className='flex min-h-screen flex-col items-center justify-between p-24'>
			<Button onClick={handleClick}>Click</Button>

			<section></section>
		</main>
	)
}
