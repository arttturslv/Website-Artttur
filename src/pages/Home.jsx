
import Navbar from '../components/Navbar.jsx'
import Introducao from '../components/Home/Introducao.jsx'
import Sobre from '..//components/Home/Sobre.jsx'
import Skills from '../components/Home/Skills.jsx'
import Projetos from '../components/Home/Projetos.jsx'
import Footer from '../components/Footer.jsx'
import { useEffect } from 'react'

export default function Home({theme, setTheme}) {
  
    useEffect(() => {
      console.log('%c──────▄▀▄─────▄▀▄\n─────▄█░░▀▀▀▀▀░░█▄\n─▄▄──█░░░░░░░░░░░█──▄▄\n█▄▄█─█░░▀░░┬░░▀░░█─█▄▄█', 'font-size:2rem')
      console.log('%cwhat are u doing here? ( ͠° ͟ʖ ͡°) ', 'background: #722F37; font-size: 1.5rem')
    }, [])

    return (
        <div id='at' className={`${theme ?? 'dark'}`}>
          <div className='max-sm:w-screen flex justify-center bg-platinum dark:bg-jet'>
            <div className=' dark:text-platinum max-w-[1240px] max-sm:w-[100%] space-y-8 text-jet'>
              <Navbar setTheme={setTheme} theme={theme} />
              <Introducao theme={theme} />
              <Sobre />
              <Skills />
              <Projetos />
              <Footer />
            </div>
          </div>
        </div>
      )
}