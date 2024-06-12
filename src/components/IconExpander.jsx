export default function IconExpander({action, IconJSX, text}) {
    return (
        <div onClick={action} className="pointer group hover:bg-jet transition-all duration-200 flex items-center hover:px-2 rounded-xl bottom-4  hover:scale-110">
            <div className="">
                {IconJSX}
            </div>
            <h4 className="text-white hidden group-hover:block transition-all duration-600 group-hover:delay-200 font-medium">{text}</h4>
        </div>
    )
}