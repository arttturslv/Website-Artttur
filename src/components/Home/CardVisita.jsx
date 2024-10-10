import CaricaturaEstatica from '../../assets/CaricaturaStatic.jsx';
import ContentTag from '../ContentTag.jsx';
import QRcode from '../../assets/icons/contact/QRcode.jsx'
import VisitaIcon from '../../assets/icons/contact/Visita.jsx'
import { motion } from 'framer-motion';

import { useEffect } from 'react';
export default function CardVisita({theme, setCardVisitaVisible}) {

    useEffect(() => {
        document.body.style.overflow = 'hidden';
        window.scrollTo(200, 120);

        return () => {
          document.body.style.overflow = 'auto';
        };
      }, []);

  return (
    <motion.div  
    initial={{opacity:0, x: -165}}
    whileInView={{opacity:1, x: 0}}
    transition={{duration: 0.5, delay:0.25}}
    viewport={{amount:'some', once: 'true'}} 
    className="w-full h-[100vh] py-8 px-8 flex items-center"
    >

      <div className="relative w-full h-min flex flex-wrap py-8 px-8 items-center sm:justify-around justify-center border-[#2F2F2F] border-4">
        <div className="w-[200px]">
            <CaricaturaEstatica theme={theme}></CaricaturaEstatica>
        </div>

        <div className="flex justify-around flex-wrap gap-4">
          <div className="space-y-1">
            <h2 className="max-sm:text-center">Artur Marcos </h2>
            <p className="max-sm:text-center">Desenvolvedor Front-End</p>
            <h3 className="font-bold text-lg">Tecnologias: </h3>
            <div className="flex gap-1 flex-wrap w-64">
              <ContentTag text={"JavaScript"} />
              <ContentTag text={"React"} />
              <ContentTag text={"React Native"} />
              <ContentTag text={"HTML"} />
              <ContentTag text={"CSS"} />
              <ContentTag text={"Tailwind"} />
              <ContentTag text={"Figma"} />
            </div>
          </div>
          <div className="w-[150px]">
            <QRcode></QRcode>
          </div>
        </div>
        <div className='absolute bottom-0 right-1'>
            <VisitaIcon  action={() => setCardVisitaVisible(false)} theme={theme}></VisitaIcon>
        </div>
      </div>
    

    </motion.div>
  );
}
