import DevelopmentTag from "../DevelopmentTag"
import ContentTag from "../ContentTag"

import GithubIcon from '../../assets/icons/contact/Github.jsx'
export default function ProjetoItem({title, text, githubURL, image, devProgress, tags}) {
    return (
        <div className="block px-6 sm:px-2 gap-6 lg:flex lg:space-y-0 space-y-4 items-center">
            <div className="relative lg:w-[50%] h-min">
                <img className="ba" loading="lazy" src={image} alt=""></img>
                <div className="flex absolute w-full h-10 bottom-0 ">
                    <div onClick={()=> window.open(githubURL)} className="absolute right-0 bottom-4 w-10 hover:scale-110">
                        <GithubIcon/>
                    </div>
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
                    tags?.map((tag, _) => (
                        <ContentTag text={tag}/>
                    ))
                }
                </div>
            </div>
    </div>

    )
}