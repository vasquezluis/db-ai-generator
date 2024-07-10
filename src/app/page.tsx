import UserInput from '@/components/UserInput'
import Tables from '@/components/response/Tables'

export default function Home() {
	return (
		<main className='flex min-h-screen w-full flex-col items-center justify-start pt-10'>
			<section className='flex w-full flex-col items-center justify-center gap-y-10'>
				<UserInput />

				<Tables />
			</section>
		</main>
	)
}
