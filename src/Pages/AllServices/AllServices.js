import React from 'react';
import { useLoaderData } from 'react-router-dom';
import pageTitle from '../../utility/pageTitle';
import Services from '../Home/Services/Services';

const AllServices = () => {
    // page title
    pageTitle("Services")
    const services = useLoaderData();
    return (
        <div>
            <Services services={services}></Services>
        </div>
    );
};

export default AllServices;