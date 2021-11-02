import React from 'react'
import styled from 'styled-components'

import { useAuth } from '../../Hooks/useAuth'
import { useRequest } from '../../Hooks/useRequest'
import { ActionDescription } from '../../Types/ActionDescription'

const StyledDiv = styled.div`
	border: 1px solid rgb(200, 200, 200);
	border-radius: 10px;
	padding: 15px;
	margin: 10px;
	display: flex;
	align-items: center;

	div.info {
		flex: 1 1 50%;
		display: inline;
		margin-right: 50px;
	}

	div.actions {
		flex: 1 1 50%;

		button {
			background: rgb(192, 116, 116);
			border-radius: 8px;
			border: none;
			color: white;
			text-decoration: none;
			font-size: 14px;
			cursor: pointer;
			padding: 10px 15px;

			&:hover {
				background: rgb(206, 129, 129);			
			}
		}
	}
`

interface ActionProps {
	action: ActionDescription
}

export const Action: React.FC<ActionProps> = ({ action }) => {
	const { sendRequest } = useRequest()
	const { user } = useAuth()
	
	const invokeAction = async () => {
		const form = action.forms.find(form => {
			if (form.op.includes('invokeaction')) return form
			return null
		})

		if (!form) throw new Error('No form found')

		await sendRequest({ url: form.href, method: form.methodName, token: user.accessToken })
	}

	return (
		<StyledDiv>
			<div className='info'><p>{action.title}</p></div>
			<div className='actions'><button onClick={invokeAction}>Invoke</button></div>
		</StyledDiv>
	)
}