import {BrowserRouter as Router, Navigate, Route, Routes } from 'react-router-dom'

import { Flash } from './Components/Flash/Flash'
import { Header } from './Components/Header/Header'
import { useAuth } from './Hooks/useAuth'
import { HomePage } from './Pages/HomePage/HomePage'
import { SignInPage } from './Pages/SignInPage/SignInPage'
import { ThingPage } from './Pages/ThingPage/ThingPage'
import { ThingsPage } from './Pages/ThingsPage/ThingsPage'

function App() {
	const { isSignedIn } = useAuth()

	let routes
	if (!isSignedIn()) {
		routes = (
			<Routes>
				<Route path='/' element={<HomePage/>}></Route>
				<Route path='/auth/signin' element={<SignInPage/>}></Route>
				<Route path="*" element={<Navigate replace to="/" />} />
			</Routes>
		)
	} else {
		routes = (
			<Routes>
				<Route path='/' element={<HomePage/>}></Route>
				<Route path='/things' element={<ThingsPage/>}/>
				<Route path='/things/:thingId' element={<ThingPage/>}/>
				<Route path="*" element={<Navigate replace to="/things" />} />
			</Routes>
		)
	}

  return (
    <div className="flex flex-col h-screen text-white">
			<Router>
				<Header className="bg-primaryHover flex-grow-0 h-16 lg:h-32 flex-shrink-0"/>
				<Flash/>
				<main className="bg-gradient-to-t from-primary to-primaryHover mx-auto flex-grow w-full">
					{routes}	
				</main>
			</Router>
    </div>
  )
}

export default App

