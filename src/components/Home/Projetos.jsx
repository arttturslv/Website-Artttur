import DevelopmentTag from "../DevelopmentTag"
import ContentTag from "../ContentTag"

import githubIcon from '../../assets/icons/contact/github.svg'
import ProjetoItem from './ProjetoItem'

export default function Projetos({title, text, githubURL}) {
    return (
        <section id="projetos"  className='px-16'>
          <h2>Projetos</h2>
          <div id="" className='flex flex-wrap gap-12 py-3 justify-center'>
            <ProjetoItem />
            <ProjetoItem />
            <ProjetoItem />
            <ProjetoItem />
            <ProjetoItem />
          </div>
        </section>

    )
}