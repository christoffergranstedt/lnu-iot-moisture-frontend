import React from 'react'
import styled from 'styled-components'

import { UserInput } from "./Components/SignInForm"
import SignInForm from "./Components/SignInForm"
import { useHistory } from 'react-router'
import { useRequest } from '../../Hooks/useRequest'
import { useAuth } from '../../Hooks/useAuth'
import { HTTPMethod } from '../../Utils/enums/HTTPMethod'
import { useFlash } from '../../Hooks/useFlash'
import { FlashMessageType } from '../../Contexts/Reducers/FlashReducer'

const StyledDiv = styled.div`

	h1 {
		text-align: center;
		font-size: 42px;
		font-weight: 100;
	}
`

interface SignInpageProps {

}

interface AuthenticateData {
	user: {
		userId: number;
		username: string;
		accessToken: string;
		accessTokenExpirationDate: number;
		refreshToken: string;
		telegramId: string;
	}
}

export const SignInPage: React.FC<SignInpageProps> = (props) => {
	const history = useHistory()
	const [isLoading] = React.useState<boolean>(false)
	const { sendRequest } = useRequest()
	const { signin } = useAuth()
	const { setFlash } = useFlash()

	const onFormSubmit = async (userInput: UserInput) => {
		try {
			const data : AuthenticateData = await sendRequest({ url: '/api/accounts/authenticate', method: HTTPMethod.POST, body: userInput, token: null })
			signin({ isSignedIn: true, ...data.user })
			setFlash({ messageType: FlashMessageType.Success, message: 'You have succescully signed in, welcome! '})
			history.push(`/dashboard/${data.user.userId}`)
		} catch (error) {
			setFlash({ messageType: FlashMessageType.Error, message: error.message })
		}
	}

	return (
		<StyledDiv>
			<h1>Sign In To Granstedt's Smart Thing Hub</h1>
			<SignInForm onFormSubmit={onFormSubmit} isLoading={isLoading}/>
		</StyledDiv>
	)
}

export default SignInPage