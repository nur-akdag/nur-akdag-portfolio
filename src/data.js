
export const data = {
  en: {
    hero: {
        hi: "Hi! 👋",
        namePart: "I’m Nur.",
        titleRest: "I’m a full-stack developer. I can craft solid and scalable frontend products. \nLet’s meet!",
        currentJob: {
        part1: "Currently ",
        highlight1: "Freelancing",
        part2: " for ",
        highlight2: "UX, UI, & Web Design",
        part3: " Project. \nInvite me to join your team -> ",
        email: "enurince@gmail.com"
        },
        image: "/profile-photo.jpg", 
        socials: [ 
            { id: 1, name: "LINKEDIN", icon: "/linkedin.png", url: "https://www.linkedin.com/in/nur-ince-akdag-51601760/" },
            { id: 2, name: "GITHUB", icon: "/github.svg", url: "https://github.com/nur-akdag" }
        ]
    },
    skills: [
      { id: 1, name: "JAVASCRIPT", icon: "/js-logo.png" },
      { id: 2, name: "REACT", icon: "/react-logo.png" },
      { id: 3, name: "REDUX", icon: "/redux-logo.png" },
      { id: 4, name: "NODE", icon: "/node-logo.png" },
      { id: 5, name: "VS CODE", icon: "/vscode-logo.png" },
      { id: 6, name: "FIGMA", icon: "/figma-logo.png" }
    ],
    profile: {
      title: "Profile",
      basicInfo: {
        title: "Basic Information",
        birthday: "09.06.1986",
        city: "Kadikoy, Istanbul",
        education: "ITU, Interior Architecture, 2010",
        preference: "Frontend, UI"
      },
      aboutMe: {
        title: "About Me",
        text: "After 15 years of shaping physical spaces, I’m now architecting digital experiences with the same design rigor. \n\nAiming to craft living interfaces through pixels and code. I create digital environments where users feel as intuitive and comfortable as they would in a well-designed room."
      }
    },
    projects: {
      title: "Projects",
      list: [
        {
          id: 1,
          title: "Pizza Order SPA",
          description: "A dynamic, mobile-first web application designed for a seamless pizza ordering experience. This project focuses on complex form management, real-time data handling, and a highly responsive user interface.",
          technologies: ["react", "tailwindcss", "axios", "router", "cypress", "vercel"],
          github: "https://github.com/nur-akdag/fsweb-s8-challenge-pizza",
          link: "https://fsweb-s8-challenge-pizza-iota-two.vercel.app",
          frame: "/laptop.png",
          screenshot: "/app1.png"
        },
        {
          id: 2,
          title: "Login Project",
          description: "A React-based application focused on secure form validation and automated testing with Cypress. \n\n* Email and Strong Password (Regex) validation. \n* End-to-End (E2E) testing with Cypress. \n* Responsive design.",
          technologies: ["react", "css", "react hooks", "regex", "cypress", "vercel"],
          github: "https://github.com/nur-akdag/my-login-project",
          link: "https://my-login-project-lovat.vercel.app",
          frame: "/laptop.png",
          screenshot: "/app2.png"
        }
      ]
    },
    footer: {
      titlePart1: "Let’s ",
      titleHighlight: "work together",
      titlePart2: " on\nyour next product.",
      email: "enurince@gmail.com",
      socials: [
        { id: 1, name: "Github", url: "https://github.com/nur-akdag" },
        { id: 2, name: "Personal Blog", url: "#" },
        { id: 3, name: "Linkedin", url: "https://www.linkedin.com/in/nur-ince-akdag-51601760/" }
      ]
    }
  },

  tr: {
    hero: {
      hi: "Merhaba! 👋",
      namePart: "Ben Nur.",
      titleRest: "Full-stack yazılımcıyım. Sağlam ve ölçeklenebilir frontend ürünleri geliştiriyorum. \nHadi tanışalım!",
      currentJob: {
        part1: "Şu an ",
        highlight1: "UX, UI ve Web Tasarım",
        part2: " projeleri için ",
        highlight2: "Freelance",
        part3: " çalışıyorum. \nBeni ekibinize davet etmek isterseniz -> ",
        email: "enurince@gmail.com"
     },
      image: "/profile-photo.jpg", 
        socials: [ 
            { id: 1, name: "LINKEDIN", icon: "/linkedin.png", url: "https://www.linkedin.com/in/nur-ince-akdag-51601760/" },
            { id: 2, name: "GITHUB", icon: "/github.svg", url: "https://github.com/nur-akdag" }
        ]
    },
    skills: [
      { id: 1, name: "JAVASCRIPT", icon: "/js-logo.png" },
      { id: 2, name: "REACT", icon: "/react-logo.png" },
      { id: 3, name: "REDUX", icon: "/redux-logo.png" },
      { id: 4, name: "NODE", icon: "/node-logo.png" },
      { id: 5, name: "VS CODE", icon: "/vscode-logo.png" },
      { id: 6, name: "FIGMA", icon: "/figma-logo.png" }
    ],
    profile: {
      title: "Profil",
      basicInfo: {
        title: "Temel Bilgiler",
        birthday: "09.06.1986",
        city: "Kadıköy, İstanbul",
        education: "İTÜ, İç Mimarlık, 2010",
        preference: "Frontend, UI"
      },
      aboutMe: {
        title: "Hakkımda",
        text: "15 yıl boyunca fiziksel mekanlara yön verdikten sonra, şimdi aynı tasarım disipliniyle dijital deneyimler inşa ediyorum. \n\nHedefim; piksellerin ve kodun gücüyle yaşayan arayüzler kurgulamak ve kullanıcıların kendilerini tıpkı iyi tasarlanmış bir odadaymışçasına konforlu hissettikleri dijital ortamlar yaratmak."
      }
    },
    projects: {
      title: "Projeler",
      list: [
        {
          id: 1,
          title: "Pizza Sipariş Uygulaması",
          description: "Kusursuz bir pizza siparişi deneyimi için tasarlanmış, dinamik ve mobil öncelikli bir web uygulaması. Bu proje; karmaşık form yönetimi, gerçek zamanlı veri işleme ve yüksek düzeyde duyarlı (responsive) bir kullanıcı arayüzüne odaklanmaktadır.",
          technologies: ["react", "tailwindcss", "axios", "router", "cypress", "vercel"],
          github: "https://github.com/nur-akdag/fsweb-s8-challenge-pizza",
          link: "https://fsweb-s8-challenge-pizza-iota-two.vercel.app",
          frame: "/laptop.png",
          screenshot: "/app1.png"
        },
        {
          id: 2,
          title: "Login Projesi",
          description: "Bu proje, form validasyonları ve Cypress testlerini içeren bir React uygulamasıdır. \n\n* Email ve Güçlü Şifre (Regex) kontrolü.\n* Cypress ile uçtan uca (E2E) testler.\n* Responsive tasarım.",
          technologies: ["react", "css", "react hooks", "regex", "cypress", "vercel"],
          github: "https://github.com/nur-akdag/my-login-project",
          link: "https://my-login-project-lovat.vercel.app",
          frame: "/laptop.png",
          screenshot: "/app1.png"
        }
      ]
    },
    footer: {
      titlePart1: "Birlikte bir proje\n üzerinde ",
      titleHighlight: "çalışalım.",
      titlePart2: "",
      email: "enurince@gmail.com",
      socials: [
        { id: 1, name: "Github", url: "https://github.com/nur-akdag" },
        { id: 2, name: "Kişisel Blog", url: "#" },
        { id: 3, name: "Linkedin", url: "https://www.linkedin.com/in/nur-ince-akdag-51601760/" }
      ]
    }
  }
};