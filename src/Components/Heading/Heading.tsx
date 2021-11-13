import React from 'react'

interface HeadingProps {
	dark?: boolean
	children: React.ReactNode
}

export const Heading: React.FC<HeadingProps> = ({ children, dark }) => {
	return (
		<h1 className={`${dark ? 'text-gray-800' : 'text-white'} text-3xl text-center my-12`}>{children}</h1>
	)
}