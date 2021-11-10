import React from 'react'
import { useNavigate  } from 'react-router'
import styled from 'styled-components'

import { useAuth } from '../../Hooks/useAuth'
import { useFlash } from '../../Hooks/useFlash'
import { FlashMessageType } from '../../Contexts/Reducers/FlashReducer'
import { Navbar } from '../Navbar/Navbar'

const StyledHeader = styled.header`
	display: block;
	background: rgb(192, 116, 116);
	height: 85px;
	padding-top: 30px;
	text-align: center;

	a {
		color: white;
		display: inline;
		text-decoration: none;
		font-size: 18px;

		&:hover {
			color:rgb(230, 230, 230);
		}
	}

	button {
		margin-left: 40px;
		background: rgb(192, 116, 116);
		border: none;
		color: white;
		cursor: pointer;
		font-size: 18px;
		display: inline-block;

		&:hover {
			color:rgb(230, 230, 230);
		}
	}
`

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
		<StyledHeader>
			<Navbar links={links}/>
			{ user.isSignedIn ? <button onClick={signoutUser}>sign out</button> : null }
		</StyledHeader>
	)
}