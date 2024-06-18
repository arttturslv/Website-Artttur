import ProjetoItem from './ProjetoItem'
import Button from '../../components/Button.jsx'

import puclove from '../../assets/projects/puclove.webp'
import puclove1 from '../../assets/projects/puclove1.webp'
import puclove2 from '../../assets/projects/puclove2.webp'

import postit from '../../assets/projects/postaai.webp'
import postit1 from '../../assets/projects/postaai1.webp'
import postit2 from '../../assets/projects/postaai2.webp'

import guru from '../../assets/projects/guru.webp'
import guru1 from '../../assets/projects/guru1.webp'

import jogodavelha from '../../assets/projects/jogodavelha.webp'

import alarmme from '../../assets/projects/alarmme.webp'

export default function Projetos({ title, text, githubURL }) {

  return (
    <>
    <section id="projects" className='sm:px-16 px-6'>
      <h2>Projetos</h2>
      <div id="" className='flex flex-wrap gap-12 py-3 px-2 justify-center'>
        <ProjetoItem
          title={"Post It 📋"}
          text="Este projeto foi desenvolvido com React e Tailwind no frontend, Node.js no backend e MongoDB como banco de dados. A ideia principal deste projeto foi disponibilizar um site em que qualquer pessoa pudesse contribuir colocando anotações na homepage."
          githubURL={'https://github.com/arttturslv/Posta-ai'}
          websiteURL={'https://posta-ai.vercel.app/'}
          initialImage={postit}
          images={[postit1, postit2]}
          devProgress={'done'}
          tags={['react', 'node.js', 'mongodb', 'tailwind']}
        />

        <ProjetoItem
          title={"Jogo da Velha 🎮"}
          text="Este projeto foi desenvolvido para praticar o uso do React Native, bem como a utilização do React Navigation (stack) e o suporte a múltiplos idiomas com o i18next, que alterna entre português e inglês. O jogo está disponível em APK no GitHub."
          githubURL={'https://github.com/arttturslv/tic-tac-toe'}
          initialImage={jogodavelha}
          devProgress={'done'}
          tags={['react-native', 'stack-navigation', 'i18next']}
        />

        <ProjetoItem
          title={"PUCLove 💘"}
          text="Projeto gigante que está sendo refatorado, onde utilizamos React e Tailwind no frontend, Java no backend e MongoDB como banco de dados. Nesse trabalho, fiquei responsável pela parte do frontend, desenvolvendo grande parte do visual no Figma. Também fiquei responsável pela codificação das páginas Home, Matches, Política de Privacidade, Não Encontrado e outras funcionalidades, como componentes de interesses, requisições para o backend e a pesquisa de música no Spotify."
          githubURL={'https://github.com/arttturslv/puclove'}
          initialImage={puclove}
          images={[puclove1, puclove2]}
          devProgress={'done'}
          tags={['react', 'java', 'mongodb', 'tailwind']}
        />

        <ProjetoItem
          title={"Guru sabedoria ⛩"}
          text='Este projeto foi desenvolvido utilizando HTML, CSS, JS e Bootstrap. O foco deste trabalho foi reforçar os conhecimentos sobre APIs, além de entender mais sobre animações CSS e o modo noturno. Também foi meu primeiro contato com o design de interfaces, onde, antes de tudo, pensei em como o website seria e como os elementos se complementariam. Foi possível aprender animações "infinite" para fazer o monge flutuar, o modo noturno que muda o fundo de azul para amarelo, a animação de digitação para exibir o conteúdo recebido pela API e também sobre efeitos sonoros e como os navegadores os bloqueiam até que o usuário interaja com a tela (aplicado ao clicar no monge).'
          githubURL={'https://github.com/arttturslv/Guru-sabedoria'}
          websiteURL={'https://arttturslv.github.io/Guru-sabedoria/'}
          initialImage={guru}
          images={[guru1]}
          devProgress={'done'}
          tags={['css', 'html', 'javascript']}
        />

        <ProjetoItem
          title={"Alarmme ⏰"}
          text='Este projeto está sendo desenvolvido utilizando React Native e Expo. O objetivo principal é aprofundar o conhecimento em desenvolvimento de aplicações mobile, explorando a implementação de animações e transições, além de trabalhar com timers, permissões e notificações.'
          githubURL={'https://github.com/arttturslv/alarmme'}
          figmaURL={'https://www.figma.com/design/Nwkstcm1kFMWWd4zqIRbrn/alarmme---mobile?node-id=0-1&t=ZZOQ8aeG8L06qB81-1'}
          initialImage={alarmme}
          devProgress={'doing'}
          tags={['react-native', 'stack-navigation', 'react-animated']}
        />
        
      </div>
    </section>
    <div className=' flex justify-center w-[100%] h-16'>
      <Button content={"Ver mais no Github"} action={() => window.open('https://github.com/arttturslv/')}></Button>
    </div>
    </>
  )
}