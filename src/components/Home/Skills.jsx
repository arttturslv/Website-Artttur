
import TechItem from '../TechItem.jsx';

import tailwindIcon from '../../assets/icons/tech/Tailwind.png'
import reactIcon from '../../assets/icons/tech/React.png'
import javaIcon from '../../assets/icons/tech/Java.png'
import gitIcon from '../../assets/icons/tech/Git.png'
import wordpressIcon from '../../assets/icons/tech/Wordpress.png'
import figmaIcon from '../../assets/icons/tech/Figma.png'
import htmlIcon from '../../assets/icons/tech/HTML.png'
import cssIcon from '../../assets/icons/tech/CSS.png'
import reactNativeIcon from '../../assets/icons/tech/React Native.png'
import javaScriptIcon from '../../assets/icons/tech/JavaScript.png'

export default function Skills() {
    return (
        <section id="knowledge"  className='sm:px-16 px-6 '>
          <h2>Conhecimentos</h2>
          <div id="skills-container" className='px-2 flex flex-wrap gap-3 py-3 justify-center'>
            <TechItem name={'React'}  alternativeTitle={'A maravilha da modularidade'} image={reactIcon}/>
            <TechItem name={'JavaScript'}  alternativeTitle={'desenhar'} image={javaScriptIcon}/>
            <TechItem name={'Tailwind'}  alternativeTitle={'CSS 2.0'} image={tailwindIcon}/>
            <TechItem name={'CSS'}  alternativeTitle={'desenhar'} image={cssIcon}/>
            <TechItem name={'HTML'}  alternativeTitle={'desenhar'} image={htmlIcon}/>
            <TechItem name={'React Native'}  alternativeTitle={'desenhar'} image={reactNativeIcon}/>
            <TechItem name={'Figma'}  alternativeTitle={'desenhar'} image={figmaIcon}/>
            <TechItem name={'Wordpress'}  alternativeTitle={'desenhar'} image={wordpressIcon}/>
            <TechItem name={'Java'}  alternativeTitle={'desenhar'} image={javaIcon}/>
            <TechItem name={'GIT'}  alternativeTitle={'desenhar'} image={gitIcon}/>
          </div>
        </section>
    )
}