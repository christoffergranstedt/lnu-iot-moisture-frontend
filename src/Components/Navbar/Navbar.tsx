import React from 'react'
import { NavLink } from 'react-router-dom'
import { v4 as uuid } from 'uuid'
import styled from 'styled-components'

const StyledNav = styled.nav`
	display: inline-block

`

interface NavbarProps {
	links: { name: string, link: string}[]
}

export const Navbar: React.FC<NavbarProps> = ({ links }) => {

	return (
		<StyledNav>
			<ul>
				{links.map(link => <li key={uuid()}><NavLink to={link.link} activeClassName='active' exact>{link.name}</NavLink></li>)}
			</ul>
		</StyledNav>
	)
}

export default Navbar