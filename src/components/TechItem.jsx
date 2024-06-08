export default function techItem({techName, techImage}) {
    return (
        <div className='ba w-min'>

            <div className=' ta px-2 w-12 sm:w-max py-0.5 flex items-center gap-3 group'>
                <img className=" group-hover:scale-105" src={techImage} alt={`${techName} icon`} />
                <div className=" group-hover:animate-typing ttt whitespace-nowrap overflow-clip text-clip">
                    <h4 className=" text-[1.2rem] hidden md:block tex ">{techName}</h4>
                </div>
            </div>
        </div>

    )
}