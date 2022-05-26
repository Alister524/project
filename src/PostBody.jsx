import { useNavigate } from "react-router-dom";
import { PostButton } from "./PostButton/PostButton";


// import { PostLike } from "./PostLike";

const PostBody = (props) =>{
    const navigate = useNavigate();    

    const goPost = () => navigate(`/Posts/${props.post.id}`, {replace: true})

    return(
        <div className="post">
            <div className="post_body">
                <strong>{props.number}: {props.post.title}</strong>
                <div>
                    <em>{props.post.body}</em>
                </div>
            </div>
                <div className="post__btn">
                <PostButton onClick = {goPost}>
                        Открыть
                </PostButton>
                <PostButton onClick={() => props.remove(props.post)}>
                        Удалить
                </PostButton>
                </div>

            {/* <div className="like"><PostLike /></div> */}
        </div>
    )
}

export default PostBody;