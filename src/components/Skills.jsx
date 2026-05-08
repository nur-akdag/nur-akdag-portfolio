import { useContext } from 'react';
import { SiteContext } from '../context/SiteContext';
import { data } from '../data';

const Skills = () => {
  const { lang } = useContext(SiteContext);
  const skillsData = data[lang].skills;

  return (
    <section className="relative py-32 px-6 md:px-0 bg-white dark:bg-dark-card transition-colors duration-300 overflow-hidden">
      
      {/* --- DEKORATİF ŞEKİLLER --- */}

      {/* Hero'dan Gelen Gri Halkanın Diğer Yarısı */}
      <div className="hidden md:block absolute top-0 right-[15%] w-[110px] h-[110px] border-[20px] border-[#D9D9D9] dark:border-light-secondary rounded-full -translate-y-1/2 z-20"></div>
      
      {/* 4. Sol Alt Koyu Gri Şekil (İkonların altında) */}
      <div className="hidden md:block absolute bottom-[10%] left-0 w-[110px] h-[45px] bg-[#525252] dark:bg-light-secondary rounded-r-full z-10"></div>

      {/* 5. Sağ Alt Pembe Halka (Skills-Profile Geçişi) */}
      <div className="hidden md:block absolute bottom-0 right-0 w-[120px] h-[120px] border-[22px] border-brand-pink rounded-full translate-x-1/2 translate-y-1/2 z-20"></div>


      {/* --- ANA İÇERİK --- */}
      <div className="max-w-[1107px] mx-auto relative z-10">
        
        {/* Skills Başlığı */}
        <h2 className="text-[48px] font-bold text-[#0A0A14] dark:text-white text-center mb-16">
          {lang === 'en' ? 'Skills' : 'Yetenekler'}
        </h2>

        {/* İkonlar Listesi */}
        <div className="flex flex-wrap justify-center gap-10 md:gap-16">
          {skillsData.map((skill) => (
            <div key={skill.id} className="flex flex-col items-center gap-6">
              
              {/* 120x120 px Kare ve Croplanmış İkon */}
              <div className="w-[120px] h-[120px] overflow-hidden rounded-xl shadow-sm">
                <img 
                  src={skill.icon} 
                  alt={skill.name} 
                  className="w-full h-full object-cover" 
                />
              </div>
              
              {/* İkon Altı Yazısı */}
              <span className="text-[20px] md:text-[24px] font-medium text-[#777777] dark:text-neutral-gray uppercase tracking-wider">
                {skill.name}
              </span>
              
            </div>
          ))}
        </div>
      </div>

    </section>
  );
};

export default Skills;