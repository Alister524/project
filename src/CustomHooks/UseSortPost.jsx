import { useMemo } from "react";

export const useSortPost =(posts, sort) =>{
    const sortedPost = useMemo(() =>{
        if(sort){
          return [...posts].sort((a,b) => a[sort].localeCompare(b[sort]))
        }
        return posts
      },[sort, posts])
    
      return sortedPost;
}

export const usePost = (posts, sort, search) =>{

    const sortedPost = useSortPost(posts,sort)

    const sortAndSearchPost = useMemo(() =>{
        return sortedPost.filter(post => post.title.toLowerCase().includes(search.toLowerCase()))
      },[search, sortedPost])
    
      return sortAndSearchPost;
}