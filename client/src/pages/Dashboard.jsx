import { useContext, useState } from "react"
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

    // handling operations buttons states
    const [addItem,setAddItem] = useState(false);
    const [editItem,setEditItem] = useState(false);
    const [deleteItem,setDeleteItem] = useState(false);
    const [filterItem,setFilterItem] = useState(false);

    // functions for handling modify buttons
    const handleModifyButtons = (modifyItem,setModifyItem) => {
        if(modifyItem == false){
            setAddItem(false);
            setDeleteItem(false);
            setEditItem(false);
            setFilterItem(false);
            setModifyItem(true);

        }else{
            setModifyItem(false);
        }
    }
    
    return(
        <div className="bg-black min-h-screen">
            {/* info bar */}
            <div className="py-8 px-8 flex-col flex items-center text-slate-100 gap-y-8 font-mono">
                <p className=" text-2xl">StockPilot📦- Dashboard
                </p>
                <div className="flex justify-between w-full px-8">
                    <p className="text-xl">user:{username}</p>
                    <button className=" border-2 border-slate-100 px-2 py-1 cursor-pointer" onClick={logout}>
                        logout
                    </button>
                </div>
            </div>

            {/* area for item list and modify */}
            <div className=" h-auto w-screen font-mono px-16 flex gap-x-4">

                {/* modify items component */}
                <div className="h-fit bg-slate-400/10 w-1/4 border border-stone-100/20 rounded-2xl px-4 py-4">
                    <div className="text-center">
                        <p className="text-stone-200 text-lg whitespace-nowrap underline-offset-8 underline">Modify item
                        </p>
                    </div>
                    <div className="text-center text-stone-200 mt-4 grid grid-cols-1 lg:grid-cols-2 lg:gap-x-2">
                        <button className="cursor-pointer mb-2 border-2" onClick={() => {
                            handleModifyButtons(addItem,setAddItem);
                        }}>
                           {`Add item >`}
                        </button>
                        <button className="cursor-pointer mb-2 border-2" onClick={() => {
                            handleModifyButtons(editItem,setEditItem);
                        }}>
                           {`Edit item >`}
                        </button>
                        <button className="cursor-pointer mb-2 border-2" onClick={() => {
                            handleModifyButtons(filterItem,setFilterItem);
                        }}>
                           {`Filter item >`}
                        </button>
                        <button className="cursor-pointer mb-2 border-2" onClick={() => {
                            handleModifyButtons(deleteItem,setDeleteItem);
                        }}>
                           {`Delete item >`}
                        </button>
                    </div>
                </div>

                {/* items content */}
                <div className="bg-slate-400/10 w-3/4 rounded-2xl border border-stone-100/20 h-fit py-2 px-4"> 
                    <div>
                        <p className="text-stone-200  underline-offset-8 underline text-center text-lg">Items</p>
                        <div className="text-stone-200 text-left mt-4 grid grid-cols-1 gap-y-1">
                            <p>No items added</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Dashboard