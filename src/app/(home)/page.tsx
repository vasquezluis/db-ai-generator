import Hero from '@/components/home/Hero'
import Code from '@/components/home/Code'
import Card from '@/components/home/Card'
import { data } from '@/lib/constants'

const page = () => {
	return (
		<main className='flex min-h-screen w-full flex-col items-center justify-start gap-y-7'>
			<div className='flex min-h-screen w-full flex-col items-center justify-center gap-y-5 md:w-10/12'>
				<div className='flex h-full w-full flex-col items-center justify-center gap-y-3'>
					<Hero />
					<Code />
				</div>
			</div>
			<div className='flex min-h-screen w-full flex-col items-center justify-center gap-y-5 bg-neutral-800 py-10'>
				<section className='flex w-full flex-col items-center justify-center'>
					<h2 className='text-2xl font-bold text-neutral-200'>
						Características de Structura
					</h2>
					<p className='text-neutral-200'>
						Listado de las caracteristicas de Structura
					</p>
				</section>
				<section className='flex w-full flex-wrap items-center justify-center gap-3 px-1 md:w-2/3 md:px-0'>
					{data.map(({ id, title, description }) => (
						<Card key={id} title={title} description={description} />
					))}
				</section>
			</div>
		</main>
	)
}

export default page
