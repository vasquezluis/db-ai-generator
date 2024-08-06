'use client'

import { type FC } from 'react'
import { type TableProps } from '@/lib/types'
import Syntax from './Syntax'

export const dynamic = 'force-dynamic'
export const maxDuration = 30

const Tables: FC<TableProps> = ({ dataStream }) => {
	if (dataStream !== '') {
		return (
			<div className='mt-4 flex w-full flex-1 items-center justify-center rounded-md'>
				<Syntax script={dataStream} />
			</div>
		)
	}

	return null
}

export default Tables
