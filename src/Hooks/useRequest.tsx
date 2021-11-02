import React from 'react'
import axios from 'axios'
import { HTTPMethod } from '../Utils/enums/HTTPMethod'

interface UseRequestProps {
	url: string;
	method: HTTPMethod;
	body?: any;
	token: string | null
}

export const useRequest = () => {
  const sendRequest = React.useCallback(async ({ url, method, body, token }: UseRequestProps) => {
    try {
			const REACT_APP_BACKEND_URL = process.env.NODE_ENV === 'production' ? 'https://cg222sp-1dv527-assignment-3.herokuapp.com' : 'http://localhost:9000'

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
    } catch (error) {
      if (error.response) {
				throw new Error(error.response.data.errors[0].message)
      }
    }
  }, [])
 
  return { sendRequest }
}