import { useState } from "react"

export default function List(){
    const [isChecked, setIschecked] = useState(false);
    function handleClick(){
        setIschecked(!isChecked)
    }
    return(
        <>
        <div className="list">
            <div className={isChecked === false ? "circle-check" : "circle-check circle-checked"} onClick={handleClick}>
                <img src="images/icon-check.svg" alt="check" />
            </div> 
                <h6>hello world</h6>
                <img src="images/icon-cross.svg" alt="cross" />
        </div>
        
        </>
    )
}