import { useState } from 'react';
import Caricatura from '../../assets/Caricatura.jsx'; // Ajuste o caminho conforme necessário
import GithubIcon from '../../assets/icons/contact/Github.jsx'
import LinkedinIcon from '../../assets/icons/contact/Linkedin.jsx'
import EmailIcon from '../../assets/icons/contact/Email.jsx'



export default function Introducao ({theme}) {
        return (
          <div className='flex max-lg:flex-col-reverse max-lg:gap-0 items-center justify-around px-16 py-16'>
            <div className="dark:text-platinum space-y-1">
              <p>Oi, eu sou o</p>
              <h1 >Artur</h1>
              <p>Estudante de ADS,<br></br>programador,<br></br>desenhista amador.</p>
  
              <div className="flex justify-between w-[150px] items-center">
                <GithubIcon  theme={theme}/>
                <EmailIcon  theme={theme}/>
                <LinkedinIcon theme={theme}/>
              </div>
            </div>
            <div className='w-[400px]'>
            
              <Caricatura theme={theme}></Caricatura>
  
            </div>
          </div>
        )
        
} 