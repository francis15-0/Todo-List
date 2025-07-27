export default function Header({theme, update}){
    function updateTheme(){
        if(theme === "light"){
            update('dark')
        }
        else{
             update("light")
        }
    }

    return(
        <>
            <div className="header">
                <p>Todo</p>
                <img src={theme == "light" ? "images/icon-moon.svg": "images/icon-sun.svg"} alt="Icon" onClick={updateTheme} />
            </div>
        </>
    )
} 