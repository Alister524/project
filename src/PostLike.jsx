import React,{useState} from "react";

export const PostLike = () =>{

    const [like, setLike] = useState(0)

    function likePlus (){
        setLike(like + 1)
    }

    function likeMinus(){
        setLike(like - 1)
    }
    
    return(
        <div className="like">
            <button onClick={likePlus}>Нравится</button><br/>            
            <button onClick={likeMinus}>Не нравится</button> <h3>{like}</h3>
        </div>
    )
}