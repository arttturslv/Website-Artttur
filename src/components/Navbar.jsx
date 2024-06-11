import { useState } from "react";
import Menu from '../assets/icons/buttons/MenuIcon.jsx'
import Switch from "../assets/icons/buttons/SwitchIcon.jsx"
import { Link } from "react-router-dom";

export default function Navbar({setTheme, theme}) {

    const [showMenu, setShowMenu] = useState(false)
    
    function openMenu() {
        const menuMobile = document.getElementById('menuMobile');
        if(showMenu) {
            menuMobile.style.display = 'none';
        } else {
            menuMobile.style.display = 'block';
        }
        setShowMenu(!showMenu);
    }

    return (
        <header className="max-w-[1240px] justify-around flex relative left-0 top-0 py-4 ">
            <div className="overflow-hidden justify-end flex group">
                <a  href="\"><h1 className="lg:text-[3rem] text-[2.5rem] dark:text-platinum text-jet">Artttur</h1></a>
            </div>

            <div className=" px-6 flex justify-between">
                <div className=" overflow-hidden  align-middle max-md:hidden flex ">
                    <ul className="flex text-center items-center gap-1 ">
                        <li className=" px-3 text-[1.2rem] group hover:bg-jet dark:hover:bg-platinum"><a className=" dark:text-platinum text-jet group-hover:text-platinum dark:group-hover:text-jet " href="\#about">Sobre</a></li>
                        <li className=" px-3 text-[1.2rem] group hover:bg-jet dark:hover:bg-platinum"><a className=" dark:text-platinum text-jet group-hover:text-platinum dark:group-hover:text-jet" href="\#knowledge">Skills</a></li>
                        <li className=" px-3 text-[1.2rem] group hover:bg-jet dark:hover:bg-platinum"><a className=" dark:text-platinum text-jet group-hover:text-platinum dark:group-hover:text-jet" href="\#projects">Projetos</a></li>
                        <div className="size-10 pt-1 flex items-center">
                            <Switch setTheme={setTheme} theme={theme} />
                        </div>
                    </ul>
                </div>
                <div className="md:hidden flex items-center gap-6" onClick={()=> {openMenu()}}>
                    <div className="w-8 h-[20px]">
                        <Menu  theme={theme}/>
                    </div>
                    <div className="size-10 flex items-center">
                        <Switch setTheme={setTheme}  theme={theme}/>
                    </div>
                </div>
            </div>

            <div id='menuMobile' className="overflow-hidden hidden w-full absolute left-0 top-16 align-middle">
                <ul className=" text-right items-center border-y-[1px] border-jet">
                    <li className=" px-3 pr-20 text-[1.2rem] group  hover:bg-jet dark:hover:bg-platinum"><a className="  dark:text-platinum text-jet group-hover:text-platinum dark:group-hover:text-jet" href="\#about">Sobre</a></li>
                    <li className=" px-3 pr-20 text-[1.2rem] group  hover:bg-jet dark:hover:bg-platinum"><a className="  dark:text-platinum text-jet group-hover:text-platinum dark:group-hover:text-jet" href="\#knowledge">Skills</a></li>
                    <li className=" px-3 pr-20 text-[1.2rem] group  hover:bg-jet dark:hover:bg-platinum"><a className="  dark:text-platinum text-jet group-hover:text-platinum dark:group-hover:text-jet" href="\#projects">Projetos</a></li>
                </ul>
            </div>
        </header>
    )
}