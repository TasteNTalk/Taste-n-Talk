import React from 'react'
import {Link, NavLink } from 'react-router-dom'

const Firstpage = () => {
  return (
    <div
      style={{ backgroundColor: '#002140' }}
      className="antialiased text-indigo-200 flex justify-center items-center h-screen"
    >
      <div
        style={{
          backgroundColor: '#002147',
          fontFamily: "'Sofadi One', serif",
          fontWeight: 400,
          fontStyle: 'normal',
        }}
        className="fixed w-[90%] max-w-[720px] flex flex-col items-center gap-8 text-center font-serif rounded-lg shadow-lg shadow-black p-4 h-auto sm:max-w-[540px]"
      >
        <a href="#">
          <img
            src="/images/tntLogo.png"
            alt="Taste'n Talk Logo"
            className="w-[100px] h-auto rounded-full"
          />
        </a>

        <div className="text-2xl font-semibold">Welcome to Taste'n Talk</div>

        <div className="flex flex-row gap-4 w-full justify-evenly">
          
          <NavLink to='/submit'
          
            className="bg-gradient-to-r from-indigo-600 from-18% to-indigo-800 to-90% text-white py-2 px-4 rounded hover:bg-gradient-to-r hover:from-indigo-800 hover:from-18% hover:to-indigo-600 hover:to-90% hover:ease-in-out shadow shadow-black hover:shadow-lg hover:shadow-black hover:text-lg hover:drop-shadow active:bg-gradient-to-r active:from-indigo-700 active:from-18% active:to-indigo-500 active:to-90% active:ease-in-out active:shadow-lg active:shadow-black active:text-lg"
            // onClick={() => (window.location.href = './login.html')}
          >
            Use as a User
            
          </NavLink>

          <NavLink to='/query'
            className="bg-gradient-to-r from-indigo-600 from-18% to-indigo-800 to-90% text-white py-2 px-4 rounded hover:bg-gradient-to-r hover:from-indigo-800 hover:from-18% hover:to-indigo-600 hover:to-90% hover:ease-in-out shadow shadow-black hover:shadow-lg hover:shadow-black hover:text-lg hover:drop-shadow active:bg-gradient-to-r active:from-indigo-700 active:from-18% active:to-indigo-500 active:to-90% active:ease-in-out active:shadow-lg active:shadow-black active:text-lg"
            // onClick={() => (window.location.href = 'instructor_query_page.html')}
          >
            Use as an Instructor
          </NavLink>
        </div>
      </div>
    </div>
  )
}

export default Firstpage
