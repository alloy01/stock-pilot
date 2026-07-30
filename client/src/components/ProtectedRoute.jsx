import { Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";


export default function ProtectedRoute({children}){

    // fetching the value from the context to display the required things
    const {user,loading} = useContext(AuthContext);
    
    // if things are loading then show this
    if(loading){
        return <h1>Loading...</h1>;
    }
    // if user is not present redirect them to auth page
    if(!user){
        return <Navigate to="/" replace />;
    }

    return children;
}