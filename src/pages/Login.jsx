import React from 'react'
import { Link } from 'react-router-dom'

export const Login = () => {
  return (
    <div className="w-full h-screen">
        <img className='hidden sm:block absolute w-full h-full object-cover' src="https://assets.nflxext.com/ffe/siteui/vlv3/5e48e7b6-350d-48d9-96d6-de8ca173c89f/6ce0d80b-360b-442d-9159-3a06dd962ea6/UG-en-20221219-popsignuptwoweeks-perspective_alpha_website_medium.jpg" alt="/" />
          <div className="bg-black/60 fixed top-0 left-0 w-full h-screen" ></div>
          <div className='fixed w-full px-4 py-24 z-50'>
            <div className='max-w-[450px] h-[600px] mx-auto bg-black/75 text-white'>
              <div className="max-w-[320px] mx-auto py-16">
                <h1 className='text-3xl font-bold'>Sign In</h1>
                <form className='w-full flex flex-col py-4'>
                  <input className='p-3 my-2 bg-gray-600 rounded' type="email" placeholder='email' />
                  <input className='p-3 my-2 bg-gray-600 rounded' type="password" placeholder='password' />
                  <button className="bg-red-600 py-3 my-6 rounded font-bold">Sign In</button>
                  <div className='flex justify-between items-center text-sm text-gray-600'>
                    <p><input type="checkbox" className='mr-2' />Remember me</p>
                    <p>Need help?</p>
                  </div>
                  <p className='py-8'><span className='text-gray-600 mr-1'>New to Netflix?</span>
                  <Link to='/signup'>
                    Sign Up
                  </Link>
                  </p>
                </form>
              </div>
            </div>
          </div>
      </div>
  )
}
