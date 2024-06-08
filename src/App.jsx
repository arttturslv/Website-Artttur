import { useEffect, useState } from 'react'
import './App.css'

import Navbar from './components/Navbar.jsx'
import Introducao from './components/Home/Introducao.jsx'
import Sobre from './components/Home/Sobre.jsx'
import Skills from './components/Home/Skills.jsx'
import Projetos from './components/Home/Projetos.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  const [theme, setTheme] = useState('light');

  return (
    <div id='at' className={`${theme ?? 'dark'}`}>

      <div className='w-screen flex justify-center bg-platinum dark:bg-jet'>

        <div className='   dark:text-platinum max-w-[1240px] w-[100%]  space-y-8 text-jet'>

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

export default App
