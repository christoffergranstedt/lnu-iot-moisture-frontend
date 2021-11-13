import React from 'react'
import { FlashMessageType } from '../../Contexts/Reducers/FlashReducer'

import { useFlash } from '../../Hooks/useFlash'

interface FlashProps {

}

export const Flash: React.FC<FlashProps> = (props) => {
	const { flashMessage, flashMessageType, showFlash } = useFlash()


	if (showFlash && flashMessageType) {
		return (
			<div className={`${flashMessageType === FlashMessageType.Error ? 'bg-red-800' : flashMessageType === FlashMessageType.Success ? 'bg-green-500' : 'bg-yellow-500'} z-10 absolute top-0 w-full text-center`}>
				<p>{flashMessage}</p>
			</div>
		)
	} else {
		return null
	}

}