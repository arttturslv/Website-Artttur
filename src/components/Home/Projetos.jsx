import ProjetoItem from './ProjetoItem'
import Button from '../../components/Button.jsx'


import minimiza from '../../assets/projects/minimizaai.webp'
import minimiza1 from '../../assets/projects/minimizaai1.webp'

import puclove from '../../assets/projects/puclove.webp'
import puclove1 from '../../assets/projects/puclove1.webp'
import puclove2 from '../../assets/projects/puclove2.webp'

import postit from '../../assets/projects/postaai.webp'
import postit1 from '../../assets/projects/postaai1.webp'
import postit2 from '../../assets/projects/postaai2.webp'

import guru from '../../assets/projects/guru.webp'
import guru1 from '../../assets/projects/guru1.webp'

import jogodavelha from '../../assets/projects/jogodavelha.webp'

import congrats from '../../assets/projects/congrats1.webp'
import congrats2 from '../../assets/projects/congrats2.webp'
import congrats3 from '../../assets/projects/congrats3.webp'

export default function Projetos({ title, text, githubURL }) {

  return (
    <>
    <section id="projects" className='sm:px-16 px-6'>
      <h2>Projetos</h2>
      <div id="" className='flex flex-wrap gap-12 py-3 px-2 justify-center'>
        
      <ProjetoItem
          title={"Congrats"}
          text='O projeto foi desenvolvido com React e Node, permitindo que os usuários criem mensagens personalizadas para celebrar ocasiões especiais, como Natal, aniversários, amizades, entre outros. A proposta é tornar cada celebração única e especial.'
          githubURL={'https://github.com/arttturslv/Congrats'}
          websiteURL={'https://c.artttur.com/'}
          initialImage={congrats}
          images={[congrats2, congrats3]}
          devProgress={'done'}
          tags={['react', 'javascript', 'tailwind', 'node', 'express', 'mongoose']}
        />
        
        <ProjetoItem
          title={"Posta aí"}
          text="Este projeto foi desenvolvido com React e Tailwind no frontend, Node.js no backend e MongoDB como banco de dados. A ideia principal deste projeto foi disponibilizar um site em que qualquer pessoa pudesse contribuir colocando anotações na homepage."
          githubURL={'https://github.com/arttturslv/Posta-ai'}
          websiteURL={'https://posta-ai.vercel.app/'}
          initialImage={postit}
          images={[postit1, postit2]}
          devProgress={'done'}
          tags={['react', 'node.js', 'mongodb', 'tailwind']}
        />

        <ProjetoItem
          title={"Minimiza aí"}
          text="Este projeto foi desenvolvido para criar uma interface front-end integrada ao meu back-end. O desenvolvimento começou pelo back-end, com foco em aprofundar o entendimento de conceitos básicos, como o uso do Express.js."
          githubURL={'https://github.com/arttturslv/MinimizaAi'}
          websiteURL={'https://s.artttur.com/'}
          initialImage={minimiza}
          images={[minimiza1]}
          devProgress={'done'}
          tags={['react', 'node.js', 'mongodb', 'tailwind', 'express', 'mongoose']}
        />

        <ProjetoItem
          title={"Jogo da Velha"}
          text="Este projeto foi desenvolvido para praticar o uso do React Native, bem como a utilização do React Navigation (stack) e o suporte a múltiplos idiomas com o i18next, que alterna entre português e o inglês. O jogo está disponível em APK no GitHub."
          githubURL={'https://github.com/arttturslv/tic-tac-toe'}
          initialImage={jogodavelha}
          devProgress={'done'}
          tags={['react-native', 'stack-navigation', 'i18next']}
        />

        <ProjetoItem
          title={"PUCLove"}
          text="Projeto gigante que está sendo refatorado, onde utilizamos React e Tailwind no frontend, Java no backend e MongoDB como banco de dados. Nesse trabalho, fiquei responsável pela parte do frontend, desenvolvendo grande parte do visual no Figma. Também fiquei responsável pela codificação das páginas Home, Matches, Política de Privacidade, Não Encontrado e outras funcionalidades, como componentes de interesses, requisições para o backend e a pesquisa de música no Spotify."
          githubURL={'https://github.com/arttturslv/puclove'}
          initialImage={puclove}
          images={[puclove1, puclove2]}
          devProgress={'done'}
          tags={['react', 'java', 'mongodb', 'tailwind']}
        />

        <ProjetoItem
          title={"Guru sabedoria"}
          text='Este projeto foi desenvolvido utilizando HTML, CSS, JS e Bootstrap. O foco deste trabalho foi reforçar os conhecimentos sobre APIs, além de entender mais sobre animações CSS e o modo noturno. Também foi meu primeiro contato com o design de interfaces, onde, antes de tudo, pensei em como o website seria e como os elementos se complementariam. Foi possível aprender animações "infinite" para fazer o monge flutuar, o modo noturno que muda o fundo de azul para amarelo, a animação de digitação para exibir o conteúdo recebido pela API, além de efeitos sonoros e como os navegadores os bloqueiam até que o usuário interaja com a tela (aplicado ao clicar no monge).'
          githubURL={'https://github.com/arttturslv/Guru-sabedoria'}
          websiteURL={'https://arttturslv.github.io/Guru-sabedoria/'}
          initialImage={guru}
          images={[guru1]}
          devProgress={'done'}
          tags={['css', 'html', 'javascript']}
        />


        
      </div>
    </section>
    <div className=' flex justify-center w-[100%] h-16'>
      <Button content={"Ver mais no Github"} action={() => window.open('https://github.com/arttturslv/')}></Button>
    </div>
    </>
  )
}