import React from 'react'
import { NavLink } from 'react-router-dom'
import { v4 as uuid } from 'uuid'

interface NavbarProps {
	links: { name: string, link: string}[]
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {

	return (
		<nav>
			<ul>
				{links.map(link => <li key={uuid()}><NavLink to={link.link} className={isActive => isActive ? 'active' : 'hover:border-2 hover:border-white'}>{link.name}</NavLink></li>)}
			</ul>
		</nav>
	)
}