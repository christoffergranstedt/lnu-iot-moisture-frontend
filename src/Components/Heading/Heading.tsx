import React from 'react'

interface HeadingProps {
	children: React.ReactNode
}

export const Heading: React.FC<HeadingProps> = ({ children }) => {
	return (
		<h1 className="text-3xl text-center my-12">{children}</h1>
	)
}