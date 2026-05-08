import { useContext } from 'react';
import { SiteContext } from '../context/SiteContext';
import { data } from '../data';

const Hero = () => {
  const { lang } = useContext(SiteContext);
  const content = data[lang]?.hero;

  if (!content) return null;

  return (
    
    <section className="relative w-full md:min-h-[calc(100vh-80px)] bg-[#F4F4F4] dark:bg-[#2A262B] transition-colors duration-300 flex items-center justify-center px-10 md:px-0 overflow-hidden py-8 md:py-12">
      
      {/* Dekoratif Şekiller - Mobilde Hidden */}
      <div className="hidden md:block absolute right-0 top-[60%] w-[100px] h-[45px] bg-[#EA2678] rounded-l-full z-0 translate-x-4 md:translate-x-0"></div>
      <div className="hidden md:block absolute bottom-0 right-[15%] w-[110px] h-[110px] border-[20px] border-[#D9D9D9] dark:border-light-secondary rounded-full translate-y-1/2 z-20"></div>

      
      <div className="max-w-[1107px] w-full mx-auto flex flex-col md:flex-row justify-between items-center relative z-10 pt-6 pb-12 md:py-0">
        
        {/* SAĞ GÖRSEL (Mobilde Üstte) */}
        <div className="relative w-[280px] h-[280px] md:w-[360px] md:h-[360px] order-first md:order-last shrink-0">
          <div className="absolute -top-3 -left-3 w-full h-full bg-[#EA2678] rounded-2xl -z-10"></div>
          <img src={content.image} alt="Hero" className="w-full h-full object-cover rounded-2xl shadow-xl" />
        </div>

        {/* SOL YAZI ALANI (Mobilde Altta) */}
        <div className="w-full md:max-w-[650px] flex flex-col md:min-h-[450px] mt-10 md:mt-0">
          
          <div className="flex items-center gap-3 mb-2 mt-2">
            <span className="text-[#000000] text-[24px] md:text-[28px] dark:text-white tracking-widest">{content.hi}</span>
          </div>
          
          <h1 className="text-[28px] md:text-[42px] mt-0 font-medium text-[#0A0A14] dark:text-white leading-tight md:leading-[60px] whitespace-pre-line">
            <span className="relative inline-block mr-2">
               <span className="relative z-10">{content.namePart}</span>
               <div className="absolute left-[-5px] bottom-1 md:bottom-2 w-full h-[15px] md:h-[25px] bg-[#EA2678] -z-10 rounded-sm"></div>
            </span>
            {content.titleRest}
          </h1>

          <div className="md:flex-grow"></div>

          {/* Sosyal İkonlar */}
          <div className="flex gap-4 my-6 md:mb-6">
            {content.socials?.map((social) => (
              <a key={social.id} href={social.url} target="_blank" rel="noreferrer" className="text-[30px] dark:text-white hover:text-[#EA2678] transition-colors">
                 <img src={social.icon} alt={social.name} className="h-7 w-auto dark:invert" />
              </a>
            ))}
          </div>

          {/* Alt Bilgi Yazıları */}
          <div className="text-[16px] md:text-[18px] text-[#525252] dark:text-white leading-relaxed whitespace-pre-line">
            <p>
              {content.currentJob.part1}
              <span className="text-[#EA2678] font-bold">{content.currentJob.highlight1}</span>
              {content.currentJob.part2}
              <span className="text-[#EA2678] font-bold">{content.currentJob.highlight2}</span>
              {content.currentJob.part3}
              <br className="md:hidden" />
              <a 
                href={`mailto:${content.currentJob.email}`} 
                className="text-[#EA2678] underline font-bold break-all"
              >
                {content.currentJob.email}
              </a>
            </p>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;