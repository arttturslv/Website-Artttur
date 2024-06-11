import ContentTag from "../ContentTag";
import { useState, useRef } from 'react';
export default function Post({title, tags, text}) {

    return (
        <div className='sketch-border w-[80%] relative justify-center flex items-end'>
            <div className='bg-platinum absolute w-[95%] self-center top-[-0.8rem] h-4'></div>
            <div className='my-2 flex flex-col'>
                <div className='pl-8 overflow-hidden space-y-1  text-left w-[95%]'>
                    <h3 className='text-[1.3rem] font-bold'>{title}</h3>
                    
                    <div className="flex gap-2 w-4 overflow-ellipsis">
                        {
                            tags.map((content)=> (
                                <ContentTag text={content}/>
                            ))
                        }
                    </div>

                    <div className="h-[6rem] overflow-hidden">
                        <p>{text}</p>
                    </div>
                </div>
                <div className='group w-32 gap-2 transition-all flex self-end cursor-pointer'>
                    <p className='text-right'>see more</p>
                    <p className='text-right group-hover:rotate-90 delay-75 transition-all group-hover:tracking-widest	'> &#62;&#62;</p>
                </div>
            </div>
            <div className=' bg-platinum absolute w-[95%] self-center bottom-[-0.8rem] h-4'></div>
    </div>
    );
}