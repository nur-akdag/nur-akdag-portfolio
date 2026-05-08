import { useContext } from 'react';
import { SiteContext } from '../context/SiteContext';
import { data } from '../data';

const Footer = () => {
  const { lang } = useContext(SiteContext);
  const content = data[lang].footer;

  return (
    <footer className="w-full py-24 bg-white dark:bg-[#2A262B] transition-colors duration-300">
      
      {/* Figma'daki o 758px'lik kutu */}
      <div className="max-w-[758px] mx-auto px-6 md:px-0 flex flex-col md:flex-row justify-between items-center gap-10">
        
        {/* SOL TARAF: Dinamik Başlık Alanı */}
        <div className="flex-1">
          <h2 className="text-[32px] md:text-[40px] font-medium text-[#0A0A14] dark:text-white leading-[1.2] md:text-left text-center whitespace-pre-line">
            {content.titlePart1}
            <span className="relative z-10 inline-block">
              {content.titleHighlight}
              {/* Mavi Highlight - Metnin hemen altında */}
              <div className="absolute left-0 bottom-[4px] w-full h-[14px] bg-[#82BBFF] rounded-sm -z-10"></div>
            </span>
            {content.titlePart2}
          </h2>
        </div>

        {/* SAĞ TARAF: Renkli İletişim Linkleri */}
        <div className="flex flex-col gap-2 text-[18px] md:text-[20px] font-medium md:text-left text-center min-w-[150px]">
          <a 
            href="https://github.com/nur-akdag" 
            target="_blank" 
            rel="noreferrer"
            className="text-[#1769FF] hover:opacity-70 transition-opacity"
          >
            Github
          </a>
          <a 
            href="#" 
            className="text-[#0A0A14] dark:text-white hover:opacity-70 transition-opacity"
          >
            Personal Blog
          </a>
          <a 
            href="https://www.linkedin.com/in/nur-ince-akdag-51601760/" 
            target="_blank" 
            rel="noreferrer"
            className="text-[#0077B5] hover:opacity-70 transition-opacity"
          >
            Linkedin
          </a>
          <a 
            href={`mailto:${content.email}`} 
            className="text-[#AF0C48] dark:text-[#EA2678] hover:opacity-70 transition-opacity"
          >
            Email
          </a>
        </div>

      </div>
    </footer>
  );
};

export default Footer;