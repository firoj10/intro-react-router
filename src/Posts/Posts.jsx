import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Pot from '../Pot/Pot';


const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h2>all post : {posts.length}</h2>
         {
               posts.map(post=> <Pot key={post.id} post={post}></Pot>)  
         }
        </div>
    );
};

export default Posts;