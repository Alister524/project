import React, {useEffect, useState} from 'react';
import PostModal from '../ModalWindow/PostModal';
import { PostButton } from '../PostButton/PostButton';
import PostFilter from '../PostFilter';
import PostForm from '../PostForm';
import PostLogic from '../PostLogic';
import {usePost} from '../CustomHooks/UseSortPost.jsx';
import PostServer from '../API/PostServer';
import LoadLoader from '../Loaders/LoadLoader';
import { useAxios } from '../CustomHooks/UseAxios';
import { getPagePost } from '../Pagination/pagination.jsx';
import Pages from '../Pagination/Pages';

function Posts() {

    const [posts, setPosts] = useState([])

    const [filter, setFilter] = useState({sort: '', search: ''})
    const [modal, setModal] = useState(false)
    const sortAndSearchPost = usePost(posts, filter.sort, filter.search)
    const [totalPages, setTotalPages] = useState(0)
    const [limitPost, setLimitPost] = useState(10)
    const [pagePost, setPagePost] = useState(1)

    const [newFetchPost, loadPost, postError] = useAxios(async() =>{
        const response = await PostServer.getAllPost(limitPost, pagePost);
        setPosts(response.data)
        const totalCount = response.headers['x-total-count'] 
        setTotalPages(getPagePost(totalCount, limitPost))
    })

    useEffect(() =>{
        newFetchPost()
    },[pagePost])

    const createPost = (newPost) =>{
        setPosts([...posts,newPost])
        setModal(false)
    }

    const removePost = (post) =>{
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const changePage = (page) =>{
        setPagePost(page)
    }

    return(
        <div className = 'App'>
        <PostButton style = {{marginTop: 30}} onClick = {() => setModal(true)}>Создать новый пост</PostButton> 

        <PostModal visible={modal} setVisible = {setModal}>
            <PostForm create = {createPost}/>   
        </PostModal>
        
        <hr style={{margin: '15px 0'}} />
        
        <PostFilter filter = {filter} setFilter = {setFilter} />

        {postError && <h1>Произошла ошибка загрузки {postError}</h1>}

        {loadPost
            ? <div style={{justifyContent: 'center', display: 'flex'}}><LoadLoader /></div>
            :<PostLogic remove={removePost} posts={sortAndSearchPost} title='Список постов' /> 
        }
        
        <Pages 
            page = {pagePost} 
            changePage = {changePage} 
            totalPages = {totalPages} 
        />
    </div>
  );
}

export default Posts;
