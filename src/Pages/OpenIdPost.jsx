import React, {useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import PostServer from "../API/PostServer";
import { useAxios } from "../CustomHooks/UseAxios";
import LoadLoader from "../Loaders/LoadLoader";

const OpenIdPost = () =>{

    const params = useParams()
    const [post, setPost] = useState({});
    const [comments, setComments] = useState([]);
    const [fetchPostById, isLoading] = useAxios(async (id) => {
        const response = await PostServer.getById(id)
        setPost(response.data);
    })
    const [fetchComments, isComLoading] = useAxios(async (id) => {
        const response = await PostServer.getCommentsByPostId(id)
        setComments(response.data);
    })

    useEffect((id) => {
        fetchPostById(params.id)
        fetchComments(params.id)
    }, [])

    const back = useNavigate()

    const goHome = () =>{
        back('/Posts')
    }

    return (
        <div>
            <h2>Вы открыли страницу поста под номером - {params.id}</h2>
            {isLoading
                ? <LoadLoader/>
                :  <div>{post.id}. {post.title}</div>
            }
            <h3>
                Комментарии
            </h3>
            {isComLoading
                ? <LoadLoader/>
                : <div>
                    {comments.map(comm =>
                        <div key={comm.id} style={{marginTop: 15}}>
                            <h5>{comm.email}</h5>
                            <div>{comm.body}</div>
                        </div>
                    )}
                </div>
            }
            <h3><br/>Если пост не подгрузился, необходимо вернуться на общую страницу. Для этого нажмите кнопку "Назад"</h3>
            <button className="goHome" onClick={goHome}>Назад</button>
        </div>
    );
};

export default OpenIdPost;

