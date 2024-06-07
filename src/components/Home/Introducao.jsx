import me from '../../assets/me.svg'
import githubIcon from '../../assets/icons/contact/github.svg'
export default function Introducao () {

        return (
            <div className='flex max-lg:flex-col-reverse max-lg:gap-12 items-center justify-around px-16 my-52'>
            <div className="introducao-text">
              <p>Oi, eu sou o</p>
              <h1>Artur</h1>
              <p>Estudante de ADS,<br></br>programador,<br></br>desenhista amador.</p>
  
              <div className="flex justify-between">
                <img onclick="openLink('https://www.instagram.com/artur.pine')" className="onClickMouse injectable scale" src={githubIcon} />
                <img onclick="openLink('https://www.instagram.com/artur.pine')" className="onClickMouse injectable scale" src={githubIcon} />
                <img onclick="openLink('https://www.instagram.com/artur.pine')" className="onClickMouse injectable scale" src={githubIcon} />
              </div>
            </div>
            <div>
            
              <img src={me} alt="desenho do artur" srcset="" />
  
            </div>
          </div>
        )
        
} 