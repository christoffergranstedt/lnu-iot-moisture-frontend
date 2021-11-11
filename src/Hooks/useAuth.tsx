import React from 'react'

import { HTTPMethod } from '../Contants/HTTPMethod'
import { AppContext } from '../Contexts/App/AppContext'
import { UserOption } from '../Contexts/Reducers/UserReducer'
import { useRequest } from './useRequest'

interface AuthenticateData {
	user: {
		userId: number
		username: string
		accessToken: string
		accessTokenExpirationDate: number
		refreshToken: string
		telegramId: string
	}
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

	const signin = React.useCallback(async(username: string, password: string) => {
		const data: AuthenticateData = await sendRequest({ url: '/accounts/authenticate', method: HTTPMethod.POST, body: { username: username, password: password}, token: null })

		const userData = { ...data.user, isSignedIn: true }
		dispatch({ 
			type: UserOption.SetUser, 
			payload: userData
		})
    localStorage.setItem(LocalStorageName.UserData,JSON.stringify(userData))
  }, [dispatch, sendRequest])

	const signout = React.useCallback(async () => {
		if (!user.accessToken) return
    localStorage.removeItem(LocalStorageName.UserData)
		dispatch({ 
			type: UserOption.RemoveUser, 
			payload: { } 
		})
		await sendRequest({ url: '/accounts/signout', method: HTTPMethod.GET, token: user.accessToken })
  }, [dispatch, user, sendRequest])

	const refreshAccessToken = React.useCallback(async () => {
		if (!user.refreshToken) return
		const data : RefreshData = await sendRequest({ url: '/accounts/refresh', method: HTTPMethod.POST, token: user.refreshToken })
		dispatch({ 
			type: UserOption.UpdateTokens, 
			payload: data.user
		})
		localStorage.setItem(LocalStorageName.UserData,JSON.stringify({ ...user, ...data.user }))
  }, [dispatch, sendRequest, user])

	const hasAuthenticatedTelegram = React.useCallback(() => {
		return !!user.telegramId
  }, [user])

	React.useEffect(() => {
		if (user.isSignedIn) return

		const rawUserData = localStorage.getItem(LocalStorageName.UserData)
		if (!rawUserData) return
    const userDataTest = JSON.parse(rawUserData)

    if (userDataTest.accessToken && userDataTest.accessTokenExpirationDate > new Date().getTime()) {
			const userData = { ...userDataTest, isSignedIn: true }
			dispatch({ 
				type: UserOption.SetUser, 
				payload: userData
			})
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

