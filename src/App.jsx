import { useState } from 'react'

import { createBrowserRouter, RouterProvider, createHashRouter } from 'react-router-dom'

import Home from './pages/Home.jsx';
import Blog from './pages/Blog.jsx';

export default function App() {

  const initialTheme = localStorage.getItem('theme');

  const [theme, setTheme] = useState(initialTheme!='dark'?'light':'dark');

    const router = createHashRouter([
      {
        path: "/",
        element: <Home theme={theme} setTheme={setTheme}/>
      },
      {
        path: "/b-log",
        element: <Blog theme={theme} setTheme={setTheme}/>
      }
    ])

  return (
    <RouterProvider router={router} />
  )
}

