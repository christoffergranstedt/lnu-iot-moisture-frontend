import React from 'react'
import styled from 'styled-components'
import { useFlash } from '../../Hooks/useFlash'

const StyledDiv = styled.div`
	display: block;
	width: 100%;
	height: 30px;
	text-align: center;
	z-index: 999;
	position: absolute;
	top: 0;
	left: 0;
	color: white;
	padding-top: 5px;

	&.error {
		background: rgb(196, 55, 55);	
	}

	&.success {
		background: rgb(57, 131, 28);
	}

	&.warning {
		background: rgb(245, 202, 12);
	}
`

interface FlashProps {

}

export const Flash: React.FC<FlashProps> = (props) => {
	const { flashMessage, flashMessageType, showFlash } = useFlash()


	if (showFlash && flashMessageType) {
		return (
			<StyledDiv className={flashMessageType}>
				<p>{flashMessage}</p>
			</StyledDiv>
		)
	} else {
		return null
	}

}

export default Flash