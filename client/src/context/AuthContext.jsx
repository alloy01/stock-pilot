import { createContext, useEffect, useState } from "react";
import api from "../api/axios";

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {

    const [user,setUser] = useState(null);
    const [loading,setLoading] = useState(true);

    const checkAuth = async () => {
        try{
            const response = await api.get("/auth/is-auth");
            if(response.data.success){
                setUser(response.data.userId)
            }
        }
        catch(err){
            setUser(null);
        }
        finally{
            setLoading(false)
        }
    }
    useEffect(() => {
        checkAuth();
    },[])

    return(
        <AuthContext.Provider
            value = {{
                user,
                setUser,
                loading,
                checkAuth
            }}
        >
            {children}
        </AuthContext.Provider>
            
    )
}
