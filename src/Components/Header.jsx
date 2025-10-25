import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';

const Header = () => {
  // === Tarjima hook ===
  const [t, i18n] = useTranslation('global');

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
  };

  // === Menyu holati ===
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const handleNavigation = (path) => {
    navigate(path);
    closeMenu();
  };

  // === Navigatsiya linklari ===
  const navLinks = [
    { path: '/', label: t('nav.home') }, // tarjima orqali
    { path: '/about', label: t('nav.about') },
    { path: '/project', label: t('nav.projects') },
  ];

  const getActiveClass = (path) => {
    return window.location.pathname === path
      ? 'border-teal-500 bg-teal-500/20 text-teal-400 shadow-teal-500/30'
      : 'border-gray-600 text-gray-300 hover:border-teal-400 hover:text-teal-400';
  };

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        <button
          onClick={() => handleNavigation('/')}
          className="text-xl sm:text-2xl font-bold text-white hover:text-teal-400 transition-colors duration-300"
        >
          Shukurullo.uz
        </button>

        <div className="flex items-center gap-4">
          {/* === Desktop menyu === */}
          <nav className="hidden md:flex gap-3 lg:gap-4">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigation(link.path)}
                className={`font-semibold border-2 py-2 px-4 lg:px-6 rounded-xl transition-all duration-300 shadow-md hover:scale-105 ${getActiveClass(link.path)}`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* === Til tanlash === */}
          <div className="flex gap-3 font-semibold border-2 py-2 px-4 rounded-xl text-center transition-all duration-300 text-white">
            <button onClick={() => changeLang('en')}>EN</button>
            <span>/</span>
            <button onClick={() => changeLang('ru')}>RU</button>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg border border-gray-600 text-white hover:border-teal-400 hover:text-teal-400 transition-all duration-300"
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* === Mobil menyu === */}
      {isMenuOpen && (
        <div className="md:hidden bg-black/95 border-t border-gray-800">
          <nav className="px-4 py-4 flex flex-col gap-3">
            {navLinks.map((link) => (
              <button
                key={link.path}
                onClick={() => handleNavigation(link.path)}
                className={`font-semibold border-2 py-3 px-6 rounded-xl text-center transition-all duration-300 ${getActiveClass(link.path)}`}
              >
                {link.label}
              </button>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
};

export default Header;
