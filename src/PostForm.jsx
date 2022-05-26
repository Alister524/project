import React,{useState} from "react";
import { PostButton } from "./PostButton/PostButton";
import PostInput from "./PostInput/PostInput";


const PostForm = ({create}) =>{
    
    const [post, setPost] = useState({title: '', body: ''})

    const addNewPost = (event) =>{
        event.preventDefault()
        const newPost = {...post, id: Date.now()}
        create(newPost)
        setPost({title: '', body: ''})    
  }

  return (
    <div className="App">
      <PostInput
        value = {post.title}
        onChange = {e => setPost({...post, title: e.target.value})}
        type = 'text'
        placeholder = 'Наименование поста'
      />
      <PostInput
        value = {post.body}
        onChange = {e => setPost({...post, body: e.target.value})}
        type = 'text' 
        placeholder = 'Описание поста'
      />
      <PostButton onClick ={addNewPost}>Добавить новый пост</PostButton>
    </div>
)}

export default PostForm;