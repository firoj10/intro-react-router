import React from 'react';
import './Pot.css'
import { Link, useNavigate } from 'react-router-dom';

const Pot = ({post}) => {
    const navigate = useNavigate();

   const  handleNavigation = () =>{
    navigate(`/pot/${id}`);
   }

    const {id, title, body} = post;
    return (
        <div className='post'>
            <h4>Id:{id}</h4>
            <h4>Title:{title}</h4>
        <Link to={`/pot/${id}`}>Show Detals</Link>
        <Link to={`/pot/${id}`}><button>Show Post  Details</button></Link>
        <button onClick={handleNavigation}>With button handler</button>
      
        </div>
    );
};

export default Pot;
