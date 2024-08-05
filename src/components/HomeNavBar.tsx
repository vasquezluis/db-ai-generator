import Image from 'next/image'
import Link from 'next/link'
import { Button } from './ui/button'
import GithubIcon from './icons/Github'

const HomeNavBar = () => {
	return (
		<header>
			<nav className='bg-neutral-800 px-4 py-2.5 lg:px-6'>
				<div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between'>
					<Link href='/' className='flex items-center gap-x-1 md:gap-x-3'>
						<Image
							src='/structura.svg'
							alt='Structura svg'
							width={32}
							height={32}
						/>
						<span className='self-center whitespace-nowrap text-xl font-semibold text-white'>
							Structura
						</span>
					</Link>
					<div className='flex items-center gap-x-3'>
						<Button title='Crear contenido'>
							<Link href='/create'>Crear</Link>
						</Button>
						<Link
							title='Repositorio'
							href='https://github.com/vasquezluis/structura'
							target='_blank'
							rel='noreferrer noopener'
						>
							<GithubIcon />
						</Link>
					</div>
				</div>
			</nav>
		</header>
	)
}

export default HomeNavBar
