import { ActionMap } from '../../Types/ActionMap'
import { UserActions } from './UserReducer'

export enum FlashOption {
  SetFlash = 'SET_FLASH',
  RemoveFlash = 'REMOVE_FLASH'
}

export enum FlashMessageType {
	Error = 'error',
	Warning = 'warning',
	Success = 'success'
}

export type FlashType = {
	messageType: FlashMessageType | null
	message: React.ReactNode | null
	showFlash: boolean
}

type FlashPayload = {
  [FlashOption.SetFlash]: {
		messageType: FlashMessageType
		message: React.ReactNode
  };
  [FlashOption.RemoveFlash]: { };
}

export const initialFlashState = {
	messageType: null,
	message: null,
	showFlash: false
}

export type FlashActions = ActionMap<FlashPayload>[keyof ActionMap<FlashPayload>]

export const flashReducer = (state: FlashType, action: FlashActions | UserActions) => {
  switch(action.type) {
    case FlashOption.SetFlash:
      return {
        ...state,
				messageType: action.payload.messageType,
				message: action.payload.message,
				showFlash: true
      }
    case FlashOption.RemoveFlash:                             
      return {
        ...state,
				messageType: null,
				message: null,
				showFlash: false
      }
    default:
      return state
  }
}
