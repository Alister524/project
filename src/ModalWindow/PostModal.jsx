import React from "react";
import cl from './PostModal.module.css'

const PostModal = ({children, visible, setVisible}) =>{

    const rootModal = [cl.myModal]

    if(visible){
        rootModal.push(cl.active)
    }

    return(
        <div className={rootModal.join(' ')} onClick = {() => setVisible(false)}>
            <div className={cl.myModalContent} onClick = {(e) => e.stopPropagation() }>
                {children}
            </div>
        </div>
)}

export default PostModal;