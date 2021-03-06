import React from 'react'

import { AppContext } from '../Contexts/App/AppContext'
import { FlashOption, FlashMessageType } from '../Contexts/Reducers/FlashReducer'

interface FlashPayload {
	messageType: FlashMessageType
	message: React.ReactNode
}

export const useFlash = () => {
	
	const { state: { flash }, dispatch } = React.useContext(AppContext)

	const removeFlash = React.useCallback(() => {
		dispatch({ 
			type: FlashOption.RemoveFlash, 
			payload: {}
		})
  }, [dispatch])

	const setFlash = React.useCallback((flashPayload: FlashPayload, secondsWhileShowingFlash: number = 3) => {
		dispatch({ 
			type: FlashOption.SetFlash, 
			payload: flashPayload
		})

		setTimeout(() => {
			removeFlash()
		}, secondsWhileShowingFlash * 1000)
  }, [dispatch, removeFlash])
	
	return { flashMessage: flash.message, flashMessageType: flash.messageType, showFlash: flash.showFlash, setFlash, removeFlash }
}

