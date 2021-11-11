import React from 'react'
import styled from 'styled-components'

import { UserInput, SignInForm } from '../../Components/SignInForm/SignInForm'
import { useAuth } from '../../Hooks/useAuth'
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

export const SignInPage: React.FC<SignInpageProps> = (props) => {
	const [isLoading] = React.useState<boolean>(false)
	const { signin } = useAuth()
	const { setFlash } = useFlash()

	const onFormSubmit = async (userInput: UserInput) => {
		try {
			await signin(userInput.username, userInput.password)
			setFlash({ messageType: FlashMessageType.Success, message: 'You have succescully signed in, welcome! '})
		} catch (error: any) {
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