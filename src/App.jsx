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