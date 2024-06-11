import DevelopmentTag from "../DevelopmentTag"
import ContentTag from "../ContentTag"
import githubIcon from '../../assets/icons/contact/Github.jsx'
import ProjetoItem from './ProjetoItem'
import Button from '../../components/Button.jsx'

import puclove from '../../assets/projects/puclove.webp'
import postit from '../../assets/projects/post-it.webp'

export default function Projetos({ title, text, githubURL }) {

  return (
    <>
    <section id="projects" className='sm:px-16 px-6'>
      <h2>Projetos</h2>
      <div id="" className='flex flex-wrap gap-12 py-3 px-2 justify-center'>
        <ProjetoItem
          title={"Post It 📋"}
          text="Esse projeto é uma continuação do trabalho realizado para a disciplina de Desenvolvimento Web - FullStack, onde está sendo desenvolvido em React e Tailwind no frontend, Node.JS no backend e Mongo como Banco de Dados. A ideia principal deste projeto é disponilizar um site em que qualquer pessoa possa contribuir colocando anotações na homepage e futuramente, penso em adicionar mais funcionalidades, como cadastro e login para que os usuários possam salvar suas anotações, curtir, editar etc."
          githubURL={'https://github.com/arttturslv/Posta-ai'}
          image={postit}
          devProgress={'done'}
          tags={['react', 'node.js', 'mongodb']}
        />

        <ProjetoItem
          title={"PUCLove 💘"}
          text="Projeto gigante utilizando no frontend React e Tailwind, Java no backend e Mongo como Banco de Dados. Nesse trabalho fiquei responsavel pela parte do frontend, desenvolvendo grande parte do visual no Figma. E também fiquei responsável no codificamento das paginas Home, Matches, Politica de privacidade, Não encontrado e outras funcionalidades como componentes de interesses, requisições para o backend e a pesquisa de musica no spotify."
          githubURL={'https://github.com/arttturslv/puclove'}
          image={puclove}
          devProgress={'done'}
          tags={['react', 'java', 'mongodb']}
        />
        
      </div>
    </section>
    <div className=' flex justify-center w-[100%] h-16'>
      <Button content={"Ver mais no Github"} action={console.log("aa")}></Button>
    </div>
    </>
  )
}