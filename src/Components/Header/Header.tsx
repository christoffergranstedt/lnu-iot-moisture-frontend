import React from 'react'
import { useNavigate  } from 'react-router'

import { useAuth } from '../../Hooks/useAuth'
import { useFlash } from '../../Hooks/useFlash'
import { FlashMessageType } from '../../Contexts/Reducers/FlashReducer'
import { Navbar } from '../Navbar/Navbar'

interface HeaderProps {
	className: string
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
	const { user, isSignedIn, signout } = useAuth()
  const [links, setLinks] = React.useState<{ name: string; link: string }[]>([])
	const { userId } = user
	const navigate = useNavigate()
	const { setFlash }  = useFlash()

  React.useEffect(() => {
    if (isSignedIn()) {
      setLinks([
        { name: 'start', link: `/` },
        { name: 'things', link: `/things` }
      ])
    } else {
			setLinks([ 
				{ name: 'start', link: '/'},
				{ name: 'sign in', link: '/auth/signin'}
			])
		}
  }, [isSignedIn, userId, user.isSignedIn])

	const signoutUser = () => {
		signout()
		setFlash({ messageType: FlashMessageType.Success, message: 'You have now signed out' })
		navigate({ pathname: '/' })
	}
	
	return (
		<header className={`${className} my-auto`}>
			<Navbar className="h-full flex justify-end items-center" links={links}/>
			{ user.isSignedIn ? <button onClick={signoutUser}>sign out</button> : null }
		</header>
	)
}