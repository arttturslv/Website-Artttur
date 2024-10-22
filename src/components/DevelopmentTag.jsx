export default function DevelopmentTag({type}) {
    if(type=='doing') {
        return (
            <img className="w-[72px] h-[24px]" src="https://i.imgur.com/yUlXqQK.png" alt="doing"></img>
        )
    } else if (type=='done') {
        return (
            <img className="w-[72px] h-[24px]" src="https://i.imgur.com/n8nELsw.png" alt="done" ></img> 
        )
    } else if (type=='stage') {
        return (
            <img className="w-[15%]" src="" alt="stage"></img>
        )
    }
}