import React from 'react'

import { useAuth } from '../../Hooks/useAuth'
import { useRequest } from '../../Hooks/useRequest'
import { ActionDescription } from '../../Types/ActionDescription'

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

		if (!process.env.REACT_APP_BACKEND_URL) throw new Error('REACT_APP_BACKEND_URL is not set as an environment variable')
		const url = form.href.replace(process.env.REACT_APP_BACKEND_URL, '')
		await sendRequest({ url: url, method: form.methodName, token: user.accessToken })
	}

	return (
		<>
			<div className='info'><p>{action.title}</p></div>
			<div className='actions'><button onClick={invokeAction}>Invoke</button></div>
		</>
	)
}