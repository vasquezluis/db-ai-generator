'use client'

import {
	Dialog,
	DialogContent,
	DialogDescription,
	DialogHeader,
	DialogTitle,
	DialogTrigger,
} from '@/components/ui/dialog'
import { Input } from '@/components/ui/input'
import { Label } from '@/components/ui/label'
import { Button } from '@/components/ui/button'
import KeySVG from './icons/Key'
import CopySVG from './icons/CopySVG'

import { useApiKeyStore } from '@/lib/store/api'
import { type ChangeEvent, useState, useEffect } from 'react'
import { successToast } from './Loaders'

const DialogModal = () => {
	const [open, setOpen] = useState(false)
	const apiKey = useApiKeyStore((state) => state.apiKey)
	const setApiKey = useApiKeyStore((state) => state.setApiKey)

	const handleChangeApiKey = (event: ChangeEvent<HTMLInputElement>) => {
		const userInput = event.target.value.trim()
		setApiKey(userInput)
	}

	const handlePasteClipBoard = () => {
		window.navigator.clipboard
			.readText()
			.then((text) => {
				setApiKey(text.trim())
			})
			.catch((e) => {
				console.log('error: ', e)
			})
	}

	useEffect(() => {
		if (!open) {
			if (apiKey.trim() !== '') {
				successToast('Api Key guardada!')
			}
		}
	}, [open])

	return (
		<Dialog open={open} onOpenChange={setOpen}>
			<DialogTrigger asChild>
				<Button className='flex items-center justify-center gap-x-2 text-white'>
					API Key
					<KeySVG />
				</Button>
			</DialogTrigger>
			<DialogContent className='sm:max-w-md'>
				<DialogHeader>
					<DialogTitle className='text-white'>OpenAI API Key</DialogTitle>
					<DialogDescription className='text-neutral-500'>
						Por favor introduce una API Key válida de OpenAI
					</DialogDescription>
					<DialogDescription>
						Mas información:{' '}
						<a
							href='https://platform.openai.com/api-keys'
							target='_blank'
							rel='noreferrer noopener'
							className='font-bold'
						>
							API KEY
						</a>
					</DialogDescription>
				</DialogHeader>
				<div className='flex items-center space-x-2'>
					<div className='grid flex-1 gap-2'>
						<Label htmlFor='link' className='sr-only'>
							Link
						</Label>
						<Input
							id='link'
							className='text-white'
							value={apiKey}
							type='password'
							onChange={handleChangeApiKey}
							placeholder='sadfassssssssssssssssssssssssssssssssssssssssss'
						/>
					</div>
					<Button
						type='button'
						size='sm'
						variant='default'
						className='border border-neutral-700'
						onClick={handlePasteClipBoard}
						title='Pegar api key'
					>
						<CopySVG />
					</Button>
				</div>
			</DialogContent>
		</Dialog>
	)
}

export default DialogModal
