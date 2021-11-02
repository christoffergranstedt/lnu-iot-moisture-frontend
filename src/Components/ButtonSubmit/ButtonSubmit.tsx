import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
	width: 160px;
	height: 40px;
	margin-top: 10px;
	margin-bottom: 10px;
	margin-right: 10px;
	background: rgb(192, 116, 116);
	border-radius: 8px;
	border: none;
	color: white;
	text-decoration: none;
	font-size: 16px;
	cursor: pointer;

	&:hover {
		background:rgb(206, 129, 129);
	}
`

interface ButtonSubmitProps {
	children: React.ReactNode
	onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export const ButtonSubmit = ({ children, onClick }: ButtonSubmitProps) => {
  return (
    <StyledButton type='submit' onClick={onClick}>
      {children}
    </StyledButton>
  )
}