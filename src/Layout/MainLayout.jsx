import React from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router';
import Footer from '../Components/Footer';

const MainLayout = () => {
  return (
    <div className='w-full min-h-screen flex flex-col'>
      <Header/>
      <main className='grow'>
        <Outlet/>
      </main>
      <Footer/>
    </div>
  )
}

export default MainLayout