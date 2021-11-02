import React from 'react'
import axios from 'axios'

import { HTTPMethod } from '../Utils/enums/HTTPMethod'

interface UseRequestProps {
	url: string
	method: HTTPMethod
	body?: any
	token: string | null
}

export const useRequest = () => {
  const sendRequest = React.useCallback(async ({ url, method, body, token }: UseRequestProps) => {
    try {
			let REACT_APP_BACKEND_URL = process.env.NODE_ENV === 'production' ? 'https://linnaeus-iot-moisture.herokuapp.com' : 'http://localhost:9000'

			if (url.includes(REACT_APP_BACKEND_URL)) REACT_APP_BACKEND_URL = ''

      const { data } = await axios({
        url: `${REACT_APP_BACKEND_URL}${url}`,  
        method: method,
        headers: {
          'Content-Type': 'application/json',
					'Authorization': `Bearer ${token}`,
        },
        data: body
			})
      return data
    } catch (error: any) {
      if (error.response) {
				throw new Error(error.response.data.errors[0].message)
      }
    }
  }, [])
 
  return { sendRequest }
}