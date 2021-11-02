import React from 'react'
import { Route, Redirect } from 'react-router-dom'

import { useAuth } from '../../Hooks/useAuth'

interface PrivateRouteProps {
	component: React.ComponentType<any>
	path: string
	rest?: any
	exact: boolean
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ component: Component, path, exact, ...rest }) => {
	const { isSignedIn } = useAuth()

	return (
		<Route {...rest} render={props => (
				isSignedIn() ?
						<Component path={path} exact={exact} {...props} />
				: <Redirect to='/auth/signin' />
		)} />
	)
}