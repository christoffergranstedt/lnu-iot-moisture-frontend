import React from 'react'

import { useFlash } from '../../Hooks/useFlash'

interface FlashProps {

}

export const Flash: React.FC<FlashProps> = (props) => {
	const { flashMessage, flashMessageType, showFlash } = useFlash()


	if (showFlash && flashMessageType) {
		return (
			<div className={flashMessageType}>
				<p>{flashMessage}</p>
			</div>
		)
	} else {
		return null
	}

}