import { Routes, Route } from "react-router-dom";
import Auth from './components/Auth.jsx'
import Login from "./pages/Login.jsx";
import ProtectedRoute from "./components/ProtectedRoute.jsx"
import Dashboard from "./pages/Dashboard.jsx"

const App = () => {
	return (
		<Routes>
			<Route path="/" element = {<Login />} />
			<Route path="/dashboard" element = {<ProtectedRoute>
				<Dashboard/>
			</ProtectedRoute>}
			/>
		</Routes>
	)
}

export default App