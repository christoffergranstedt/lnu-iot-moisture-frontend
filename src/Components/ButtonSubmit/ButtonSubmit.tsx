import React from 'react'

interface ButtonSubmitProps {
	children: React.ReactNode
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const ButtonSubmit = ({ children, onClick }: ButtonSubmitProps) => {
  return (
    <button type='submit' onClick={onClick}>
      {children}
    </button>
  )
}