'use client'

import { type FC } from 'react'
import { type TableProps } from '@/lib/types'
import { useDataStore } from '@/lib/store/data'
import LoadingSkeleton from '../Skeleton'
import Markdown from './Markdown'

export const dynamic = 'force-dynamic'
export const maxDuration = 30

const Tables: FC<TableProps> = ({ dataStream }) => {
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

	if (error !== undefined) {
		return (
			<div className='flex flex-col items-center justify-center space-y-3 text-red-400'>
				<span>Error en la petición! </span>
				<span>Vuelve a intentarlo</span>
			</div>
		)
	}

	if (dataStream !== '') {
		return (
			<div className='mt-4 flex flex-1 w-full items-center justify-center rounded-md'>
				<Markdown markdown={dataStream} />
			</div>
		)
	}

	return null
}

export default Tables
