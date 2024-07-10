import { Skeleton } from '@/components/ui/skeleton'

const LoadingSkeleton = () => {
	return (
		<div className='flex flex-1 items-center justify-center'>
			<div className='flex flex-col items-start justify-center space-y-3'>
				<Skeleton className='h-4 w-[200px]' />
				<Skeleton className='h-4 w-[150px]' />
				<Skeleton className='h-4 w-[150px]' />
				<Skeleton className='h-4 w-[150px]' />
			</div>
		</div>
	)
}

export default LoadingSkeleton
