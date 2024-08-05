import DialogModal from './Dialog'
import Link from 'next/link'

const NavBar = () => {
	return (
		<header>
			<nav className='bg-neutral-800 px-4 py-2.5 lg:px-6'>
				<div className='mx-auto flex max-w-screen-xl flex-wrap items-center justify-between'>
					<Link
						href='/'
						className='self-center whitespace-nowrap text-xl font-semibold text-white'
					>
						Structura
					</Link>
					<div className='flex items-center lg:order-2'>
						<DialogModal />
					</div>
				</div>
			</nav>
		</header>
	)
}

export default NavBar
