import { useContext } from 'react';
import { SiteContext } from '../context/SiteContext.jsx';

const Header = () => {
  const { lang, isDarkMode, toggleLang, toggleTheme } = useContext(SiteContext);

  return (
    // Dış kapsayıcı
    <header className="w-full px-10 py-10 bg-[#F4F4F4] dark:bg-[#2A262B] transition-colors duration-300">

         {/* Üst Orta Gri Yarım Daire */}
      <div className=" hidden md:block absolute top-0 left-1/3 -translate-x-1/2 w-[120px] h-[60px] bg-[#D9D9D9] dark:bg-light-secondary rounded-b-full z-0"></div>

      
      {/* İç kapsayıcı */}
      <div className="max-w-[1107px] w-full mx-auto flex justify-end items-center gap-3 md:gap-6">
        
        {/* Dark Mode Switcher */}
        <div className="flex items-center gap-2">
            <div 
                onClick={toggleTheme}
                className="w-[50px] h-[24px] rounded-full bg-[#EA2678] relative cursor-pointer transition-all flex items-center px-1 shrink-0"
            >
                <div className={`w-[16px] h-[16px] rounded-full bg-yellow-400 transition-all duration-300 ${isDarkMode ? 'translate-x-[26px]' : 'translate-x-0'}`} />
            </div>
            <span className="text-xs md:text-sm font-bold dark:text-neutral-gray text-[#525252] uppercase tracking-wider">
                {isDarkMode ? 'Light Mode' : 'Dark Mode'}
            </span>
        </div>

        <span className="text-[#D9D9D9] dark:text-[#525252]">|</span>

        {/* Dil Switcher */}
        <button 
          onClick={toggleLang} 
          className="text-xs md:text-sm font-bold tracking-wider hover:opacity-80 transition-opacity"
        >
          {lang === 'en' ? (
              <>
              <span className="text-[#EA2678] cursor-pointer">TÜRKÇE</span>
              <span className="text-[#525252] dark:text-[#A8A8A8]">'YE GEÇ</span>
              </>
          ) : (
              <>
              <span className="text-[#525252] dark:text-[#A8A8A8]">SWITCH TO </span>
              <span className="text-[#EA2678] cursor-pointer">ENGLISH</span>
              </>
          )}
        </button>
      </div>
    </header>
  );
};

export default Header;