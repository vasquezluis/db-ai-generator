'use client'

import { useDataStore } from '@/lib/store/data'
import LoadingSkeleton from '../Skeleton'

const Tables = () => {
	const data = useDataStore((state) => state.data)
	const isLoading = useDataStore((state) => state.isLoading)
	const error = useDataStore((state) => state.error)

	if (isLoading) {
		return (
			<div className='flex w-1/2 items-center justify-center'>
				<LoadingSkeleton />
				<LoadingSkeleton />
			</div>
		)
	}

	if (error !== null) {
		return (
			<div className='flex flex-col items-center justify-center space-y-3 text-red-400'>
				<span>Error en la petición! </span>
				<span>Vuelve a intentarlo</span>
			</div>
		)
	}

	if (data !== undefined && data.length !== 0) {
		return <div className='text-white'>{JSON.stringify(data)}</div>
	}
}

export default Tables
