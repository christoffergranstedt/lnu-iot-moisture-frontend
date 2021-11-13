import React from 'react'

import { useAuth } from '../../Hooks/useAuth'
import { Navbar } from '../Navbar/Navbar'

interface HeaderProps {
	className: string
}

export const Header: React.FC<HeaderProps> = ({ className }) => {
	const { user, isSignedIn } = useAuth()
  const [links, setLinks] = React.useState<{ name: string; link: string }[]>([])
	const { userId } = user

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
	
	return (
		<header className={`${className} my-auto`}>
			<Navbar className="h-full flex justify-end items-center" links={links}/>
		</header>
	)
}