import DevelopmentTag from "../DevelopmentTag"
import ContentTag from "../ContentTag"
import ProjetoImage from "../ProjetoImage.jsx"
import WebsiteIcon from '../../assets/icons/contact/Website.jsx'
import IconExpander from "../IconExpander.jsx"
import GithubIcon from '../../assets/icons/contact/Github.jsx'

import { motion } from "framer-motion"

export default function ProjetoItem({title, text, githubURL, websiteURL, initialImage, images, devProgress, tags}) {
    return (
        <motion.div 
        
            initial={{opacity:0, y: 75}}
            whileInView={{opacity:1, y: 0}}
            transition={{duration: 0.5, delay:0.25}}
            viewport={{amount:'some', once: true}}
        
        
        className="block gap-6 lg:flex lg:space-y-0 space-y-4 items-center">
            <div className="relative lg:w-[50%] h-min">
                <ProjetoImage imageInicial={initialImage} images={images}/>
                <div className="flex absolute right-0 bottom-0 justify-end p-4">
                   {githubURL? <IconExpander action={() => window.open(githubURL)} IconJSX={<GithubIcon/>} text='/github' /> :<></>} 
                   {websiteURL? <IconExpander action={() => window.open(websiteURL)} IconJSX={<WebsiteIcon/>} text='/website' /> :<></>} 
                </div>
            </div>
            <div className="lg:w-[50%]">
                <div className="flex gap-1">
                    <h5 className="text-[1.4rem]">{title} - </h5> 
                    <DevelopmentTag type={devProgress}/> 
                </div>
                <p className="sm:text-[1.1em] text-[0.9rem] text-left">{text}</p>
                
                <div className="gap-2 flex flex-wrap ">
                {
                    tags?.map((tag, index) => (
                        <ContentTag key={index} text={tag}/>
                    ))
                }
                </div>
            </div>
    </motion.div>

    )
}