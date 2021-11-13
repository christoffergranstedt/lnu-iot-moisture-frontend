import React from 'react'

interface HeadingProps {
	children: React.ReactNode
	small?: boolean
}

export const SubHeading: React.FC<HeadingProps> = ({ children, small }) => {
	return (
		<h2 className={`${small ? 'text-xl' : 'text-2xl'} text-gray-700 mb-2`}>{children}</h2>
	)
}