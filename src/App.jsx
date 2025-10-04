import React from 'react';
import { createRoutesFromElements, createBrowserRouter, Route, RouterProvider } from 'react-router-dom';
import MainLayout from './Layout/MainLayout';
import Home from './Pages/Home';
import About from './Pages/About';
import Project from './Pages/Project';

const App = () => {
  const routes = createBrowserRouter(
    createRoutesFromElements(
      <Route element={<MainLayout/>}>
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<About/>}/> 
        <Route path='/project' element={<Project/>}/>
      </Route>
    )
  );

  return(
    <RouterProvider router={routes}/>
  );
};

export default App;