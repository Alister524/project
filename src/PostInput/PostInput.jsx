import React from 'react';
import classes from './postInput.module.css'

const PostInput = (value)=>{
    return(
        <input className={classes.myInput} {...value} />
    )
}

export default PostInput;