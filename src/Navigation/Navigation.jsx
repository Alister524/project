import React from "react";
import { Link } from "react-router-dom";


const Navigation =() =>{
    return(
        <div className='Navi'> 
            <div className='Navi__links'>
                <span className="Link"><Link to="/StartPage">Начало</Link></span>
                <span className="Link"><Link to="/Posts">Работа с постами</Link></span>
                {/* <span className="Link"><Link to="/HomePage">Дополнительно</Link></span> */}
            </div>                  
        </div>
    )
}

export default Navigation;