import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from '../layouts/Navbar';
import Footer from '../layouts/Footer';

const Home = () => {
    
    return (
        <div className='wrapper'>
            <Navbar/>
            <div className="content-wrapper"> 
                <Outlet/>
            </div>
            <Footer/>
        </div>
    );
}

export default Home;
