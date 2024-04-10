import React from 'react'

const Admin = () => {
  return (
    <form className='flex flex-col p-4 lg:p-0 max-w-sm mx-auto my-20 gap-2'>
        <div className='flex flex-col mb-2 gap-2'>
            <label htmlFor="login">Login</label>
            <input className='ring-1 ring-inset ring-gray-300 rounded-md border-0 focus:ring-indigo-600 shadow-sm py-1.5 px-2 outline-none' type="text" id='login' required />
        </div>
        <div className='flex flex-col mb-2 gap-2'>
            <label htmlFor="password">Password</label>
            <input className='ring-1 ring-inset ring-gray-300 rounded-md border-0 focus:ring-indigo-600 shadow-sm py-1.5 px-2 outline-none' type="password" id='password' required />
        </div>
        <button className='bg-indigo-600 rounded-md text-white p-1.5 font-semibold'>Login to dashboard</button>
    </form>
  )
}

export default Admin