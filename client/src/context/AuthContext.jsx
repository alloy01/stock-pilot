import { createContext, useEffect, useState } from "react";
import api from "../api/axios";

// creating context for authentication
export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [username,setUsername] = useState(null);
    // when theres ongoing authentication, show loading screen to frontend
    const [loading,setLoading] = useState(true);

    const checkAuth = async () => {
        try{
            // if response returns true then set user with the id fetched by the api
            const response = await api.get("/auth/is-auth");
            
            if(response.data.success){
                setUser(response.data.userId);
                setUsername(response.data.username);
            }
            
        }
        catch(err){
            setUser(null);
        }
        // when loading is finally done then continue, else theres a catch function above
        finally{
            setLoading(false)
        }
    }

    // if any thing changes then run checkAuth function which is the above one
    useEffect(() => {
        checkAuth();
    },[])

    return(
        // give the context required value in short, give the value you want context to have and provide it to the children
        <AuthContext.Provider
            value = {{
                user,
                username,
                setUser,
                loading,
                checkAuth
            }}
        >
            {children}
        </AuthContext.Provider>
            
    )
}
