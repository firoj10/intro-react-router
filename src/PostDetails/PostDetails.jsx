import React from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';

const PostDetails = () => {
    const post = useLoaderData();
    const {id, title, useId, body} = post;
    const navigate = useNavigate();
    const handleGoBack= ()=>{
        navigate(-1)
    }
    return (
        <div>
            <h3>{id}</h3>
            <h3>{title}</h3>
            <h3><small>{body}</small></h3>
            <button onClick={handleGoBack}>go back</button>
        
        </div>
    );
};

export default PostDetails;