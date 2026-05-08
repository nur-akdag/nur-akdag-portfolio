import { useContext } from 'react'
import { SiteContext } from './context/SiteContext'
import Header from './components/Header'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Profile from './components/Profile'
import Projects from './components/Projects'
import Footer from './components/Footer'

function App() {

  return (
    
    <div className="min-h-screen transition-colors duration-300 bg-light-bg dark:bg-dark-bg">
      
      {/* Dekoratif Arka Plan Elemanları */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-40 h-20 bg-neutral-gray dark:bg-dark-card rounded-b-full -z-10" />

     <Header /> 
     <Hero /> 
     <Skills />
     <Profile />
     <Projects />
     <Footer />
      
    </div>
  )
}

export default App;