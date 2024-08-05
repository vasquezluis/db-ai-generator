import { Button } from '../ui/button'
import Link from 'next/link'

const Hero = () => {
	return (
		<section className='flex w-full flex-col items-center justify-center gap-y-3 pt-4 md:w-1/2 md:py-0'>
			<div className='w-full'>
				<h2 className='text-center text-3xl font-bold text-white md:text-start'>
					Inicia tus proyectos con
				</h2>
				<h1 className='text-center text-4xl font-extrabold text-white md:text-start'>
					Structura
				</h1>
			</div>
			<div className='w-full px-1 text-neutral-200 md:px-0'>
				Con Structura puedes iniciar la estructura de tu proyecto con la ayuda
				de la estructura SQL y AI SDK.
			</div>
			<p className='px-1 text-neutral-200 md:px-0'>
				Describe la idea de tu proyecto para que{' '}
				<span className='font-bold text-white'>Structura</span> genere la
				estructura inicial que necesitas, pudiendo ver la estructura generada en
				código SQL, un mapa mental de la base de datos y tablas generadas y una
				descripción general.
			</p>
			<div className='flex w-full items-center justify-center md:justify-start'>
				<Button title='Crear contenido'>
					<Link href='/create'>Empezar</Link>
				</Button>
			</div>
		</section>
	)
}

export default Hero
