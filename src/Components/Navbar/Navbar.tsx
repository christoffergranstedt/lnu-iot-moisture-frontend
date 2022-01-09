import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

import { useAuth } from '../../Hooks/useAuth'

interface NavbarProps {
	className: string
	links: { name: string, link: string}[]
}

export const Navbar: React.FC<NavbarProps> = ({ className, links }) => {
	const { isSignedIn, signout } = useAuth()
	const navigate = useNavigate()

	const signOutHandler = async (event: React.MouseEvent<HTMLElement>) => {
		await signout()
		navigate('/')
	}

	return (
		<nav className={className}>
			<ul className="text-right mr-0 sm:mr-4 xl:mr-24 2xl:text-xl">
				{links.map(link => {
					return <li className="px-4 sm:px-12 inline-block" key={uuid()}><NavLink to={link.link}>{link.name}</NavLink></li>
				})}
				{isSignedIn() && <li className="px-4 sm:px-12 inline-block"><button onClick={signOutHandler}>sign out</button></li>}
			</ul>
		</nav>
	)
}