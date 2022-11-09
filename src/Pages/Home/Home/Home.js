import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import pageTitle from '../../../utility/pageTitle';
import Services from '../../Shared/Services/Services';
import Banner from "../Banner/Banner";
import Contact from '../Contact/Contact';
import FAQ from '../FAQ/FAQ';
import Step from '../Step/Step';


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
            <Step></Step>
            <FAQ></FAQ>
            <Contact></Contact>
        </div>
    );
};

export default Home;