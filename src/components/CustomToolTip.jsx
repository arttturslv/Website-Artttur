import { useState } from "react";

export default function CustomToolTip ({text, textAction,  children}) {
    const [textContent, setTextContent] = useState(text);
    return (
        <div className="flex flex-col group relative" onMouseLeave={()=>setTextContent(text)} onClick={() => setTextContent(textAction)}>
            <div className="bg-[#2A2A2C] lowercase text-white  opacity-0 absolute bottom-[100%] group-hover:opacity-100 px-2 text-[14px] rounded-sm transiton-all duration-200">
                {textContent}
            </div>
            <div>
                {children}
            </div>
        </div>
    )
}
