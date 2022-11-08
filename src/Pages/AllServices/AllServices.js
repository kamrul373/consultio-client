import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Services from '../Home/Services/Services';

const AllServices = () => {
    const services = useLoaderData();
    return (
        <div>
            <Services services={services}></Services>
        </div>
    );
};

export default AllServices;