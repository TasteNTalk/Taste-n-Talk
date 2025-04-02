import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import Firstpage from './components/Firstpage/Firstpage'
import Querypage from './components/Querypage/Querypage'

// const router = createBrowserRouter([
//   {
//     path:'/',
//     element: <Firstpage/>,
//     children: [
//       {
//         path:'/query',
//         element:<Querypage/>
//       }
//     ]
//   }
// ])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
    <App/>
    </BrowserRouter>
    {/* <RouterProvider router={router} /> */}
  </StrictMode>,
)
