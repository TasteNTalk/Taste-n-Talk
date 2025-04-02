import React from 'react'
import { NavLink } from 'react-router-dom'

const Querypage = () => {
  return (
    <div
      style={{ backgroundColor: '#002140' }}
      className="antialiased flex flex-col justify-center items-center min-h-screen"
    >
      <div
        style={{
          backgroundColor: '#002147',
          fontFamily: "'Sofadi One', serif",
          fontWeight: 400,
          fontStyle: 'normal',
        }}
        className="w-[90%] max-w-[720px] flex flex-col items-center gap-8 text-center font-serif rounded-lg shadow-lg shadow-black p-4 sm:max-w-[1080px] text-white"
      >
        <h1 className="font-bold text-4xl">Instructor Query Section</h1>

        <form id="instructor-form" className="flex flex-col gap-4 w-full text-base">
          <label htmlFor="expertise">
            What is your primary area of expertise in cooking:
          </label>
          <select
            name="expertise"
            id="cooking-area-select"
            required
            className="p-2 rounded-md cursor-pointer border-none outline-none shadow-md shadow-black text-center text-[#002140]"
          >
            <option value="">---Please choose an option---</option>
            <option value="South Indian">South Indian</option>
            <option value="North Indian">North Indian</option>
            <option value="East Indian">East Indian</option>
            <option value="West Indian">West Indian</option>
            <option value="Bengali">Bengali</option>
            <option value="Gujarati">Gujarati</option>
            <option value="Rajasthani">Rajasthani</option>
            <option value="Punjabi">Punjabi</option>
            <option value="Chinese">Chinese</option>
            <option value="Italian">Italian</option>
            <option value="French">French</option>
            <option value="Thai">Thai</option>
            <option value="Korean">Korean</option>
            <option value="Mexican">Mexican</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Latin American">Latin American</option>
            <option value="American">American</option>
          </select>

          <label htmlFor="experience">
            Can you share your experience in cooking professionally or teaching culinary skills?
          </label>
          <input
            type="number"
            id="experience"
            name="experience"
            min="0"
            required
            className="p-2 rounded-md cursor-pointer text-[#002140] border-none outline-none shadow-md shadow-black text-center"
          />

          <label htmlFor="certifications">
            What certifications or formal training do you have in culinary arts?
          </label>
          <textarea
            id="certifications"
            name="certifications"
            required
            className="p-2 rounded-md cursor-pointer text-[#002140] border-none outline-none shadow-md shadow-black text-center"
          ></textarea>

          <label htmlFor="instructional_content">
            Have you ever created instructional content (e.g., videos, recipes, or blogs)? If yes, provide examples.
          </label>
          <select
            name="instructional_content"
            id="instructional_content"
            required
            className="p-2 rounded-md cursor-pointer text-[#002140] border-none outline-none shadow-md shadow-black text-center"
          >
            <option value="">---Please choose an option---</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
          <input
            type="file"
            name="if_yes"
            id="if_yes"
            className="bg-slate-500 p-2 rounded-md hidden"
          />

          <label htmlFor="strategies">
            What strategies do you use to keep your audience engaged and answering their questions during a tutorial?
          </label>
          <textarea
            id="strategies"
            name="strategies"
            required
            className="p-2 rounded-md cursor-pointer text-[#002140] border-none outline-none shadow-md shadow-black text-center"
          ></textarea>

          <label htmlFor="motivation">
            What motivates you to teach others about cooking?
          </label>
          <textarea
            id="motivation"
            name="motivation"
            required
            className="p-2 rounded-md cursor-pointer text-[#002140] border-none outline-none shadow-md shadow-black text-center"
          ></textarea>

          <label htmlFor="suggestion">
            How would you suggest an alternative ingredient if a user cannot find the one required?
          </label>
          <textarea
            id="suggestion"
            name="suggestion"
            required
            className="p-2 rounded-md cursor-pointer text-[#002140] border-none outline-none shadow-md shadow-black text-center"
          ></textarea>

          <label htmlFor="mistake">
            If a student makes a mistake during a cooking session, how would you handle it?
          </label>
          <textarea
            id="mistake"
            name="mistake"
            required
            className="p-2 rounded-md cursor-pointer text-[#002140] border-none outline-none shadow-md shadow-black text-center"
          ></textarea>

          <label htmlFor="feedback">
            Are you open to receiving feedback from students to improve your teaching methods?
          </label>
          <select
            name="feedback"
            id="feedback"
            required
            className="p-2 rounded-md cursor-pointer text-[#002140] border-none outline-none shadow-md shadow-black text-center"
          >
            <option value="">---Please choose an option---</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>

          <NavLink to="/submit"
            type="submit"
            className="bg-gradient-to-r from-indigo-600 from-18% to-indigo-800 to-90% text-white py-2 px-4 rounded hover:bg-gradient-to-r hover:from-indigo-800 hover:from-18% hover:to-indigo-600 hover:to-90% hover:ease-in-out shadow shadow-black hover:shadow-lg hover:shadow-black hover:text-lg hover:drop-shadow active:bg-gradient-to-r active:from-indigo-700 active:from-18% active:to-indigo-500 active:to-90% active:ease-in-out active:shadow-lg active:shadow-black active:text-lg"
          >
            Submit
          </NavLink>
        </form>
      </div>
    </div>
  )
}

export default Querypage
