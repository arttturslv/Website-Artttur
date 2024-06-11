import { motion } from "framer-motion"
export default function techItem({ name, image }) {

    return (
        <motion.div 
        
        initial={{opacity:0, x: -75}}
        whileInView={{opacity:1, x: 0}}
        once
        transition={{duration: 0.5, delay:0.25}}
        viewport={{amount:'some', once: 'true'}}
    
        
        className="flex flex-col">
            <div className='sketch-border w-min relative z-20 '>
                <div className='px-2 w-12 sm:w-max py-0.5 flex items-center md:gap-3 group'>
                    <img className=" group-hover:scale-105" src={image} alt={`${name} icon`} />
                    <div className=" group-hover:animate-typing whitespace-nowrap overflow-clip text-clip">
                        <h4 className=" text-[1.2rem] hidden md:block ">{name}</h4>
                    </div>
                </div>
            </div>
        </motion.div>
    )
}

/*


*/