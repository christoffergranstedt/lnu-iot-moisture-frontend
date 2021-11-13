import {BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'

import { Flash } from './Components/Flash/Flash'
import { Header } from './Components/Header/Header'
import { useAuth } from './Hooks/useAuth'
import { HomePage } from './Pages/HomePage/HomePage'
import { ThingPage } from './Pages/ThingPage/ThingPage'
import { ThingsPage } from './Pages/ThingsPage/ThingsPage'

function App() {
	const { isSignedIn } = useAuth()

	let routes
	if (!isSignedIn()) {
		routes = (
			<Routes>
				<Route path='/' element={<HomePage/>}></Route>
				<Route path="*" element={<Navigate replace to="/" />} />
			</Routes>
		)
	} else {
		routes = (
			<Routes>	
				<Route path='/things' element={<ThingsPage/>}/>
				<Route path='/things/:thingId' element={<ThingPage/>}/>
				<Route path="*" element={<Navigate replace to="/things" />} />
			</Routes>
		)
	}

  return (
    <div className="h-screen text-white">
			<Router>
				<Header className="bg-gradient-to-r from-primary to-primaryHover h-1/6"/>
				<Flash/>
				<main className="bg-gradient-to-r from-primary to-primaryHover h-5/6">
					{routes}	
				</main>
			</Router>
    </div>
  )
}

export default App

