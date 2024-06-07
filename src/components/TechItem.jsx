
export default function techItem({techName, techImage}) {
    return (
        <div className='ba w-min'>

            <div className='px-2 w-max py-0.5 flex items-center gap-3'>
                <img src={techImage} alt={`${techName} icon`} />
                <h4 className=" text-[1.2rem] ">{techName}</h4>
            </div>
        </div>

    )
}