import React from 'react'
import axios from 'axios'

import { HTTPMethod } from '../Contants/HTTPMethod'

interface UseRequestProps {
	url: string
	method: HTTPMethod
	body?: any
	token: string | null
}

export const useRequest = () => {
  const sendRequest = React.useCallback(async ({ url, method, body, token }: UseRequestProps) => {
    try {
			if (!process.env.REACT_APP_BACKEND_URL) throw new Error('No REACT_APP_BACKEND_URL environment variable is provided')

      const { data } = await axios({
        url: `${process.env.REACT_APP_BACKEND_URL}${url}`,  
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