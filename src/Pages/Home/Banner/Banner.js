import React from 'react';
import { Link } from 'react-router-dom';
import banner from "../../../assets/img/banner-1.jpg"
import "./banner.css";
const Banner = () => {
    return (
        <div className='banner-container px-6 mt-4'>
            <div className="hero lg:min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content banner">
                    <div className="lg:w-[60%] mx-auto">
                        <h3 className='lg:text-xl text-lg mb-4 italic'>Effective Immigration Solution</h3>
                        <h1 className="mb-5 lg:text-5xl text-2xl font-bold">Empowering Peoples Immigration Confidently</h1>
                        <p className="mb-5 lg:text-xl text-lg">Get professional guidance from an Expert Immigration Consultant</p>
                        <Link to="/services">
                            <button className="btn btn-primary lg:btn-wide">Get Started</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;