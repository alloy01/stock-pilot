import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext.jsx"

createRoot(document.getElementById('root')).render(
	// providing all the app with the context for efficent authentication
  	<AuthProvider>
		{/* to use the routing features of react-router-dom */}
		<BrowserRouter>
			<App/>
		</BrowserRouter>
	</AuthProvider>
)
