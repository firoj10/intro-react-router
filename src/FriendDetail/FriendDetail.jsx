import React from 'react';
import { useLoaderData } from 'react-router-dom';

const FriendDetail = () => {
    const friend = useLoaderData();
    console.log(friend);
    return (
        <div>
           <h3>name: {friend.name}</h3>
           <h3>name: {friend.phone}</h3>
           <h3>name: {friend.email}</h3>
        </div>
    );
};

export default FriendDetail;