import React from 'react'

const Signup = () => {
  return (
    <div className="min-h-screen bg-[#1A1C23] flex items-center justify-center p-4">
      <div className="w-full max-w-4xl h-[80vh] bg-[#2A2E3A] rounded-3xl shadow-2xl overflow-hidden flex">
        {/* Left Section */}
        <div className="w-1/2 h-full bg-cover bg-center relative" 
        // style={{ backgroundImage: "url('/signupimg.jpg')" }}
        >
          <div className="absolute top-0 left-0 w-full h-full bg-black/60 flex items-center justify-center text-center">
            <div className="text-white space-y-4">
            </div>
          </div>
        </div>

        {/* Right Section */}
        <div className="w-1/2 p-8 flex flex-col justify-center gap-5">
          <div className="space-y-6">
            <h1 className="text-4xl mb-8 font-bold text-center text-white">
              Sign Up
            </h1>
          </div>
          {/* {error && (
            <div className="bg-red-500/20 border border-red-500 text-red-400 px-4 py-3 rounded-lg mb-4">
              {error}
            </div>
          )} */}
            <div className="space-y-4">
              <div className="relative group">
                <input
                  className="w-full px-4 py-3 bg-[#3A3F4B] border border-[#444] rounded-lg text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 peer"
                  required
                  type="text"
                  id="username"
                  placeholder="Username"
                //   value={username}
                //   onChange={(e) => setUsername(e.target.value)}
                />
                <label
                  htmlFor="username"
                  className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-indigo-400 peer-focus:text-sm"
                >
                  Username
                </label>
              </div>

              <div className="relative group">
                <input
                  className="w-full px-4 py-3 bg-[#3A3F4B] border border-[#444] rounded-lg text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 peer"
                  required
                  type="text"
                  id="name"
                  placeholder="Name"
                //   value={name}
                //   onChange={(e) => setName(e.target.value)}
                />
                <label
                  htmlFor="name"
                  className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-indigo-400 peer-focus:text-sm"
                >
                  Name
                </label>
              </div>

              <div className="relative group">
                <input
                  className="w-full px-4 py-3 bg-[#3A3F4B] border border-[#444] rounded-lg text-white placeholder-transparent focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all duration-200 peer"
                  required
                  type="email"
                  id="email"
                  placeholder="Email"
                //   value={email}
                //   onChange={(e) => setEmail(e.target.value)}
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
                //   value={password}
                //   onChange={(e) => setPassword(e.target.value)}
                />
                <label
                  htmlFor="password"
                  className="absolute left-4 top-2 text-sm text-gray-400 transition-all peer-placeholder-shown:text-base peer-placeholder-shown:text-gray-400 peer-placeholder-shown:top-3 peer-focus:-top-6 peer-focus:text-indigo-400 peer-focus:text-sm"
                >
                  Password
                </label>
              </div>
            </div>

            <div className="flex items-center">
              <input
                id="terms"
                type="checkbox"
                className="w-4 h-4 rounded border-gray-600 text-indigo-600 focus:ring-indigo-500 bg-[#3A3F4B]"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-400">
                I agree to the{' '}
                <a href="/terms" className="text-indigo-400 hover:text-indigo-300">
                  Terms of Service
                </a>{' '}
                and{' '}
                <a href="/privacy" className="text-indigo-400 hover:text-indigo-300">
                  Privacy Policy
                </a>
              </label>
            </div>

            <button
              type="submit"
            //   disabled={isLoading}
              className="w-full py-3 px-4 bg-gradient-to-r from-blue-600 to-teal-600 text-white rounded-lg font-medium transition-all duration-200 transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 disabled:opacity-50 disabled:cursor-not-allowed"
            > Sign up
              
            </button>

            <p className="text-center text-gray-400 mt-6">
              Already have an account?{' '}
              <a href="/login" className="text-indigo-400 hover:text-indigo-300 font-medium transition-colors">
                Log in here
              </a>
            </p>
        </div>
      </div>
    </div>
  )
}

export default Signup
