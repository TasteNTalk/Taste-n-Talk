import React from 'react'

const Login = () => {
  return (
    <div className="min-h-screen bg-[#1A1C23] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[80vh] bg-[#2A2E3A] rounded-3xl shadow-2xl overflow-hidden flex">
        {/* Left Side (Image Section) */}
        <div
          className="w-1/2 h-full bg-cover bg-center relative"
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center text-center">
            <div className="text-white space-y-4">
            </div>
          </div>
        </div>
  
        {/* Right Side (Form Section) */}
        <div className="w-1/2 p-8 flex flex-col justify-center gap-5">
          <div className="space-y-6">
            <h1 className="text-4xl mb-8 font-bold text-center text-white">
              Log In
            </h1>
          </div>
            <div className="space-y-4">
              <div className="relative group ">
                <input
                  className="w-full px-4 py-3 bg-[#3A3F4B] border border-[#444] rounded-lg text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 peer"
                  required
                  type="email"
                  id="email"
                  placeholder="Email"
                  // value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <label
                  htmlFor="email"
                  className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-indigo-400 peer-focus:text-sm"
                >
                  Email
                </label>
              </div>
  
              <div className="relative group">
                <input
                  className="w-full px-4 py-3 bg-[#3A3F4B] border border-[#444] rounded-lg text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 peer"
                  required
                  type="password"
                  id="password"
                  placeholder="Password"
                  // value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  htmlFor="password"
                  className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-indigo-400 peer-focus:text-sm"
                >
                  Password
                </label>
              </div>
            </div>
  
            <div className="flex items-center justify-between text-sm text-gray-400">
              <label className="flex items-center">
                <input
                  type="checkbox"
                  className="w-4 h-4 rounded border-gray-600 text-indigo-600 focus:ring-indigo-500 bg-[#3A3F4B]"
                />
                <span className="ml-2">Remember me</span>
              </label>
              <a href="/forgot-password" className="text-indigo-400 hover:text-indigo-300 transition-colors">
                Forgot password?
              </a>
            </div>
  
            <button
              type="submit"
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            > Login
            </button>
  
            <p className="text-center text-gray-400 mt-6">
              Don&apos;t have an account?{' '}
              <a href="/signup" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                Create an account
              </a>
            </p>
        </div>
      </div>
    </div>
  )
}

export default Login
