import React, { useState } from "react";
import axios from "axios";

const Auth = () => {
	// hide and show func for password
    const [showPass, setShowPass] = useState(false);
 	const handleShowPass = () => {
    	setShowPass(!showPass);
  	};

	// states and funcs for walls
	const [authWall, setAuthWall] = useState(false);
	const handleAuthWall = () => {
		setAuthWall(!authWall);
	};
	const [signWall, setSignWall] = useState(false);
	const handleSignWall = () => {
		setSignWall(true);
		setLoginWall(false);
	};
	const [loginWall, setLoginWall] = useState(false);
	const handleLoginWall = () => {
		setLoginWall(true);
		setSignWall(false);
	};

	// handle login/create button
	const handleAuthType = () => {
		if (signWall) {
		handleLoginWall();
		} else {
		handleSignWall();
		}
	};

	// handle the toast
	const [toast, setToast] = useState("");
	const handleToast = () => {
		setToast("");
	}

	// handle submit button
	const handleSubmit = async (e) => {
		e.preventDefault();

		try {
		const payload = formData;
		const response = await axios.post(
			`${import.meta.env.VITE_API_LINK}/api/auth/${signWall ? `register` : `login`}`,
			payload,
		);

		console.log(response.data); //temporary thingy for development

		if (response.data) {
			setFormData({
			email: "",
			password: "",
			});

			if (response.data.success) {
				setAuthWall(false);
			}
			setToast(response.data.message)
			setTimeout(() => {
  				setToast("");
			}, 3000)
		}}

		catch (err) {
		setToast(err.message)
		setTimeout(() => {
  				setToast("");
			}, 3000)
		}
	};

	// form data
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});

  	// update form data
	const handleChange = (e) => {
	const { name, value } = e.target;
    setFormData((prevData) => ({
      	...prevData,
      	[name]: value,
    }))};

	return (
    <div className="h-screen w-screen relative border flex items-center overflow-hidden justify-center">

      	{/* toast notification */}
        <div className={`w-60 h-20 absolute -right-60 top-10 bg-neutral-950 text-stone-200 border-2 border-stone-200 duration-600 transition-all ${toast != "" ? '-translate-x-72' : 'nothing'}`}>
            <div className="relative flex justify-center items-center h-full">
				<p className="font-mono text-center">
					{`${toast}`}
				</p>
				<button className="top-0 left-2 absolute" onClick={handleToast}>
					x
				</button>
			</div>
      	</div>

		{/* login button */}
		<button
			onClick={handleAuthWall}
			className={`text-slate-200 border-2 border-slate-200 font-mono px-5 py-1 ${authWall ? `hidden` : `block`}`}>
			Login
		</button>

		{/* authwall */}
		<div className={`bg-slate-400/30 ${authWall ? `block` : `hidden`} px-6 py-4`}>

			{/* contents of authwall */}
			<button
			type="button"
			className="font-mono text-s text-gray-400"
			onClick={handleAuthWall}>
				{`<`}
			</button>
			<div className="text-slate-200 font-mono px-5 py-4 text-xl">
				{`${signWall ? `create` : `login`} to continue with Stock-Pilot📦`}
			</div>

			{/* form for auth */}
			<form onSubmit={handleSubmit} className="flex flex-col gap-y-2">
				<input
					type="email"
					name="email"
					value={formData.email}
					onChange={handleChange}
					placeholder="enter your email."
					className="outline-0 py-1 text-slate-300 font-mono"
				/>

				{/* div containing toggle button and password */}
				<div className="flex justify-between">
					<input
					type={`${showPass ? `text` : `password`}`}
					name="password"
					placeholder="enter your password."
					value={formData.password}
					onChange={handleChange}
					className="outline-0 py-1 text-slate-300 font-mono"
					/>
					<button
					onClick={handleShowPass}
					type="button"
					className="text-slate-400 font-mono"
					>{`${showPass ? `hide` : `show`}`}</button>
				</div>
				<button
					type="submit"
					className="font-mono text-slate-100 mt-3 py-1 border">
					{signWall ? `create` : `login`}
				</button>
			</form>

			{/* alternative auth method */}
			<div className="mt-4 flex justify-between">
				<p className="font-mono text-xs text-gray-400">{`${signWall ? `already` : `don't`} have an account?`}</p>
				<button
					type="button"
					className="font-mono text-xs text-gray-200 border px-4 py-1"
					onClick={handleAuthType}>
						{`${signWall ? `login` : `create`}`}
				</button>
			</div>
		</div>
    </div>
    );
};

export default Auth;