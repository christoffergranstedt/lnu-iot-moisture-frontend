import React from 'react'

import { UserInput, SignInForm } from '../../Components/SignInForm/SignInForm'
import { useAuth } from '../../Hooks/useAuth'
import { useFlash } from '../../Hooks/useFlash'
import { FlashMessageType } from '../../Contexts/Reducers/FlashReducer'
import { Heading } from '../../Components/Heading/Heading'

interface SignInProps {

}

export const SignInPage: React.FC<SignInProps> = (props) => {
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
		<>
    <Heading>sign in</Heading>
      <SignInForm onFormSubmit={onFormSubmit} isLoading={isLoading}/>
		</>
	)
}