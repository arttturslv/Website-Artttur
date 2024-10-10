import { useState } from 'react';

import Caricatura from '../../assets/Caricatura.jsx'; // Ajuste o caminho conforme necessário
import GithubIcon from '../../assets/icons/contact/Github.jsx'
import LinkedinIcon from '../../assets/icons/contact/Linkedin.jsx'
import VisitaIcon from '../../assets/icons/contact/Visita.jsx'
import EmailIcon from '../../assets/icons/contact/Email.jsx'
import CustomToolTip from "../CustomToolTip";
import CardVisita from './CardVisita.jsx';
import { motion } from 'framer-motion';


export default function Introducao ({theme}) {

  const [isCardVisitaVisible, setCardVisitaVisible] = useState(false)

        return (
          <>
          {
            isCardVisitaVisible? 
              <CardVisita theme={theme} setCardVisitaVisible={setCardVisitaVisible}/>
          :
          <div className='flex max-lg:flex-col-reverse items-center justify-around px-16 py-16'>
            <motion.div  
            initial={{opacity:0, x: -165}}
            whileInView={{opacity:1, x: 0}}
            transition={{duration: 0.5, delay:0.25}}
            viewport={{amount:'some', once: 'true'}}
            className="  dark:text-platinum space-y-1 text-center ">
              <p>Oi, eu sou o</p>
              <h1 className='' >Artur</h1>
              <p>Estudante de ADS</p> 
              <CustomToolTip text={<>Implementando <strike>bugs</strike> features!</>}>
              <p>programador   </p>          
              </CustomToolTip>
              <div className="flex justify-between items-center">
                <GithubIcon action={() => window.open('https://github.com/arttturslv/')}  theme={theme}/>
                <EmailIcon action={() => window.open('mailto:arttturslv@gmail.com')} theme={theme}/>
                <LinkedinIcon action={() => window.open('https://www.linkedin.com/in/arttturslv/')} theme={theme}/>
                <VisitaIcon  action={() => setCardVisitaVisible(true)} theme={theme}></VisitaIcon>
              </div>
            </motion.div>
            <motion.div 
             initial={{opacity:0, x: 165}}
             whileInView={{opacity:1, x: 0}}
             transition={{duration: 0.5, delay:0.25}}
             viewport={{amount:'some', once: 'true'}}
         
            className='sm:w-[400px] w-[100vw]'>
              <CustomToolTip text={'óleo sobre tela. "autoretrato".'}>
                <Caricatura theme={theme}></Caricatura>
              </CustomToolTip>
            </motion.div>
          </div>

          
          }
          </>
        )
        
} 