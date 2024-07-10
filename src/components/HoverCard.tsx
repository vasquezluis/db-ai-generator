'use client'

import {
	HoverCard,
	HoverCardContent,
	HoverCardTrigger,
} from '@/components/ui/hover-card'

import ExclamationSVG from './icons/ExclamationSVG'

const HoverCardInfo = () => {
	return (
		<HoverCard>
			<HoverCardTrigger>
				<ExclamationSVG />
			</HoverCardTrigger>
			<HoverCardContent className='flex flex-col gap-y-2 border border-sky-700 bg-neutral-700'>
				<span className='text-white'>
					Escribe la idea de tu proyecto y <strong>Structura</strong> creará la
					estructura de la base de datos por tí.
				</span>
				<span className='text-neutral-400'>
					Ej: Mi proyecto trata sobre un sistema de parking donde cada
					estacionamiento puede tener varios carros y cada carro...
				</span>
			</HoverCardContent>
		</HoverCard>
	)
}

export default HoverCardInfo
