const Dashboard = () => {
    return(
        <div className="bg-black min-h-screen">
            <div className="flex justify-between py-8 px-8 items-center text-slate-100 font-mono">
                <div>
                    <p className="">username</p>
                </div>
                <p                         className=" text-2xl underline underline-offset-12">StockPilot📦- Dashboard
                </p>
                <div>
                    <button className=" border-2 border-slate-100 px-2 py-1">
                        logout
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Dashboard