import React from 'react';
import { useLoaderData } from 'react-router-dom';
import pageTitle from '../../utility/pageTitle';
import Services from '../Shared/Services/Services';


const AllServices = () => {
    // page title
    pageTitle("Services")
    const services = useLoaderData();
    return (
        <div className='mt-28'>
            <Services services={services}></Services>
        </div>
    );
};

export default AllServices;