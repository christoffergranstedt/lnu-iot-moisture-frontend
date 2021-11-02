import {BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import Flash from './Components/Flash/Flash'
import Header from './Components/Header/Header'
import PrivateRoute from './Components/PrivateRoute/PrivateRoutes'
import { useAuth } from './Hooks/useAuth'
import SignInPage from './Pages/SignInPage/SignInPage'
import ThingPage from './Pages/ThingPage/ThingPage'
import ThingsPage from './Pages/ThingsPage/ThingsPage'

function App() {
	const { isSignedIn } = useAuth()

	let routes
	if (!isSignedIn()) {
		routes = (
			<Switch>
				<Route path='/auth/signin' exact><SignInPage/></Route>
				<Redirect to='/auth/signin'/>
			</Switch>
		)
	} else {
		routes = (
			<Switch>
				<PrivateRoute path='/things' exact={true} component={ThingsPage}/>
				<PrivateRoute path='/things/:thingId' exact={true} component={ThingPage}/>
				<Redirect to={`/things`}/>
			</Switch>
		)
	}

  return (
    <div className="App">
			<Router>
				<Header/>
				<Flash/>
				{routes}
			</Router>
    </div>
  )
}

export default App

