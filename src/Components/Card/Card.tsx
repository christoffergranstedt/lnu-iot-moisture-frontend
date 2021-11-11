import React from 'react'

interface CardProps {
	children: any
}

export const Card: React.FC<CardProps> = ({ children }) => {

  return (
    <div>
      {children}
    </div>
	)
}