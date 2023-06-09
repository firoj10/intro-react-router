import React from 'react';
import { Outlet, useNavigation } from 'react-router-dom';
import Header from '../Header/Header';

const Home = () => {
    const navigation = useNavigation();
    return (
        <nav>
            <Header></Header>
            <div>{navigation.state ==='loading' && 'loding.....'}</div>
            <Outlet></Outlet>
        </nav>
    );
};

export default Home;