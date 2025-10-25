import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import AOS from 'aos';
import 'aos/dist/aos.css';
import My from '../img/men.png';
import { useTranslation } from 'react-i18next';

const Home = () => {
  const [t] = useTranslation("global");

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
                <p>
                  {t("hero.greeting")}<br />
                  <strong className='text-teal-600'>{t("hero.name")}</strong>
                </p>
              </h1>

              <div>
                <p className='text-base sm:text-lg text-white/60 mb-4 md:mb-6 leading-relaxed'>
                  {t("hero.description")}
                </p>

                <div className='flex flex-col sm:flex-row justify-center md:justify-start gap-3'>
                  <Link className='border-2 rounded-xl py-2 px-6' to="/about">{t("hero.about")}</Link>
                  <Link className='border-2 rounded-xl py-2 px-6' to="/project">{t("hero.project")}</Link>
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
