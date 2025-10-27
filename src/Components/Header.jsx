import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useTranslation } from 'react-i18next';
import Uzbekiston from '../img/uzbekistan.png';
import Use from '../img/use.png';
import Russion from '../img/russion.png';
import ArrowUp from '../img/arrow-up.svg';

const Header = () => {
  const [t, i18n] = useTranslation('global');
  const navigate = useNavigate();

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isLangOpen, setIsLangOpen] = useState(false);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleLang = () => setIsLangOpen((prev) => !prev);
  const closeMenu = () => setIsMenuOpen(false);
  const closeLang = () => setIsLangOpen(false);

  const changeLang = (lang) => {
    i18n.changeLanguage(lang);
    closeLang();
  };

  const handleNavigation = (path) => {
    navigate(path);
    closeMenu();
  };

  // === Hozirgi til va bayroq ===
  const currentLang = i18n.language;
  const currentFlag =
    currentLang === 'uz'
      ? Uzbekiston
      : currentLang === 'en'
      ? Use
      : Russion;

  const currentLabel =
    currentLang === 'uz'
      ? 'Oʻzbekcha'
      : currentLang === 'en'
      ? 'English'
      : 'Русский';

  const navLinks = [
    { path: '/', label: t('nav.home') },
    { path: '/about', label: t('nav.about') },
    { path: '/project', label: t('nav.projects') },
  ];

  const getActiveClass = (path) =>
    window.location.pathname === path
      ? 'border-teal-500 bg-teal-500/20 text-teal-400 shadow-teal-500/30'
      : 'border-gray-600 text-gray-300 hover:border-teal-400 hover:text-teal-400';

  return (
    <header className="sticky top-0 z-50 bg-black/95 backdrop-blur-md border-b border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3 sm:py-4 flex justify-between items-center">
        {/* === Logo === */}
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

          {/* === Til tanlash (mobil va desktop) === */}
          <div className="relative border border-white/50 py-2 px-3 sm:px-4 rounded-lg sm:rounded-xl">
            {/* Hozirgi til tugmasi */}
            <button
              className="flex items-center gap-1 sm:gap-2 text-[11px] sm:text-xs md:text-sm cursor-pointer"
              onClick={toggleLang}
            >
              <img className="w-4 sm:w-5" src={currentFlag} alt="Current flag" />
              <span className="text-white truncate max-w-[70px] sm:max-w-none">{currentLabel}</span>
              <img
                className={`w-3 sm:w-4 transition-transform duration-200 ${isLangOpen ? 'rotate-180' : ''}`}
                src={ArrowUp}
                alt="Arrow"
              />
            </button>

            {/* Tillar menyusi */}
            {isLangOpen && (
              <div className="absolute right-0 z-10 bg-white shadow-lg text-black mt-2 w-[130px] sm:w-[160px] rounded-md overflow-hidden animate-fadeIn">
                <button
                  className="flex items-center gap-2 px-2 py-2 hover:bg-slate-700 hover:text-white text-xs sm:text-sm w-full text-left"
                  onClick={() => changeLang('uz')}
                >
                  <img className="w-4 sm:w-5" src={Uzbekiston} alt="Oʻzbekiston bayrogʻi" />
                  <span>Oʻzbekcha</span>
                </button>

                <button
                  className="flex items-center gap-2 px-2 py-2 hover:bg-slate-700 hover:text-white text-xs sm:text-sm w-full text-left"
                  onClick={() => changeLang('en')}
                >
                  <img className="w-4 sm:w-5" src={Use} alt="USA flag" />
                  <span>English</span>
                </button>

                <button
                  className="flex items-center gap-2 px-2 py-2 hover:bg-slate-700 hover:text-white text-xs sm:text-sm w-full text-left"
                  onClick={() => changeLang('ru')}
                >
                  <img className="w-4 sm:w-5" src={Russion} alt="Rossiya bayrogʻi" />
                  <span>Русский</span>
                </button>
              </div>
            )}
          </div>

          {/* === Burger menyu (mobil) === */}
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
