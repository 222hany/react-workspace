import React, { useEffect, useState } from "react";
import axios from "axios";

const User = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        axios.get('https://jsonplaceholder.typicode.com/users')
        .then(response => {setData(response.data)
        })
        .catch(error =>
            console.log("error입니다", error));
    }, []);

    return(
        <>
            {data.map(post => (
                <div key={post.id}>
                    <p>Name : {post.name}</p>
                    <p>UserName : {post.username}</p>
                    <p>Email : {post.email}</p>
                    <p>Address : {post.address && post.address.street}</p>
                    <br/>
                </div>
            ))}
        </>
    )
}

export default User;