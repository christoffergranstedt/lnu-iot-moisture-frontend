import React from 'react'
import styled from 'styled-components'

const StyledDiv = styled.div`
  position: relative;
  background: rgb(255, 255, 255);
  width: 97%;
  border-radius: 5px;
  margin: 15px 0;
  padding: 5px 10px;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.1), 0 1px 10px 0 rgba(0, 0, 0, 0.15);
`

interface CardProps {
	children: any
}

export const Card: React.FC<CardProps> = ({ children }) => {

  return (
    <StyledDiv>
      {children}
    </StyledDiv>
	)
}