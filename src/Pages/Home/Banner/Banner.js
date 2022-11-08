import React from 'react';
import banner from "../../../assets/img/banner-1.jpg"
const Banner = () => {
    return (
        <div className='banner-container px-6 mt-4'>
            <div className="hero min-h-screen" style={{ backgroundImage: `url(${banner})` }}>
                <div className="hero-overlay bg-opacity-50"></div>
                <div className="hero-content text-center text-neutral-content">
                    <div className="w-[60%] mx-auto">
                        <h3 className='text-xl mb-4 italic'>Effective Immigration Solution</h3>
                        <h1 className="mb-5 text-5xl font-bold">Empowering Peoples Immigration Confidently</h1>
                        <p className="mb-5 text-xl">Get professional guidance from an Expert Immigration Consultant</p>
                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;