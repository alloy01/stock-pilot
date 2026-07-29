import Auth from "../components/Auth.jsx"
import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

const Login = () => {
    const {user, loading} = useContext(AuthContext);
    if(loading){
        return <div>Loading...</div>
    }
    if(user){
        return <Navigate to="/dashboard" />
    }

    return(
        <div className="bg-black h-screen">
            <Auth/>
        </div>
    )
}

export default Login