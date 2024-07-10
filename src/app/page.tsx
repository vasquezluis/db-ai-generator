import UserInput from '@/components/UserInput'

export default function Home() {
	return (
		<main className='flex min-h-screen w-full flex-col items-center justify-start pt-10'>
			<section className='flex w-full items-center justify-center'>
				<UserInput />
			</section>
		</main>
	)
}
