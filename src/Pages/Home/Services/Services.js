import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';
import Service from './Service';

const Services = ({ services }) => {
    const data = {
        title: "Immigration & Visa Services",
        subtitle: "Modern Immigration",
        description: "The Most Trusted Immigration and Visa Consultant can assist you in obtaining a favorable result in your case."
    }
    return (
        <div >
            <SectionTitle data={data}></SectionTitle>
            <div className='grid grid-cols-1 lg:grid-cols-3 justify-items-center gap-8'>
                {
                    services.map(service => <Service
                        key={service._id}
                        service={service}
                    ></Service>)
                }
            </div>
        </div>
    );
};

export default Services;