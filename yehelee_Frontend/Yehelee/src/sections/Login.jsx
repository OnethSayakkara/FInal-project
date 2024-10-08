import React from 'react';
import { FaEnvelope, FaLock, FaFacebookF, FaGoogle } from 'react-icons/fa'; // Importing email and lock icons
import Logo from '../assets/images/logo2.svg'

function Login() {
  return (
    <div className="relative flex justify-center items-center w-auto h-screen bg-gray_black  overflow-hidden">

      {/* Login form container */}
      <div className="relative bg-white shadow-lg rounded-lg p-8 w-full max-w-sm z-10">
        <div className="mb-4 text-center leading-tight">
         <img src={Logo} alt="logo" className='h-14 w-[200px] relative ml-16 justify-center ' />
          <h2 className="text-2xl font-poppins font-semibold text-gray_black uppercase">Welcome back</h2>
          <p className="text-gray_black opacity-30 font-semibold uppercase">It's great to see you</p>
        </div>
        <form>
          <div className="mb-4 relative">
            <label className="block text-gray-600 text-sm mb-2 font-poppins" htmlFor="email">
              Email
            </label>
            <div className="relative">
              <FaEnvelope className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray_black opacity-20" />
              <input
                className="w-full pl-10 px-3 py-2 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue_light"
                type="email"
                id="email"
                placeholder="Enter your email here"
              />
            </div>
          </div>
          <div className="mb-4 relative">
            <label className="block text-gray_black text-sm mb-2 font-poppins" htmlFor="password">
              Password
            </label>
            <div className="relative">
              <FaLock className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray_black opacity-20" />
              <input
                className="w-full pl-10 px-3 py-2 border border-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                type="password"
                id="password"
                placeholder="Enter your password"
              />
            </div>
          </div>
          <div className="flex items-center justify-between mb-4">
            <label className="inline-flex items-center">
              <input type="checkbox" className="form-checkbox" />
              <span className="ml-2 text-gray_black font-poppins text-sm ">Remember me</span>
            </label>
            <a href="#" className="text-sm font-poppins text-blue opacity-75 font-semibold hover:text-darkblue">
              Forgot Password?
            </a>
          </div>
          <button
            className="w-full bg-blue text-white py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-600"
            type="submit"
          >
            Login
          </button>
        </form>
        <div className="mt-6 text-center">
          <p className="text-gray_black font-poppins text-sm">
            Don't have an account?{' '}
            <a href="#" className="text-blue font-poppins font-semibold ">
              Sign up
            </a>
          </p>
        </div>
        <div className="mt-4 text-center">
          <p className="text-gray_black opacity-30 font-semibold font-poppins text-sm mb-4">Or login with</p>
          <div className="flex justify-center space-x-4">
            <button className="bg-blue text-white p-2 font-poppins  font-semibold rounded-lg flex items-center space-x-2 border-blue">
              <FaFacebookF />
              <span>Facebook</span>
            </button>
            <button className="bg-red text-white w-28 font-poppins justify-center font-semibold p-2 rounded-lg flex items-center space-x-2">
              <FaGoogle />
              <span>Google</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
