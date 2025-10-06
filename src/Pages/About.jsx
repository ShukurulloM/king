import React from 'react';
import Telegram from '../img/telegram.png';
import Seo from '../img/seo.svg';
import KuchliDizayn from '../img/kuch.svg';
import SifatliSayt from '../img/sayt.svg';
import TezkorIsh from '../img/aa.svg';
import HtmlIcon from '../img/html.png';
import CssIcon from '../img/css.png';
import JsIcon from '../img/js.png';
import ReactIcon from '../img/react.png';
import TailwindIcon from '../img/tailwindcss.png';
import Bootstrap from '../img/bootstrap.png';

const About = () => {
  return (
    <div className="bg-black">
    <div className='w-full max-w-7xl mx-auto px-5 py-12'>
      <h2 className='text-2xl sm:text-3xl font-medium mb-4 sm:mb-6'>Men haqimda</h2>

      <div className='flex flex-col lg:flex-row gap-8 md:gap-12 md:mb-16'>
        <div className='text-base sm:text-lg text-white/65 flex-1'>
          <p className='mb-4 sm:mb-5 leading-relaxed'>
            Assalomu alaykum! Men Muhammadov Shukurullo, 2005-yilda
            O'zbekiston Respublikasining Namangan viloyati Norin tumanida tug'ilganman.
            Hozirda 19 yoshdaman va 6-sinfdan texnologiyaga qiziqib kelaman.
            Bu qiziqishim meni web dasturlash sohasiga yetakladi.
          </p>

          <p className='mb-4 sm:mb-5 leading-relaxed'>
            Web dasturchi sifatida mening asosiy maqsadim — zamonaviy, funksional va
            foydalanuvchi uchun qulay bo'lgan web-saytlar va web-ilovalar yaratishdir.
            Men uchun dasturlash — bu nafaqat kod yozish, balki muammolarga yechim topish,
            ijodkorlikni ishga solish va foydalanuvchilarga foyda keltiradigan mahsulot ishlab chiqish
            jarayonidir.
          </p>

          <p className='mb-4 sm:mb-5 leading-relaxed'>
            Men asosan HTML, CSS, JavaScript, React va Tailwind CSS texnologiyalaridan foydalanib,
            tezkor va ishonchli web-loyihalar ishlab chiqaman. Har bir loyihamda dizayn va funksionallik
            o'rtasida mukammal muvozanat saqlashga harakat qilaman.
          </p>

          <p className='mb-6 sm:mb-8'>
            Maqsadim — o'z bilim va tajribamni yanada oshirish, yangi texnologiyalarni o'rganish
            va kelajakda xalqaro darajadagi loyihalarda ishtirok etish.
          </p>

          <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-7 bg-[#1a1a1a] p-4 sm:p-6 rounded-xl border border-white/20'>
            <p className="text-base sm:text-lg flex-1">
              Hamkorlik yoki savollar uchun <span className="font-semibold text-white">men bilan bog'lanishingiz mumkin</span>.
            </p>
            <a
              href='https://t.me/shukurullo_5577'
              className='flex items-center gap-2 border-2 rounded-xl py-2 px-4 sm:px-6 hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-teal-500 hover:scale-105 bg-black/20'
            >
              <img className='w-6 h-6 sm:w-8 sm:h-8' src={Telegram} alt="telegram lichka" />
              <span className='text-sm sm:text-base'>Telegram</span>
            </a>
          </div>
        </div>

        <div className="lg:max-w-none">
          <ul className="grid grid-cols-1 gap-4 sm:gap-5">
            <li className="flex items-start sm:items-center gap-4 bg-[#1a1a1a] p-4 rounded-xl border border-white/20 hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-teal-500 hover:scale-105">
              <img src={Seo} alt="SEO optimizatsiya" className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
              <div>
                <span className="block text-base sm:text-lg font-semibold text-white mb-1">SEO optimizatsiya</span>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Saytni qidiruv tizimlarida yuqori o'rinlarga ko'tarish
                </p>
              </div>
            </li>

            <li className="flex items-start sm:items-center gap-4 bg-[#1a1a1a] p-4 rounded-xl border border-white/20 hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-teal-500 hover:scale-105">
              <img src={KuchliDizayn} alt="Kuchli dizayn" className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
              <div>
                <span className="block text-base sm:text-lg font-semibold text-white mb-1">Kuchli dizayn</span>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Dizayn jarayonida nafislik va detallarga katta e'tibor qaratish
                </p>
              </div>
            </li>

            <li className="flex items-start sm:items-center gap-4 bg-[#1a1a1a] p-4 rounded-xl border border-white/20 hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-teal-500 hover:scale-105">
              <img src={SifatliSayt} alt="Sifatli ishlash chiqish" className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
              <div>
                <span className="block text-base sm:text-lg font-semibold text-white mb-1">Sifatli ishlab chiqish</span>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Saytlarni yuqori sifatli va zamonaviy standartlarga mos ishlab chiqish
                </p>
              </div>
            </li>

            <li className="flex items-start sm:items-center gap-4 bg-[#1a1a1a] p-4 rounded-xl border border-white/20 hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-teal-500 hover:scale-105">
              <img src={TezkorIsh} alt="Tezkor ish jarayoni" className="w-8 h-8 sm:w-10 sm:h-10 flex-shrink-0" />
              <div>
                <span className="block text-base sm:text-lg font-semibold text-white mb-1">Tezkor ish jarayoni</span>
                <p className="text-gray-400 text-sm sm:text-base leading-relaxed">
                  Belgilangan vaqt ichida samarali va tezkor sayt yaratish
                </p>
              </div>
            </li>
          </ul>
        </div>
      </div>

      <section className="mt-12">
        <h2 className="text-2xl sm:text-3xl font-bold text-white mb-3 sm:mb-4">
          Texnologiyalar
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 sm:gap-6">
          <div className="group bg-[#1a1a1a] rounded-xl flex items-center justify-center p-4 sm:p-6 border border-white/20 hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-teal-500 hover:scale-105">
            <img src={HtmlIcon} alt="HTML" className="w-8 h-8 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform duration-300" />
          </div>

          <div className="group bg-[#1a1a1a] rounded-xl flex items-center justify-center p-4 sm:p-6 border border-white/20 hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-teal-500 hover:scale-105">
            <img src={CssIcon} alt="CSS" className="w-8 h-8 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform duration-300" />
          </div>

          <div className="group bg-[#1a1a1a] rounded-xl flex items-center justify-center p-4 sm:p-6 border border-white/20 hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-teal-500 hover:scale-105">
            <img src={JsIcon} alt="JavaScript" className="w-8 h-8 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform duration-300" />
          </div>

          <div className="group bg-[#1a1a1a] rounded-xl flex items-center justify-center p-4 sm:p-6 border border-white/20 hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-teal-500 hover:scale-105">
            <img src={ReactIcon} alt="React" className="w-8 h-8 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform duration-300" />
          </div>

          <div className="group bg-[#1a1a1a] rounded-xl flex items-center justify-center p-4 sm:p-6 border border-white/20 hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-teal-500 hover:scale-105">
            <img src={TailwindIcon} alt="Tailwind" className="w-8 h-8 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform duration-300" />
          </div>

          <div className="group bg-[#1a1a1a] rounded-xl flex items-center justify-center p-4 sm:p-6 border border-white/20 hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-teal-500 hover:scale-105">
            <img src={Bootstrap} alt="Bootstrap" className="w-8 h-8 sm:w-12 sm:h-12 group-hover:scale-110 transition-transform duration-300" />
          </div>
        </div>
      </section>
    </div>
    </div>
  );
};

export default About;