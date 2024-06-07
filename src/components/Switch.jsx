import { useState } from "react";
import switchIcon from '../assets/icons/buttons/switch.svg'
export default function Switch () {
    const [isSwitchOn, setSwitchOn] = useState(false);

        return (
            <div>
                <img className="w-12" src={switchIcon} alt="" srcset="" />
            </div>
        )
        
} 