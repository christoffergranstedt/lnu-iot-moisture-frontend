import React from 'react'

import { FormSubscription } from '../Contants/FormSubscription'
import { FormDescription } from '../Types/FormDescription'
import { useAuth } from './useAuth'
import { useRequest } from './useRequest'

export const useEvent = () => {
	const { sendRequest } = useRequest()
	const { user } = useAuth()
	
	const handleSubscriptionToEvent = React.useCallback(async (forms: FormDescription[], wantToSubscribe: boolean) => {
		let form = forms.find(form => {
			if (wantToSubscribe) {
				if (form.op.includes(FormSubscription.Subscribe)) return form	
			} else {
				if (form.op.includes(FormSubscription.Unsubscribe)) return form	
			}
			return null
		})

		if (form) await sendRequest({ url: form.href, method: form.methodName, token: user.accessToken })
  }, [sendRequest, user.accessToken])
	
	return { handleSubscriptionToEvent }
}
