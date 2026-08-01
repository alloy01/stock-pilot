import { useContext } from "react"
import { AuthContext } from "../context/AuthContext.jsx"
import api from "../api/axios.js";

const Dashboard = () => {
    // getting the username to show it on display
    const {username} = useContext(AuthContext);

    // handling the logout button
    const logout = async () => {
        try{
            api.post("/auth/logout");
            window.location.reload();
        }
        catch(err){
            console.log(err,err.message);
        }
    }

    return(
        <div className="bg-black min-h-screen">
            <div className="py-8 px-8 flex-col flex items-center text-slate-100 gap-y-8 font-mono">
                <p className=" text-2xl">StockPilot📦- Dashboard
                </p>
                <div className="flex justify-between w-full px-8">
                    <p className="text-xl">{username}</p>
                    <button className=" border-2 border-slate-100 px-2 py-1 cursor-pointer" onClick={logout}>
                        logout
                    </button>
                </div>
               
            </div>
        </div>
    )
}

export default Dashboard