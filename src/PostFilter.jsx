import React from "react";
import PostInput from "./PostInput/PostInput";
import PostSelect from "./PostSelect";

const PostFilter = ({filter, setFilter}) => {
    return(
        <div>
            <PostInput 
                value = {filter.search}
                onChange = {e => setFilter({...filter, search: e.target.value})}
                placeholder = 'Поиск ...'
            />
            
            <PostSelect 
                value = {filter.sort}
                onChange = {element => setFilter({...filter, sort: element})}
                defaultValue = 'Сортировка по ...'
                options = {[
                    {value: 'title', name: 'По наименованию'},
                    {value: 'body', name: 'По описанию'},
                ]}
            />
        </div>
    )
}

export default PostFilter;