import { ActionMap } from '../../Types/ActionMap'
import { FlashActions } from './FlashReducer'

export enum UserOption {
  SetUser = "SET_USER",
  RemoveUser = "REMOVE_USER",
	UpdateTokens = 'UPDATE_USER_TOKENS'
}

export type UserType = {
	isSignedIn: boolean
	userId: number | null
	username: string | null
	accessToken: string | null
	accessTokenExpirationDate: number | null
	refreshToken: string | null
	telegramId: string | null
}

type UserPayload = {
  [UserOption.SetUser]: {
		isSignedIn: boolean
		userId: number
		username: string
		accessToken: string
		accessTokenExpirationDate: number
		refreshToken: string
		telegramId: string
  };
  [UserOption.RemoveUser]: { };
  [UserOption.UpdateTokens]: { 
		accessToken: string
		accessTokenExpirationDate: number
		refreshToken: string
	};
}

export const initialUserState = {
	isSignedIn: false,
	userId: null,
	username: null,
	accessToken: null,
	accessTokenExpirationDate: null,
	refreshToken: null,
	telegramId: null
}

export type UserActions = ActionMap<UserPayload>[keyof ActionMap<UserPayload>]

export const userReducer = (state: UserType, action: UserActions | FlashActions) => {
  switch(action.type) {
    case UserOption.SetUser:
      return {
        ...state,
        isSignedIn: action.payload.isSignedIn,
        userId: action.payload.userId,
        username: action.payload.username,
        accessToken: action.payload.accessToken,
        accessTokenExpirationDate: action.payload.accessTokenExpirationDate,
				refreshToken: action.payload.refreshToken,
				telegramId: action.payload.telegramId
      }
    case UserOption.RemoveUser:                             
      return {
        ...state,
        isSignedIn: false,
        userId: null,
        username: null,
        accessToken: null,
        accessTokenExpirationDate: null,
				refreshToken: null,
				telegramId: null
      }
    case UserOption.UpdateTokens:                             
      return {
        ...state,
        accessToken: null,
        accessTokenExpirationDate: null,
				refreshToken: null
      }
    default:
      return state
  }
}
