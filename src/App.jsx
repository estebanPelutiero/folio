import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Work from './components/Work'
import Contact from './components/Contact'
import Switcher from './components/Switcher'
import { useLanguage } from './LanguageContext';

function App() {

  const { toggleLanguage, language } = useLanguage();

  return (
    <>
      <Navbar />
      <Switcher toggleLanguage={toggleLanguage} currentLanguage={language} />
      <Hero />
      <About />
      <Work />
      <Contact />
    </>
  )
}

export default App
