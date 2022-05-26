import React from "react";
import classes from './PostButton.module.css';

export const PostButton = ({children,...arg})=> {
    return (
        <button className={classes.myButton} {...arg}>{children}</button>
    )
}