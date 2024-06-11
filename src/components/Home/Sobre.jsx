import { motion } from "framer-motion";
import CustomToolTip from "../CustomToolTip";

export default function Introducao () {
  function salvarClipboard(e) {
    let contact = e.target.innerHTML;

    navigator.clipboard.writeText(contact)
    .then(() => {
      return true;
    })
    .catch((err) => console.log('err:', err)); 
  }
        return (
          <motion.section  

          initial={{opacity:0, y: 75}}
          whileInView={{opacity:1, y: 0}}
          once
          transition={{duration: 0.5, delay:0.25}}
          viewport={{amount:'some', once: 'true'}}
      
          
          id="about" className='sm:px-16 px-6'>
                <h2>Sobre</h2>
              <div className="px-2">
                <p className='sm:text-[1.3em] text-[1.1rem] text-left py-2'>
                  Sou o <strong>Artur</strong>, apaixonado por <strong>conhecimento</strong>, seja relacionado a <strong>tecnologia</strong>, natureza, universo ou vida. 
                  Meus hobbies incluem diversas formas de <strong>arte</strong>, como desenho e design, e desde pequeno, sempre tive um fascínio por entender como as coisas funcionam. Isso me levou a gostar de <strong>projetar</strong> e colocar a mão na massa para <strong>desenvolver</strong>.
                </p>
                <p className='sm:text-[1.3em] text-[1.1rem] text-left py-2'>
                  Atualmente sou estudante de <strong>Análise e Desenvolvimento de Sistemas</strong> (ADS) e estou curtindo muito explorar o mundo da TI.
                  Tenho uma paixão especial pelo <strong>desenvolvimento web</strong>, especialmente pela criação de <strong>designs</strong> e codificação de páginas utilizando <strong>React e Tailwind</strong>, afinal, sou um dev front-end.
                  No entanto, estou ansioso para aprender outras linguagens e tecnologias para ter maior <strong>autonomia</strong> e atuar tanto no front-end quanto no back-end.                
                </p>
                <p className='sm:text-[1.3em] text-[1.1rem] gap-2 flex text-left py-2 flex-wrap'>
                  Manda um<strong>email: </strong>
                  <CustomToolTip text={'Clique para copiar'} textAction={'Copiado!'} >
                    <span className=" text-md underline peer" onClick={(e) => salvarClipboard(e)}> arttturslv@gmail.com</span>
                  </CustomToolTip>  
                </p>
              </div>
          </motion.section>
        )
        
} 