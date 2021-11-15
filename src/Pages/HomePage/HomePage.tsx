import React from 'react'
import { Link } from 'react-router-dom'

import { ReactComponent as Plant } from '../../Assets/Images/spider-plant.svg'

interface HomePageProps {

}

export const HomePage: React.FC<HomePageProps> = (props) => {
	return (
		<div className="container mx-auto flex flex-wrap place-content-center text-center items-center">
      <h1 className="text-7xl pb-12 w-full"><span className="text-3xl md:text-9xl text-secondary">Granstedt's</span><br/> Smart Things Hub</h1>
			<div className="w-full">
      <	Plant className="mx-auto m-8 w-full" style={{ width: 300, height: 300}}/>
			</div>
			<Link className="bg-third text-gray-800 px-6 py-2 rounded-lg mt-12 transform transition duration-500 hover:scale-110" to="/auth/signin">sign in</Link>
		</div>
	)
}