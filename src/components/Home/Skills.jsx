
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
        <section id="skills"  className='px-16'>
          <h2>Conhecimentos</h2>
          <div id="skills-container" className='flex flex-wrap gap-3 py-3 justify-center'>
            <TechItem techName={'React'} techImage={reactIcon}/>
            <TechItem techName={'JavaScript'} techImage={javaScriptIcon}/>
            <TechItem techName={'Tailwind'} techImage={tailwindIcon}/>
            <TechItem techName={'CSS'} techImage={cssIcon}/>
            <TechItem techName={'HTML'} techImage={htmlIcon}/>
            <TechItem techName={'React Native'} techImage={reactNativeIcon}/>
            <TechItem techName={'Figma'} techImage={figmaIcon}/>
            <TechItem techName={'Wordpress'} techImage={wordpressIcon}/>
            <TechItem techName={'Java'} techImage={javaIcon}/>
            <TechItem techName={'GIT'} techImage={gitIcon}/>
          </div>
        </section>
    )
}