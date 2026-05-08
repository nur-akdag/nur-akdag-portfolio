import { useContext } from 'react';
import { SiteContext } from '../context/SiteContext';
import { data } from '../data';

const Projects = () => {
  const { lang } = useContext(SiteContext);
  const content = data[lang].projects; 

  return (
    <section className="w-full py-20 px-10 md:px-0 bg-white dark:bg-[#2A262B] transition-colors duration-300">
      <div className="max-w-[1107px] mx-auto">
        
        <h2 className="text-[36px] md:text-[48px] font-bold text-center mb-20 text-[#0A0A14] dark:text-white">
          {lang === 'en' ? 'Projects' : 'Projeler'}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-50 md:gap-20">
          {content?.list?.map((project, index) => {
            const isBlue = index % 2 === 0;
            
            return (
              <div 
                key={project.id} 
                
                className={`w-full flex flex-col rounded-[32px] pt-12 px-8 md:px-12 relative shadow-sm ${
                  isBlue ? 'bg-soft-blue dark:bg-dark-navy' : 'bg-soft-green dark:bg-dark-green'
                }`}
              >
                <h3 className="text-[32px] font-bold font-serif text-[#0A0A14] dark:text-white mb-4">
                  {project.title}
                </h3>
                
                <p className="text-[16px] text-[#0A0A14] dark:text-white whitespace-pre-line leading-relaxed mb-6">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-3 mb-8">
                  {project.technologies.map((tech, techIndex) => (
                    <span 
                      key={techIndex} 
                      className="px-5 py-2 text-sm font-bold bg-white dark:bg-[#2A262B] text-[#0A0A14] dark:text-white rounded-full shadow-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center mb-12 font-bold text-[18px]">
                  <a href={project.github} target="_blank" rel="noreferrer" className="text-[#0A0A14] dark:text-white underline hover:opacity-70">
                    View on Github
                  </a>
                  <a href={project.link} target="_blank" rel="noreferrer" className="text-[#0A0A14] dark:text-white flex items-center gap-2 hover:opacity-70">
                    Go to app <span>→</span>
                  </a>
                </div>

                {/* LAPTOP TAŞMA ALANI: mt-auto ile en alta itip, -mb ile dışarı sarktık */}
                <div className="w-full mt-auto -mb-20 md:-mb-24 relative z-20 group">
  
                {/* Ana Laptop Çerçevesi */}
                <img 
                    src={project.frame} 
                    className="w-full h-auto relative z-10" 
                    alt="Laptop Frame"
                />

                {/* Ekran Görüntüsü: Laptopun ekran alanına göre konumlandırıldı */}
                {/* Bu yüzdelik değerler standart mockup'lara göre ayarlanmıştır (top-left-width-height) */}
                <div className="absolute top-[6%] left-[12.2%] w-[75.5%] h-[79%] overflow-hidden z-0">
                    <img 
                    src={project.screenshot} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
                    alt="App Screenshot"
                    />
                </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;