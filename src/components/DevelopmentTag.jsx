export default function DevelopmentTag({type}) {
    if(type=='doing') {
        return (
            <img src="https://i.imgur.com/yUlXqQK.png" alt="doing" srcset=""></img>
        )
    } else if (type=='done') {
        return (
            <img className="w-[60px] h-[25px]" src="https://i.imgur.com/n8nELsw.png" alt="done" srcset=""></img> 
        )
    } else if (type=='stage') {
        return (
            <img className="w-[15%]" src="" alt="stage" srcset=""></img>
        )
    }
}