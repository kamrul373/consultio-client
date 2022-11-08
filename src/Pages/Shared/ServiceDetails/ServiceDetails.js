import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Content from './Content';

const ServiceDetails = () => {
    const serviceDetails = useLoaderData();
    return (
        <div>
            <Content serviceDetails={serviceDetails}></Content>
        </div>
    );
};

export default ServiceDetails;