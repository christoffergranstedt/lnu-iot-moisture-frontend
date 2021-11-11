import React from 'react'
import { useNavigate  } from 'react-router'

import { useAuth } from '../../Hooks/useAuth'
import { useFlash } from '../../Hooks/useFlash'
import { FlashMessageType } from '../../Contexts/Reducers/FlashReducer'
import { Navbar } from '../Navbar/Navbar'

interface HeaderProps {

}

export const Header: React.FC<HeaderProps> = (props) => {
	const { user, isSignedIn, signout } = useAuth()
  const [links, setLinks] = React.useState<{ name: string; link: string }[]>([])
	const { userId } = user
	const navigate = useNavigate()
	const { setFlash }  = useFlash()

  React.useEffect(() => {
    if (isSignedIn()) {
      setLinks([
        { name: 'things', link: `/things` }
      ])
    } else {
			setLinks([])
		}
  }, [isSignedIn, userId, user.isSignedIn])

	const signoutUser = () => {
		signout()
		setFlash({ messageType: FlashMessageType.Success, message: 'You have now signed out' })
		navigate({ pathname: '/' })
	}
	
	return (
		<header>
			<Navbar links={links}/>
			{ user.isSignedIn ? <button onClick={signoutUser}>sign out</button> : null }
		</header>
	)
}