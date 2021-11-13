import React from 'react'

interface HeadingProps {
	children: React.ReactNode
}

export const SubHeading: React.FC<HeadingProps> = ({ children }) => {
	return (
		<h2 className="text-gray-700 text-2xl mb-2">{children}</h2>
	)
}