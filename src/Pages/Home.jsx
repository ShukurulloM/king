import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import My from '../img/men.png'
import { Link } from 'react-router-dom';

const Home = () => {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  return (
    <section className='w-full max-w-6xl mx-auto px-4 sm:px-5 py-8 md:py-16'>
      <div className='flex flex-col md:flex-row items-center gap-6 md:gap-8 mb-8 md:mb-12' data-aos="fade-up">
        <div className='w-full flex justify-center items-center pt-8 md:pt-40'>
          <div className='flex flex-col md:flex-row justify-center items-center gap-5 md:gap-8'>
            <div className='flex-shrink-0'>
              <img
                className='w-48 h-48 md:w-72 md:h-72 border-2 rounded-full object-cover object-top'
                src={My}
                alt="Mening rasm"
              />
            </div>

            <div className='text-center md:text-left max-w-lg'>
              <h1 className='text-2xl sm:text-3xl md:text-4xl font-bold mb-3'>
                <p>Assalomu alaykum. <br />
                  <strong className='text-teal-600'>Muhammadov Shukurullo</strong>
                </p>
              </h1>

              <div>
                <p className='text-base sm:text-lg text-white/60 mb-4 md:mb-6 leading-relaxed'>
                  "Men veb dasturchi va dizayner sifatida ijod va texnologiyani uyg'unlashtiraman.
                  Har bir loyiha orqali foydalanuvchiga qulay tajriba yaratishga intilaman.
                  Maqsadim — sifatli veb-loyihalar orqali mijozlarimning muvaffaqiyatiga hissa qo'shish."
                </p>

                <div className='flex flex-col sm:flex-row justify-center md:justify-start gap-3'>
                  <Link
                    className='text-base border-2 bg-black/10 py-2 px-6 sm:px-8 md:px-12 rounded-2xl inline-block hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-green-500/30 hover:scale-105 text-center'
                    to="/about"
                  >
                    Haqida
                  </Link>
                  <Link
                    className='text-base border-2 bg-black/10 py-2 px-6 sm:px-8 md:px-12 rounded-2xl inline-block hover:border-teal-500 transition-all duration-300 shadow-lg hover:shadow-green-500/30 hover:scale-105 text-center'
                    to="/project"
                  >
                    Loyiha
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home;