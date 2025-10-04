import React from 'react';
import { Heart, Mail, Phone } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gradient-to-t from-gray-900 to-black border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-5">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex justify-center items-center mx-auto gap-2 text-gray-400">
            <span>© {currentYear} Shukurullo.uz</span>
            <span className="hidden sm:inline">•</span>
            <span className="hidden sm:inline">Barcha huquqlar himoyalangan</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;