import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import pageTitle from '../../../utility/pageTitle';
import Services from '../../Shared/Services/Services';
import Banner from "../Banner/Banner";


const Home = () => {
    // page title
    pageTitle("Home");
    const services = useLoaderData();
    return (
        <div>
            <Banner></Banner>
            <Services services={services}></Services>
            <div className='text-center mt-8 py-8'>
                <Link to="/services">
                    <button className='btn btn-secondary btn-wide'>See All</button>
                </Link>
            </div>
        </div>
    );
};

export default Home;