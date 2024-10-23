import ContentTag from "../ContentTag";
import { useState, useRef } from 'react';
export default function Post({id="45", title, tags, texts}) {
    const [isOpen, setIsOpen] = useState(false)


    function handleSeeMore() {
        setIsOpen(!isOpen)
        console.log(id)
    }

    function getTextsLength(texts) {
        let length=0;

        for(let i=0; i<texts.length; i++) {
            length += texts[i].length;
        }
        return length;
    }

    return (
        <div className='sketch-border max-sm:w-[96%] w-[80%]  relative justify-center flex items-end'>
            <div className='bg-platinum dark:bg-jet absolute w-[95%] self-center top-[-0.8rem] h-4'></div>
            <div className='my-2 flex flex-col w-full'>
                <div className='max-sm:pl-2.5 pl-8 overflow-hidden space-y-1  text-left w-[95%]'>
                    <h3 className='text-[1.3rem] font-bold'>{title}</h3>
                    
                    <div className="flex gap-2 w-4 overflow-ellipsis">
                        {
                            tags?.map((content, index)=> (
                                <ContentTag key={index} text={content}/>
                            ))
                        }
                    </div>

                    <div className={`${isOpen? "h-full" : "h-[min] max-h-[6rem]"} overflow-hidden transition-all duration-200 `}>
                        {
                            texts.map((item, index)=> (
                                <p key={index}>{item}</p>
                            ))
                        }
                    </div>
                </div>
                {
                    getTextsLength(texts) > 325 && (
                        <div onClick={handleSeeMore} className='group w-32 gap-2 transition-all flex self-end cursor-pointer'>
                            <p className='text-right'>{isOpen? "see less": "see more"}</p>
                            <p className={`${isOpen? "group-hover:-rotate-90": "group-hover:rotate-90"} text-right  delay-75 transition-all group-hover:tracking-widest`}> &#62;&#62;</p>
                        </div>
                    )
                }
            </div>
            <div className=' bg-platinum dark:bg-jet  absolute w-[95%] self-center bottom-[-0.8rem] h-4'></div>
    </div>
    );
}