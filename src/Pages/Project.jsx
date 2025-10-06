import React from "react";
import { Github, ExternalLink } from "lucide-react";
import Online from "../img/online.png";
import Koraya from "../img/korea.png";

const projects = [
  {
    id: 1,
    title: "🛒 Online Do'kon",
    desc: "React va TailwindCSS asosida yaratilgan onlayn savdo sayti. Foydalanuvchilar mahsulotlarni ko'rish, saralash va buyurtma qilishlari mumkin.",
    img: Online,
    demo: "https://online-dokon-three.vercel.app/",
    github: "https://github.com/ShukurulloM/Online-do-kon",
    stack: ["React", "TailwindCSS", "JavaScript", "Ecommerce", "Vercel"],
  },
  {
    id: 2,
    title: "🇰🇷 Korea Mahsulotlari",
    desc: "Koreys mahsulotlariga ixtisoslashgan onlayn do'kon. Zamonaviy dizayn va foydalanuvchi qulayligi bilan ajralib turadi.",
    img: Koraya,
    demo: "https://korea-01.vercel.app/",
    github: "https://github.com/ShukurulloM/korea_01",
    stack: ["React", "CSS", "Responsive", "Ecommerce", "Modern"],
  },
];

const Project = () => {
  return (
    <section className="w-full min-h-screen bg-black py-12 md:py-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-white mb-4">
            Loyihalarim
          </h2>
          <div className="w-24 h-1 bg-teal-500 mx-auto mb-6 rounded-full"></div>
          <p className="text-lg sm:text-xl text-gray-300 max-w-2xl mx-auto leading-relaxed">
            3 yillik tajribam davomida turli frontend loyihalarni yaratdim.
            Har bir loyiha yangi tajriba va ko'nikmalarni o'zlashtirish imkoniyati bo'ldi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12">
          {projects.map((project) => (
            <div
              key={project.id}
              className="group relative bg-gradient-to-br from-gray-900 to-black rounded-2xl overflow-hidden border border-gray-800 hover:border-teal-500/50 transition-all duration-500 shadow-2xl hover:shadow-teal-500/20"
            >
              <div className="relative h-64 sm:h-72 md:h-80 overflow-hidden">
                <img
                  src={project.img}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                />

                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity duration-300"></div>

                <div className="absolute top-4 right-4 flex gap-3">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-black/80 backdrop-blur-sm rounded-xl border border-gray-700 hover:bg-teal-600 hover:border-teal-500 hover:scale-110 transition-all duration-300 group/link"
                  >
                    <ExternalLink size={20} className="text-white" />
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3 bg-black/80 backdrop-blur-sm rounded-xl border border-gray-700 hover:bg-gray-800 hover:border-gray-600 hover:scale-110 transition-all duration-300 group/link"
                  >
                    <Github size={20} className="text-white" />
                  </a>
                </div>

                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
                    {project.title}
                  </h3>
                </div>
              </div>

              <div className="p-6 sm:p-8">
                <p className="text-gray-300 text-base sm:text-lg leading-relaxed mb-6">
                  {project.desc}
                </p>

                <div className="flex flex-wrap gap-2">
                  {project.stack.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-3 py-2 text-xs sm:text-sm rounded-full bg-gray-800/50 text-gray-200 border border-gray-700 hover:bg-teal-600 hover:border-teal-500 hover:text-white transition-all duration-300 cursor-default"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex gap-4 mt-6 pt-6 border-t border-gray-800">
                  <a
                    href={project.demo}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-teal-600 hover:bg-teal-700 text-white py-3 px-4 rounded-xl text-center font-semibold transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-500/25 flex items-center justify-center gap-2"
                  >
                    <ExternalLink size={18} />
                    Live Demo
                  </a>
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-800 hover:bg-gray-700 text-white py-3 px-4 rounded-xl text-center font-semibold transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    <Github size={18} />
                    Code
                  </a>
                </div>
              </div>

              <div className="absolute inset-0 border-2 border-transparent group-hover:border-teal-500/20 rounded-2xl transition-all duration-500 pointer-events-none"></div>
            </div>
          ))}
        </div>

        <div className="text-center mt-16 md:mt-20">
          <div className="inline-flex items-center gap-4 bg-gray-900/50 backdrop-blur-sm border border-gray-800 rounded-2xl px-6 py-4">
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
            <p className="text-gray-300 text-lg">
              Ko'proq loyihalar tez orada qo'shiladi...
            </p>
            <div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;