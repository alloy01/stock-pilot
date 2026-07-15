import React, { useState } from 'react'

const auth = () => {
  // hide and show func for password
  const [showPass,setShowPass] = useState(false)
  const handleShowPass = () => {
    setShowPass(!showPass)
  }

  // states and funcs for walls
  const [authWall,setAuthWall] = useState(false)
  const handleAuthWall = ()=> {
    setAuthWall(!authWall)
  }
  const [signWall,setSignWall] = useState(false)
  const handleSignWall = () => {
    setSignWall(true)
    setLoginWall(false)
  }
  const [loginWall,setLoginWall] = useState(false)
  const handleLoginWall = () => {
    setLoginWall(true)
    setSignWall(false)
  }

  // handle login/create button
  const handleAuthType = () => {
    if(signWall){
      handleLoginWall()
    }else{
      handleSignWall()
    }
  }
  
  
  return (
    <div className='h-auto w-auto'>

        {/* login button */}
        <button onClick={handleAuthWall} className={`text-slate-200 border-2 border-slate-200 font-mono px-5 py-1 ${authWall?`hidden`:`block`}`}>Login</button>

        {/* authwall */}
        <div className={`bg-slate-400/30 ${authWall ? `block` : `hidden`} px-6 py-4`}>

          {/* contents of authwall */}
          <button type='button' className='font-mono text-s text-gray-400' onClick={handleAuthWall}>{`<`}</button>
          <div className='text-slate-200 font-mono px-5 py-4 text-xl'>
            {`${signWall ? `create` : `login`} to continue with Stock-Pilot📦`}
          </div>

          {/* form for auth */}
          <form action="" method="" className='flex flex-col gap-y-2'>
            <input type="email" name="email" placeholder='enter your email.'  className='outline-0 py-1 text-slate-300 font-mono'/>

            {/* div containing toggle button and password */}
            <div className='flex justify-between'>
              <input type={`${showPass ? `text` : `password`}`} name="password" placeholder='enter your password.'  className='outline-0 py-1 text-slate-300 font-mono'/>
              <button onClick={handleShowPass} type='button' className='text-slate-400 font-mono'>{`${showPass ? `hide` : `show`}`}</button>
            </div>
            <button type="submit" className='font-mono text-slate-100 mt-3 py-1 border'>
              {signWall ? `create` : `login`}
            </button>
          </form>

          {/* alternative auth method */}
          <div className='mt-4 flex justify-between'>
            <p className='font-mono text-xs text-gray-400'>{`${signWall ? `already` : `don't`} have an account?`}</p>
            <button type='button' className='font-mono text-xs text-gray-200 border px-4 py-1' onClick={handleAuthType} >{`${signWall ? `login` : `create`}`}</button>
          </div>
        </div>
    </div>
    
  )
}

export default auth