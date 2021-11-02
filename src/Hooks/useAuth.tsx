import React from 'react'

import { AppContext } from '../Contexts/App/AppContext'
import { UserOption } from '../Contexts/Reducers/UserReducer'
import { HTTPMethod } from '../Utils/enums/HTTPMethod'
import { useRequest } from './useRequest'

interface UserPayload {
	isSignedIn: boolean
	userId: number
	username: string
	accessToken: string
	accessTokenExpirationDate: number
	refreshToken: string
	telegramId: string
}

interface RefreshData {
	user: {
		accessToken: string
		accessTokenExpirationDate: number
		refreshToken: string
	}
}

enum LocalStorageName {
	UserData = 'userData'
}

export const useAuth = () => {
	
	const { state: { user }, dispatch } = React.useContext(AppContext)
	const { sendRequest } = useRequest()

	const isSignedIn = React.useCallback(() => {
		if (user.isSignedIn) return true

		const rawUserData = localStorage.getItem(LocalStorageName.UserData)
		if (!rawUserData) return false
    const userData = JSON.parse(rawUserData)

    if (userData.accessToken && userData.accessTokenExpirationDate > new Date().getTime()) {
			return true
    }
		return false
  }, [user])

	const signin = React.useCallback((userPayload: UserPayload) => {
		dispatch({ 
			type: UserOption.SetUser, 
			payload: userPayload
		})
    localStorage.setItem(LocalStorageName.UserData,JSON.stringify(userPayload))
  }, [dispatch])

	const signout = React.useCallback(async () => {
		if (!user.accessToken) return
    localStorage.removeItem(LocalStorageName.UserData)
		dispatch({ 
			type: UserOption.RemoveUser, 
			payload: { } 
		})
		await sendRequest({ url: '/api/accounts/signout', method: HTTPMethod.GET, token: user.accessToken })
  }, [dispatch, user, sendRequest])

	const refreshAccessToken = React.useCallback(async () => {
		if (!user.refreshToken) return
		const data : RefreshData = await sendRequest({ url: '/api/accounts/refresh', method: HTTPMethod.POST, token: user.refreshToken })
		dispatch({ 
			type: UserOption.UpdateTokens, 
			payload: data.user
		})
		localStorage.setItem(LocalStorageName.UserData,JSON.stringify({ ...user, ...data.user }))
  }, [dispatch, sendRequest, user])

	const hasAuthenticatedTelegram = React.useCallback(() => {
		console.log(!!user.telegramId)
		return !!user.telegramId
  }, [user])

	React.useEffect(() => {
		if (user.isSignedIn) return

		const rawUserData = localStorage.getItem(LocalStorageName.UserData)
		if (!rawUserData) return
    const userData = JSON.parse(rawUserData)

    if (userData.accessToken && userData.accessTokenExpirationDate > new Date().getTime()) {
			signin({ isSignedIn: true, ...userData})
    }
  }, [user, dispatch, signin])

  React.useEffect(() => {
		if (!user.isSignedIn || !user.accessTokenExpirationDate) return

    let signoutTimer
    if (user.accessToken && user.accessTokenExpirationDate < new Date().getTime()) {
      const remainingTime = user.accessTokenExpirationDate - new Date().getTime()
      signoutTimer = setTimeout(refreshAccessToken, remainingTime)
    } else {
      clearTimeout(signoutTimer)
    }
  }, [user, signout, refreshAccessToken])

	return { user, signin, signout, isSignedIn, hasAuthenticatedTelegram }
}

