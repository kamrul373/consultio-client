import React from 'react';

const SectionTitle = ({ data }) => {
    const { title, subtitle, description } = data;
    return (
        <div className='text-center mx-auto lg:py-12'>
            <h4 className='text-primary lg:text-2xl text-xl font-semibold'>{subtitle && subtitle}</h4>
            <h1 className='lg:text-6xl text-2xl text-[#222222] font-bold mb-4'>{title && title}</h1>
            <p className='lg:text-xl text-lg text-[#55555A] py-4'>{description && description}</p>
        </div>
    );
};

export default SectionTitle;