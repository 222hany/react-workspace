import React, {useState, useEffect} from "react";
import axios from "axios";

const PostComment = () => {
    const [userData, setUserData] = useState([]);
    const [posts, SetPosts] = useState([]);
    const [PostComments, setPostComments] = useState([]);

    //API를 2개 이상 가져올 경우
    useEffect(() => {
        axios.all([
            axios.get('https://jsonplaceholder.typicode.com/users'),
            axios.get('https://jsonplaceholder.typicode.com/posts'),
            axios.get('https://jsonplaceholder.typicode.com/comments')
        ])
        //데이터를 성공적으로 가져왔을 때
        .then(axios.spread((usersReponse, commentsResponse, postsResponse) => { //axios.spread : 여러가지 응답을 개별 응답으로 나눠서 제공된 set 함수에 전달하는 역할.
            setUserData(usersReponse.data);
            SetPosts(postsResponse.data);
            setPostComments(commentsResponse.data);
        }))
        .catch(error => console.error(error));
    }, []);

    return(
        <>
            <h2>유저 정보</h2>
            {userData.map(user => (
                <p key={user.id}>{user.name}</p>
            ))}

            <h2>게시글</h2>
            {posts.map(post => (
                <p key={post.id}>{post.body}</p>
            ))}

            <h2>댓글</h2>
            {PostComments.map(comment => (
                <p key={comment.id}>{comment.body}</p>
            ))}
        </>
    )
}

export default PostComment;