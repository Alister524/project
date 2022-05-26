import React from "react";
import {CSSTransition, TransitionGroup } from "react-transition-group";
import PostBody from "./PostBody";


const PostLogic = ({posts, title,remove}) =>{
    
    if(!posts.length){
        return (
            <h1 style = {{textAlign: 'center'}}>Посты не найдены</h1>
        )
    }

    return(
        <div className="postLogic">
            <h2 style={{textAlign: 'center'}}>{title}</h2>
            <TransitionGroup>
                {posts.map((post, index) =>
                    <CSSTransition
                    key = {post.id}
                    timeout = {500}
                    classNames = "post"
                    > 
                    
                    <PostBody post = {post} number = {index + 1} remove = {remove}/>               
                    </CSSTransition>
                            )}
            </TransitionGroup>            
        </div>
    )
}

export default PostLogic;
