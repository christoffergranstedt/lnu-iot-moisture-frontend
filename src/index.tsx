import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import { QueryClientProvider, QueryClient } from 'react-query'
import { AppProvider } from './Contexts/App/AppContext'
import { GlobalStyles } from './globalStyles'

const queryClient = new QueryClient()

ReactDOM.render(
  <React.StrictMode>
		<AppProvider>
			<QueryClientProvider client={queryClient}>
				<GlobalStyles/>
				<App/>
			</QueryClientProvider>
		</AppProvider>
  </React.StrictMode>,
  document.getElementById('root')
)