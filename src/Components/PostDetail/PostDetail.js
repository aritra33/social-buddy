import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Axios from 'axios';
import './PostDetail.css';
import PostComments from '../PostComments/PostComments';

const PostDetail = () => {
    const { id } = useParams();
    const [posts, setPosts] = useState({});
    useEffect(() => {
        const url = `https://jsonplaceholder.typicode.com/posts/${id}`;
        Axios(url)
            .then(results => setPosts(results.data))
    },);
    const { title, body } = posts;
    return (
        <div>
        <div className="postBody">
        <h2>{title}</h2>
        <h4>{body}</h4>
        </div>

        <div className="comments-text">        
        <h1 className="headLine">Comments:</h1>
        </div>
        
        <div>
        <PostComments id={id}></PostComments>
        </div>
        </div>
        
    );
};

export default PostDetail;
