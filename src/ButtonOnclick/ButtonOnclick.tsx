import React from 'react'

interface ButtonOnlickProps {
  className?: string
	children: React.ReactNode
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const ButtonOnclick = ({ className, children, onClick }: ButtonOnlickProps) => {
  return (
    <button className={`${className} bg-primary text-white w-28 h-8 rounded-md hover:bg-primaryHover`} onClick={onClick}>
      {children}
    </button>
  )
}