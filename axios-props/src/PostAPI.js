//post title
import React, {useEffect, useState} from "react";
import axios from "axios";

const PostAPI = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
        .then(response => {setData(response.data)
        })
        .catch(error =>
            console.log("error 발생", error));
    }, []);

    return(
        <>
            {data.map(post => (
                <div key={post.id}>
                    <p>제목 : {post.title}</p>
                    <p>내용 : {post.body}</p>
                </div>
            ))}
        </>
    )
}

export default PostAPI;