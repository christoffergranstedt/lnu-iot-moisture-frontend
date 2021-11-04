import React, { Dispatch } from 'react'

import { FlashActions, flashReducer, FlashType, initialFlashState } from '../Reducers/FlashReducer'
import { userReducer, UserActions, UserType,	initialUserState } from '../Reducers/UserReducer'

type InitialStateType = {
  user: UserType;
	flash: FlashType;
}

const initialState = {
  user: initialUserState,
	flash: initialFlashState
}

export const AppContext = React.createContext<{
  state: InitialStateType
  dispatch: Dispatch<UserActions | FlashActions>
}>({
  state: initialState,
  dispatch: () => null
})

const mainReducer = (
  { user, flash }: InitialStateType,
  action: UserActions | FlashActions
) => ({
  user: userReducer(user, action),
	flash: flashReducer(flash, action)
})

export const AppProvider: React.FC = ({ children }) => {
  const [state, dispatch] = React.useReducer(mainReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}