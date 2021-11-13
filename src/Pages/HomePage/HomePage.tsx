import React from 'react'

import { UserInput, SignInForm } from '../../Components/SignInForm/SignInForm'
import { useAuth } from '../../Hooks/useAuth'
import { useFlash } from '../../Hooks/useFlash'
import { FlashMessageType } from '../../Contexts/Reducers/FlashReducer'
import { ReactComponent as Plant } from '../../Assets/Images/spider-plant.svg'

interface HomePageProps {

}

export const HomePage: React.FC<HomePageProps> = (props) => {
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
		<div className="container mx-auto flex flex-wrap place-content-center text-center items-center">
      <h1 className="text-7xl pb-12 w-full"><span className="text-9xl">Granstedt's</span><br/> Smart Things Hub</h1>
      <Plant className="mx-auto mb-12 w-full"/>
      <SignInForm onFormSubmit={onFormSubmit} isLoading={isLoading}/>
		</div>
	)
}