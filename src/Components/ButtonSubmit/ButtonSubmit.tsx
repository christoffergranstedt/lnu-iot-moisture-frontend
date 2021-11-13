import React from 'react'

interface ButtonSubmitProps {
  className?: string
	children: React.ReactNode
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const ButtonSubmit = ({ className, children, onClick }: ButtonSubmitProps) => {
  return (
    <button className={className} type='submit' onClick={onClick}>
      {children}
    </button>
  )
}