'use client'

import { useState, useEffect } from 'react'
import Syntax from '../response/Syntax'
import { script } from '@/lib/constants'

const StremingText = ({ text, speed }: { text: string; speed: number }) => {
	const [displayedText, setDisplayedText] = useState('')
	const [index, setIndex] = useState(0)

	useEffect(() => {
		if (index < text.length) {
			const timer = setTimeout(() => {
				setDisplayedText(displayedText + text[index])
				setIndex(index + 1)
			}, speed)

			return () => {
				clearTimeout(timer)
			}
		}
	}, [index, text, speed, displayedText])

	return <Syntax script={displayedText} />
}

const Code = () => {
	const speed = 1

	return (
		<section className='flex w-full flex-col items-center justify-center rounded-md bg-neutral-800 md:w-2/3 md:flex-row'>
			<div className='flex w-full items-center justify-center rounded-md px-2 py-5 text-neutral-200 md:w-1/3 md:p-4 md:px-3 md:py-1'>
				Mi proyecto trata sobre una universidad que cuenta con una biblioteca,
				la biblioteca cuenta con diferentes tipos de libros, con datos como el
				titulo, el autor, el género, el año de publicación y adicionalmente, un
				contador de puntos, ya que los estudiantes pueden prestar los libros y
				ganar puntos para canjear. Lo estudiantes deben tener la siguiente
				información: nombre, apellido, correo institucional y puntos acumulados.
			</div>
			<div className='flex w-full items-center justify-center md:w-2/3'>
				<StremingText text={script} speed={speed} />
			</div>
		</section>
	)
}

export default Code
