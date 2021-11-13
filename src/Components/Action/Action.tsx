import React from 'react'

import { useAuth } from '../../Hooks/useAuth'
import { useRequest } from '../../Hooks/useRequest'
import { ActionDescription } from '../../Types/ActionDescription'

interface ActionProps {
	action: ActionDescription
	className?: string
}

export const Action: React.FC<ActionProps> = ({ action, className }) => {
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
		<div className={`${className} inline-block w-96 text-center py-2 rounded-md`}>
			<h5 className="text-xl">{action.title}</h5>
			<button className="my-2 bg-green-600 text-white w-28 h-8 rounded-md hover:bg-green-500" onClick={invokeAction}>Invoke</button>
		</div>
	)
}