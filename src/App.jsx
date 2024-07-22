// import React ,{ useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Home from './components/Home/Home';
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Experience from './components/Experience/Experience'
import Work from './components/Work/Work'
import MasterLayout from './components/MasterLayout/MasterLayout'
// import SideNav from './components/SideNav/SideNav'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import NotFound from './components/NotFound/NotFound';




function App() {
  const routes = createBrowserRouter([{

    path: '/',
    errorElement:<NotFound/>,
    element: <MasterLayout />,
    children: [
      { index: true, element: <Home /> },
      { path: "Home", element: <Home /> },
      { path: "About", element: <About /> },
      { path: "Skills", element: <Skills /> },
      { path: "Experience", element: <Experience /> },
      { path: "Work", element: <Work /> },
    ],
  }]);

  return (
    <>
    <RouterProvider router={routes}></RouterProvider>
  
    </>
  )
}

export default App
