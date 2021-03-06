import React from 'react'
import { useNavigate } from 'react-router-dom'

import { ReactComponent as PlantImage } from '../../Assets/Images/spider-plant.svg'
import { ReactComponent as InternetOfThingsImage } from '../../Assets/Images/internet-of-things.svg'
import { ReactComponent as TelegramImage } from '../../Assets/Images/telegram.svg'
import { ReactComponent as WateringImage } from '../../Assets/Images/watering.svg'
import { useAuth } from '../../Hooks/useAuth'
import { InfoBox } from '../../InfoBox/InfoBox'

interface HomePageProps {

}

export const HomePage: React.FC<HomePageProps> = (props) => {
	const navigate = useNavigate()
	const { isSignedIn } = useAuth()
	
	return (
		<div className="h-full">
			<div className="mx-auto flex flex-wrap place-content-center text-center items-center py-32 bg-gradient-to-t from-primary to-primary-hover">
				<div className="container">
					<h1 className="text-7xl pb-12 w-full"><span className="text-3xl md:text-9xl text-secondary">Granstedt's</span><br/> Smart Things Hub</h1>
				</div>
			</div>
			<div className="bg-sixth py-32">
				<div className="container mx-auto flex flex-wrap ">
					<div className="w-full md:flex-1 md:w-auto self-center text-center">
						<h3 className="text-2xl sm:text-3xl inline-block mb-4 sm:mb-8 p-2">Invoke actions, subscribe to events and see property values for your things</h3>
						{!isSignedIn() && <button className="bg-none border-2 border-secondary px-8 py-2 rounded-lg mt-12 transform transition duration-500 hover:scale-110 hover:bg-secondary hover:text-gray-800 text-xl" onClick={() => navigate({ pathname: '/auth/signin' })}>sign in</button>}
					</div>
					<div className="flex-1 mt-8 md:mt-0">
						<PlantImage className="mx-auto m-8 mb-16 w-[300px] h-[300px] md:w-[400px] md:h-[400px]"/>
					</div>
				</div>

			</div>
			<div className="bg-fourth py-32 flex flex-wrap justify-center text-gray-800">
				<InfoBox className="m-4 w-full xl:w-auto">
					<InternetOfThingsImage className="mx-auto m-2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]"/>
					<h5 className="text-xl">Connect to your things from anywhere</h5>
				</InfoBox>
				<InfoBox className="m-4 w-full xl:w-auto">
					<TelegramImage className="mx-auto m-2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]"/>
					<h5 className="text-xl">Receive notifications on Telegram when events related to your things occurs</h5>
				</InfoBox>
				<InfoBox className="m-4 w-full xl:w-auto">
					<WateringImage className="mx-auto m-2 w-[200px] h-[200px] sm:w-[300px] sm:h-[300px]"/>
					<h5 className="text-xl">Monitor your home</h5>
				</InfoBox>
			</div>
		</div>
	)
}