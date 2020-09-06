import React, { useEffect, useState } from 'react';
import Axios from 'axios';
import ShowPosts from '../ShowPosts/ShowPosts';
import './Posts.css';

const Posts = () => {
    const [posts,setPosts]=useState([]);
    useEffect(()=>{
        const url ='https://jsonplaceholder.typicode.com/posts';
        Axios(url)
        .then(results=>setPosts(results.data))
    },[]);
    return (
        <div >
            <div className='styleContent'>
            {
                posts.map(post=><ShowPosts key={post.id} post={post}></ShowPosts>)
            }
            </div>
            
        </div>
    );
};

export default Posts;