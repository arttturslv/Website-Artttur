import { useState } from 'react';
import Caricatura from '../../assets/Caricatura.jsx'; // Ajuste o caminho conforme necessário
import GithubIcon from '../../assets/icons/contact/Github.jsx'
import LinkedinIcon from '../../assets/icons/contact/Linkedin.jsx'
import EmailIcon from '../../assets/icons/contact/Email.jsx'
import CustomToolTip from "../CustomToolTip";
import { motion } from 'framer-motion';


export default function Introducao ({theme}) {
        return (
          <div className='flex max-lg:flex-col-reverse items-center justify-around px-16 py-16'>
            <motion.div 
                    
        initial={{opacity:0, x: -165}}
        whileInView={{opacity:1, x: 0}}
        once
        transition={{duration: 0.5, delay:0.25}}
        viewport={{amount:'some', once: 'true'}}
    
        
            className="  dark:text-platinum space-y-1 text-center ">
              <p>Oi, eu sou o</p>
              <h1 className='' >Artur</h1>
              <p>Estudante de ADS, 
                <CustomToolTip text={'Bugs são funcionalidades não pensadas'}>
              programador            
              </CustomToolTip>
              </p>
  
              <div className="flex justify-between items-center">
                <GithubIcon  theme={theme}/>
                <EmailIcon  theme={theme}/>
                <LinkedinIcon theme={theme}/>
              </div>
            </motion.div>
            <motion.div 
             initial={{opacity:0, x: 165}}
             whileInView={{opacity:1, x: 0}}
             once
             transition={{duration: 0.5, delay:0.25}}
             viewport={{amount:'some', once: 'true'}}
         
            className='w-[400px]'>
              <CustomToolTip text={'óleo sobre tela. "autoretrato".'}>
                <Caricatura theme={theme}></Caricatura>
              </CustomToolTip>
            </motion.div>
          </div>
        )
        
} 