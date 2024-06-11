

import { useState } from 'react'

export default function ProjetoImage ({imageInicial, images}) {

    const [imageCapa, setImagemCapa] = useState(imageInicial)

    function handleChange(e) {
        setImagemCapa(e.target.src);
        e.target.style.transition-all;
    }

    return (
<div className='relative group transition-all duration-200 '>
    <img className="sketch-border transition-all duration-200 " loading="lazy" src={imageCapa} alt="" />
    <div className='max-sm:hidden group-hover:opacity-100 flex group-hover:transition-all duration-[500ms] absolute w-32 px-4 bottom-0 opacity-0'>
        <img onClick={(e) => handleChange(e)} className="cursor-pointer hover:scale-110 sketch-border p-0 transition duration-500 delay-100" loading="lazy" src={imageInicial} alt="" />
        {
            images?.map((item) => (
                <img onClick={(e) => handleChange(e)} className="cursor-pointer hover:scale-110 sketch-border p-0 transition duration-500 delay-100" loading="lazy" src={item} alt="" />
            ))
        }
</div>
</div>
    )
}