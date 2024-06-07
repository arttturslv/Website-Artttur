
import TechItem from '../TechItem.jsx'
import tailwindIcon from '../../assets/icons/tech/Tailwind.png'

export default function Skills() {
    return (
        <section id="skills"  className='px-16'>
          <h2>Conhecimentos</h2>
          <div id="skills-container" className='flex flex-wrap gap-3 py-3 justify-center'>
            <TechItem techName={'Tailwind'} techImage={tailwindIcon}/>
            <TechItem techName={'Tailwind'} techImage={tailwindIcon}/>
            <TechItem techName={'Tailwind'} techImage={tailwindIcon}/>
            <TechItem techName={'Tailwind'} techImage={tailwindIcon}/>
            <TechItem techName={'Tailwind'} techImage={tailwindIcon}/>
            <TechItem techName={'Tailwind'} techImage={tailwindIcon}/>
            <TechItem techName={'Tailwind'} techImage={tailwindIcon}/>
            <TechItem techName={'Tailwind'} techImage={tailwindIcon}/>
            <TechItem techName={'Tailwind'} techImage={tailwindIcon}/>
          </div>
        </section>
    )
}