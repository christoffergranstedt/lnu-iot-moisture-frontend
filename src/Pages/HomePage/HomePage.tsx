import React from 'react'

import { ReactComponent as Plant } from '../../Assets/Images/spider-plant.svg'

interface HomePageProps {

}

export const HomePage: React.FC<HomePageProps> = (props) => {
	return (
		<div className="container mx-auto flex flex-wrap place-content-center text-center items-center">
      <h1 className="text-7xl pb-12 w-full"><span className="text-3xl md:text-9xl">Granstedt's</span><br/> Smart Things Hub</h1>
      <Plant className="mx-auto mb-12 w-full"/>
		</div>
	)
}