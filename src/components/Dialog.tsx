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

const DialogModal = () => {
	return (
		<Dialog>
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
							href='https://help.openai.com/en/articles/4936850-where-do-i-find-my-openai-api-key'
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
							placeholder='sadfassssssssssssssssssssssssssssssssssssssssss'
						/>
					</div>
					<Button
						type='button'
						size='sm'
						variant='link'
						className='border border-neutral-700'
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
