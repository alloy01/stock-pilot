import { useState } from "react";

const Toast = ({ toastBlock,toastMessage }) => {

	return(
		<div className={`text-stone-200 absolute -right-84 transition-all duration-300 font-mono border-2 border-stone-200 top-12 px-6 py-2 ${toastBlock ? '-translate-x-96' : 'translate-x-0'}`}>
			{ toastMessage }
		</div>
	)
}

export default Toast;