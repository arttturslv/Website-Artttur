import { useState } from 'react'
import './App.css'

import Navbar from './components/Navbar.jsx'
import Introducao from './components/Home/Introducao.jsx'
import Sobre from './components/Home/Sobre.jsx'
import Skills from './components/Home/Skills.jsx'
import Projetos from './components/Home/Projetos.jsx'
import Footer from './components/Footer.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className=''>

      <div className='bg-platinum max-w-[1240px] w-[100%] space-y-8'>

        <Navbar />

        <Introducao/>

        <Sobre/>

        <Skills/>

        <Projetos/>

        <Footer/>


      </div>
    </div>
  )
}

export default App
