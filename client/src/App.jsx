import { Routes, Route } from "react-router-dom";
import Auth from './components/Auth'
import Login from "./pages/Login";

const App = () => {
	return (
		<Routes>
			<Route path="/" element={<Login />} />
		</Routes>
	)
}

export default App