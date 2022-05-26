import React from "react";
import { getPagesPost } from "./pagination";
import '../Style/App.css'


const Pages = ({totalPages, pagePost, changePage}) =>{
    let pagesArr = getPagesPost(totalPages)

    return(
        <div className='page__shell'>
            {pagesArr.map(p =>
            <span 
                onClick={() => changePage(p)}
                key = {p} 
                className={pagePost === p ? 'page page__tap' : 'page'}>
                    {p}
            </span>
            )}
        </div>    
    )
}

export default Pages;