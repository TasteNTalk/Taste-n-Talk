import React from 'react'
import './Blogsection.css'

const Blogsection = () => {
  return (
<div className="bg-[#002140] min-h-screen">
      <header className="w-[100%] flex items-center justify-between p-3 bg-[#f8f9fa] shadow-lg shadow-gray-900 fixed top-0 left-0 right-0 z-10">
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
          <input
            type="text"
            style={{ padding: "10px 40px 10px 20px" }}
            className="search-bar w-[100%] border rounded-[25px] bg-[#002140] text-[#f8f9fa] italic shadow-md shadow-[#002140e3] placeholder:text-[#f8f9fa] placeholder:italic"
            placeholder="Search"
          />
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
          <button className="rounded-full shadow-md shadow-[#002140e3] px-3">❤️</button>
          <button className="rounded-full shadow-md shadow-[#002140e3] px-3">🔔</button>
          <button className="account-icon">
            <i className="fas fa-user text-[#002140] rounded-full shadow-md shadow-[#002140e3] px-5 py-1"></i>
          </button>
        </div>
      </header>

      <aside className="sidebar glass-effect">
        <nav className="flex flex-col text-xl font-bold gap-5 text-[#f8f9fa]">
          <a href="#" className="shadow-xl shadow-slate-900 rounded-[25px] p-2 flex items-center gap-4">
            <img src="home.png" className="w-[35px]" alt="Home" />
            <span>Home</span>
          </a>
          <a href="#" className="shadow-xl shadow-slate-900 rounded-[25px] p-2 flex items-center gap-4">
            <img src="cart.png" className="w-[35px]" alt="Shopping" />
            <span>Shopping</span>
          </a>
          <a href="#" className="shadow-xl shadow-slate-900 rounded-[25px] p-2 flex items-center gap-4 bg-[#002140]">
            <i className="fas fa-graduation-cap w-[35px] text-center"></i>
            <span>Courses</span>
          </a>
          <a href="#" className="shadow-xl shadow-slate-900 rounded-[25px] p-2 flex items-center gap-4">
            <img src="blog.png" className="w-[35px]" alt="Blog/Articles" />
            <span>Blog/Articles</span>
          </a>
          <a href="#" className="shadow-xl shadow-slate-900 rounded-[25px] p-2 flex items-center gap-4">
            <img src="inbox.png" className="w-[35px]" alt="Inbox" />
            <span>Inbox</span>
          </a>
          <a href="#" className="shadow-xl shadow-slate-900 rounded-[25px] p-2 flex items-center gap-4">
            <img src="community.png" className="w-[35px]" alt="Community" />
            <span>Community</span>
          </a>
          <a href="#" className="shadow-xl shadow-slate-900 rounded-[25px] p-2 flex items-center gap-4">
            <img src="chatbot.png" className="w-[35px]" alt="ChatBot" />
            <span>ChatBot</span>
          </a>
          <a href="#" className="shadow-xl shadow-slate-900 rounded-[25px] p-2 flex items-center gap-4">
            <img src="tiffin.png" className="w-[35px]" alt="Tiffin" />
            <span>Tiffin</span>
          </a>
        </nav>
      </aside>

      <main className="ml-[250px] p-[20px] w-[calc(100% - 250px)] flex flex-col h-auto min-h-[calc(100vh - 100px)] overflow-y-hidden">
        <div className="blog-container flex flex-col h-full w-full">
          <div className="blog-header mb-[20px]">
            <h1 className="text-[32px] font-bold text-white mb-[10px]">Latest Food Articles & Inspiration</h1>
            <p className="text-[#f1f1f1] text-[16px]">
              Discover recipes, cooking tips, and food stories from our community
            </p>
          </div>

          {/* Sample Blog Card */}
          <div className="blog-card">
            <div
              className="blog-card-image"
              style={{ backgroundImage: "url('/api/placeholder/400/200')" }}
            ></div>
            <div className="blog-card-content">
              <span className="blog-card-tag">RECIPE</span>
              <h3 className="blog-card-title">Quick Weeknight Dinner Ideas</h3>
              <p className="blog-card-excerpt">
                10 delicious meals you can prepare in under 30 minutes that your family will love.
              </p>
              <div className="blog-card-meta">
                <span>March 7, 2025</span>
                <span>4 min read</span>
              </div>
            </div>
          </div>

          <div className="text-center mt-10 mb-10">
            <button className="bg-white text-[#002140] font-bold py-3 px-6 rounded-full hover:bg-gray-100 transition">
              Load More Articles
            </button>
          </div>
        </div>
      </main>
    </div>
  
  )
}

export default Blogsection
