import React from 'react'
import ReactDOM from 'react-dom'
import { QueryClientProvider, QueryClient } from 'react-query'

import App from './App'
import { AppProvider } from './Contexts/App/AppContext'
import { GlobalStyles } from './globalStyles'

const queryClient = new QueryClient({ defaultOptions: { queries: { refetchOnWindowFocus: false }}})

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