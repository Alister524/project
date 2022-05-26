import React from "react";
import { Routes, Route } from "react-router-dom";
import { StartPage } from "./Pages/StartPage";
import Posts from "./Pages/Posts";
import OpenIdPost from "./Pages/OpenIdPost";


const PageRoute = () =>{
    return(
        <div>
            <Routes>
                <Route path='/' element = {<StartPage />} />
                <Route path='/StartPage' element = {<StartPage />} />
                <Route path='/Posts' element = {<Posts />} />
                <Route path='/Posts/:id' element = {<OpenIdPost />} />
            </Routes>
        </div>
    )
}

export default PageRoute;