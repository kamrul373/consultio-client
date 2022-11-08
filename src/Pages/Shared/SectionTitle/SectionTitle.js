import React from 'react';

const SectionTitle = ({ data }) => {
    const { title, subtitle, description } = data;
    return (
        <div className='text-center mx-auto py-12'>
            <h4 className='text-primary text-2xl font-semibold'>{subtitle && subtitle}</h4>
            <h1 className='text-6xl text-[#222222] font-bold mb-4'>{title && title}</h1>
            <p className='text-xl text-[#55555A]'>{description && description}</p>
        </div>
    );
};

export default SectionTitle;