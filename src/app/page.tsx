import UserInput from '@/components/UserInput'
import Tables from '@/components/response/Tables'
import Diagram from '@/components/response/Diagram'

export default function Home() {
	return (
		<main className='flex min-h-screen w-full flex-col items-center justify-start pt-10'>
			<section className='flex w-full flex-col items-center justify-center gap-y-10'>
				<UserInput />

				<div className='flex items-center justify-center gap-x-3'>
					<Tables />
					<Diagram />
				</div>
			</section>
		</main>
	)
}
