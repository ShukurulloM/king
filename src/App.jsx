import React from 'react';
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from 'react-router';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Contact from './Pages/Contact';

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/contact' element={<Contact/>}/>
      </Route>
    )
  ) 

  return (
      <RouterProvider router={routes} />
  )
}

export default App