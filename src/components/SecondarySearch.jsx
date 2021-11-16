import React from "react"
import "../stylesheets/secondarySearch.css"
import { BsFillCameraFill} from 'react-icons/bs';


const SecondarySearch=()=>{
    return(
        <div className="secondary-container">
            <input className="input-field"/>
            <BsFillCameraFill/>
            
        </div>
    )
}

export default SecondarySearch