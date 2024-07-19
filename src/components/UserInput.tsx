'use client'

import { type FC } from 'react'
import { Button } from '@/components/ui/button'
import { Textarea } from '@/components/ui/textarea'
import HoverCardInfo from './HoverCard'
import { Form, Formik } from 'formik'

const initialValues = { userInput: '' }

interface Props {
	onSubmit: any
}

const UserInput: FC<Props> = ({ onSubmit }) => {
	return (
		<section className='flex w-full flex-col items-center justify-center gap-y-5'>
			<Formik initialValues={initialValues} onSubmit={onSubmit}>
				{({ values, isSubmitting, handleChange }) => (
					<Form className='flex w-1/3 flex-col items-center justify-center gap-y-2'>
						<section className='flex w-full items-center justify-end'>
							<div className='flex items-center justify-center rounded-full border border-sky-700 bg-neutral-700'>
								<HoverCardInfo />
							</div>
						</section>
						<section className='flex w-full flex-col items-end justify-center gap-y-2'>
							<Textarea
								className='h-36 max-h-36 w-full border border-neutral-500 bg-neutral-800 text-white outline-none'
								onChange={handleChange}
								name='userInput'
								value={values.userInput}
								placeholder='Una biblioteca con el registro de los libros, el autor, el año, la imprenta, quién presta el libro, la hora del préstamo, quién lo prestó, con su nombre y carné de estudiante...'
							/>
							<Button
								type='submit'
								variant='outline'
								disabled={isSubmitting}
								className='border-none bg-green-600 text-white outline-none hover:bg-green-500 hover:text-white'
							>
								{isSubmitting ? 'Generando...' : 'Generar'}
							</Button>
						</section>
					</Form>
				)}
			</Formik>
		</section>
	)
}

export default UserInput
