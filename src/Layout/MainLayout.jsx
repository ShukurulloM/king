import React, { useEffect } from 'react';
import Header from '../Components/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../Components/Footer';
import { useState } from 'react';

const MainLayout = () => {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const timer = setLoading(() => {
      setLoading(false)
    }, 1000);
    return () => clearTimeout(timer)
  })
  if (loading) {
    <div className="fixed inset-0 flex items-center justify-center bg-white z-50">
      <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ec5714]"></div>
    </div>
  }
  return (
    <div className='w-full min-h-screen flex flex-col bg-picture text-white'>
      <Header />
      <main className='grow'>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout