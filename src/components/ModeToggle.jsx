import { useState } from "react"
import moon from "../assets/images/icon-moon.svg"
import sun from "../assets/images/icon-sun.svg"
export default function ModeToggle({theme, set}){
    
    function handleClick(){
        if(theme){
            set(false)
        }
        else{
            set(true)
        }

    }
    return(
        <>
            <img className="toggle" src={theme? sun: moon} alt="moon" onClick={handleClick}/>
            {console.log("The dark is " + theme)}

        </>

    )
}