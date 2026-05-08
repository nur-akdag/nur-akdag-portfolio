import { useContext } from 'react';
import { SiteContext } from '../context/SiteContext';
import { data } from '../data';

const Profile = () => {
  const { lang } = useContext(SiteContext);
  const content = data[lang].profile;

  return (
    <section className="relative w-full py-20 px-10 md:px-0 bg-[#F4F4F4] dark:bg-[#2A262B] transition-colors duration-300 overflow-hidden">


      {/* Sağ Alt Pembe Halka */}
      
      <div className="hidden md:block absolute top-0 right-0 w-[120px] h-[120px] border-[22px] border-brand-pink rounded-full -translate-y-1/2 translate-x-1/2 z-0 opacity-90"></div>

      {/* --- ANA İÇERİK --- */}
      <div className="max-w-[1107px] mx-auto relative z-10 px-6 md:px-0">
        
        <h2 className="text-[48px] text-center font-bold text-[#0A0A14] dark:text-white mb-12">
          {content.title}
        </h2>

        <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">

          {/* SOL: BASIC INFO KARTI */}
          <div className="w-full md:w-[500px] relative">
            
            {/* Sert Gölge (Hard Shadow) */}
            <div className="absolute top-4 left-4 w-full h-full bg-[#525252]/50 dark:bg-[#484148] rounded-xl"></div>

            {/* Beyaz Kart */}
            <div className="relative bg-white dark:bg-[#525252] p-8 md:p-10 rounded-xl z-10">
              <h3 className="text-[#EA2678] text-[24px] font-medium mb-8">
                {content.basicInfo.title}
              </h3>

              <div className="flex flex-col gap-4 text-[16px] md:text-[18px]">
                <div className="flex">
                  <span className="w-[140px] md:w-[160px] font-bold text-[#0A0A14] dark:text-white">
                    {lang === 'en' ? 'Birthday' : 'Doğum tarihi'}
                  </span>
                  <span className="text-[#0A0A14] dark:text-white">{content.basicInfo.birthday}</span>
                </div>
                <div className="flex">
                  <span className="w-[140px] md:w-[160px] font-bold text-[#0A0A14] dark:text-white">
                    {lang === 'en' ? 'City of Residence' : 'İkamet Şehri'}
                  </span>
                  <span className="text-[#0A0A14] dark:text-white">{content.basicInfo.city}</span>
                </div>
                <div className="flex">
                  <span className="w-[140px] md:w-[160px] font-bold text-[#0A0A14] dark:text-white">
                    {lang === 'en' ? 'Education' : 'Eğitim Durumu'}
                  </span>
                  <span className="text-[#0A0A14] dark:text-white">{content.basicInfo.education}</span>
                </div>
                <div className="flex">
                  <span className="w-[140px] md:w-[160px] font-bold text-[#0A0A14] dark:text-white">
                    {lang === 'en' ? 'Preferred Role' : 'Tercih Ettiği Rol'}
                  </span>
                  <span className="text-[#0A0A14] dark:text-white">{content.basicInfo.preference}</span>
                </div>
              </div>
            </div>
          </div>

          {/* SAĞ: ABOUT ME */}
          <div className="w-full md:w-[500px] pt-4">
            <div className="relative mb-6 inline-block">
               {/* Mavi Highlight */}
               <div className="absolute left-[-5px] bottom-[4px] w-[90px] h-[16px] bg-[#82BBFF] rounded-sm -z-10 dark:opacity-60"></div>
               <h3 className="text-[28px] font-medium text-[#0A0A14] dark:text-white">
                 {content.aboutMe.title}
               </h3>
            </div>

            <p className="text-[18px] text-[#525252] dark:text-[#D9D9D9] leading-relaxed whitespace-pre-line">
              {content.aboutMe.text}
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Profile;