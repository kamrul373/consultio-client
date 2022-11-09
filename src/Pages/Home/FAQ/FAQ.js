import React from 'react';
import SectionTitle from '../../Shared/SectionTitle/SectionTitle';

const FAQ = () => {
    const data = {
        title: "Get Your All Answer Here",
        subtitle: "FAQ",
        description: "You can learn more from our asked questions.Don’t hasitate to contact with us for inquries!"
    }
    return (
        <div>
            <SectionTitle data={data}></SectionTitle>
            <div className='py-8 px-12 my-8 grid grid-cols-1 lg:grid-cols-2 gap-6'>
                <div className='shadow-lg p-9 border border-blue-700'>
                    <h2 className='text-4xl font-bold'>How long does it take visa to process?</h2>
                    <p className='text-xl mt-4'>The processing timeframe for transfers of a visa to a new passport is 4 to 6 weeks.</p>
                </div>
                <div className='shadow-lg p-9 border border-blue-700'>
                    <h2 className='text-4xl font-bold'>How can I apply for the tourist visa?</h2>
                    <p className='text-xl mt-4'>Get the documents you need for a visitor visa.Most applicants need to give their biometrics if it's the first time they apply.Get detailed instructions for your situation from exper consultant.</p>
                </div>
                <div className='shadow-lg p-9 border border-blue-700'>
                    <h2 className='text-4xl font-bold'>What are the visa application documents?</h2>
                    <p className='text-xl mt-4'>Passport & travel documents,Provincial Nomination Letter,Education Credential Assessment,Medical certificate,Police Clearance Certificates,Authentic proof of funds,Evidence of employment.Get detailed instructions for your situation from exper consultant</p>
                </div>
                <div className='shadow-lg p-9 border border-blue-700'>
                    <h2 className='text-4xl font-bold'>Where can I do a consultation?</h2>
                    <p className='text-xl mt-4'>I am here to help you and show you how you can get your dream come true ! Contac me .An immigration Consultant who has expertise can explain the applicant different visa process and its steps thoroughly. An attorney can assist with determining.Book an appointment for the Visa interview; Fill the Visa application form; </p>
                </div>
            </div>
        </div>
    );
};

export default FAQ;