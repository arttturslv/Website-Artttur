import DevelopmentTag from "../DevelopmentTag"
import ContentTag from "../ContentTag"

import githubIcon from '../../assets/icons/contact/github.svg'
export default function ProjetoItem({title, text, githubURL}) {
    return (
        <div className="block px-6 sm:px-16 gap-6 lg:flex lg:space-y-0 space-y-4 items-center">
            <div className="relative lg:w-[50%] h-min">
                <img className="ba " loading="lazy" src="assets/Sections/preview_projetos/puclove.webp" alt=""></img>
                <div className="flex absolute w-full h-10 bottom-0 ">
                    <img className="absolute right-2 bottom-4 hover:scale-110" src={githubIcon} alt="" srcset="" />                   
                </div>
            </div>
            <div className="lg:w-[50%]">
                <div className="flex gap-1">
                    <h5 className="text-[1.4rem]">PucLove 💑 - </h5> 
                    <DevelopmentTag type={'done'}/> 
                </div>
                <p className="sm:text-[1.1em] text-[0.9rem] text-left ">Projeto gigante utilizando no frontend React e Tailwind, Java no backend e Mongo como Banco de Dados.</p>
                <p className="sm:text-[1.1em] text-[0.9rem] text-left">Nesse trabalho fiquei responsavel pela parte do frontend, desenvolvendo grande parte do visual no Figma <a className="onClickMouse hover-effect" onclick="(openLink('https://www.figma.com/file/Dviet4zzvjYQ6hoq31gviE/PUCLOVE?type=design&node-id=611-133&mode=design&t=0Wy2rSSEpzSE4tQ1-0'))" > (Acesse aqui🔗)</a>. E também fiquei responsável no codificamento das paginas Home, Matches, Politica de privacidade, Não encontrado e outras funcionalidades como componentes de interesses, requisições para o backend e a pesquisa de musica no spotify.</p>
                <div className="gap-2 flex flex-wrap ">
                <ContentTag text='html'/>
                <ContentTag text='html'/>
                <ContentTag text='html'/>
                <ContentTag text='html'/>
                </div>
            </div>
    </div>

    )
}