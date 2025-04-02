import React from 'react'
import './Landingpage.css'

const Landingpage = () => {
  return (
    <div className=" Landingpage bg-[#002140] min-h-screen">
      <div className="bg-[#002140]">
        <header className="w-full flex items-center justify-between p-3 bg-[#f8f9fa] shadow-lg shadow-gray-900 fixed top-0 left-0 right-0 z-10">
          <div className="flex items-center space-x-4">
            <div className="text-[24px] font-bold hidden md:flex items-center gap-[10px] text-[#163e64]">
              <img src="tntLogo.png" alt="Logo" className="w-[75px] rounded-full shadow-md shadow-[#002140e3] cursor-pointer" />
              <span className="drop-shadow-2xl shadow-[#002140e3]">Taste'n Talk</span>
            </div>
          </div>
          <div className="bg-[#002140e3] p-2 rounded-full w-[62px] shadow-md shadow-[#002140e3] cursor-pointer">
            <img src="map.png" alt="Location" />
          </div>
          <div className="relative w-[30%] max-w-[400px]">
            <input type="text" className="search-bar w-full border rounded-[25px] bg-[#002140] text-[#f8f9fa] italic shadow-md shadow-[#002140e3] placeholder:text-[#f8f9fa] placeholder:italic p-3" placeholder="Search" />
            <button className="absolute right-[15px] top-[50%] translate-x-[-50%] translate-y-[-50%]">
              <i className="fas fa-search text-[#f8f9fa]"></i>
            </button>
          </div>
          <div className="flex justify-center items-center relative bg-[#002140] border border-[#002140] text-[#f8f9fa] rounded-[25px] px-2 shadow-md shadow-[#002140e3]">
            <button className="text-2xl flex items-center justify-center">
              <span className="text-base">Create</span>➕
            </button>
          </div>
          <div className="flex items-center justify-between w-[15%]">
            <button className="text-3xl rounded-full shadow-md shadow-[#002140e3] px-3">❤️</button>
            <button className="text-3xl rounded-full shadow-md shadow-[#002140e3] px-3">🔔</button>
            <button className="account-icon text-3xl">
              <i className="fas fa-user text-[#002140] rounded-full shadow-md shadow-[#002140e3] px-5 py-1"></i>
            </button>
          </div>
        </header>
        <aside className="sidebar glass-effect">
          <nav className="flex flex-col text-xl font-bold gap-5 text-[#f8f9fa]">
            {[
              { img: "home.png", label: "Home" },
              { img: "cart.png", label: "Shopping" },
              { img: "blog.png", label: "Blog/Articles" },
              { img: "inbox.png", label: "Inbox" },
              { img: "community.png", label: "Community" },
              { img: "chatbot.png", label: "ChatBot" },
              { img: "tiffin.png", label: "Tiffin" }
            ].map((item, index) => (
              <a key={index} href="#" className="shadow-xl shadow-slate-900 rounded-[25px] p-2 flex items-center gap-4">
                <img src={item.img} className="w-[35px]" alt={item.label} />
                <span>{item.label}</span>
              </a>
            ))}
          </nav>
        </aside>
        <div className="main-container ml-[250px] p-[20px] w-[calc(100% - 250px)] flex flex-col h-auto min-h-[calc(100vh - 100px)] overflow-y-hidden">
          <div className="blog-container flex flex-col h-full w-full">
            <div className="blog-header mb-[20px]">
              <h1 className="text-[32px] font-bold text-white mb-[10px]">Latest Food Articles & Inspiration</h1>
              <p className="text-[#f1f1f1] text-[16px]">Discover recipes, cooking tips, and food stories from our community</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Landingpage
