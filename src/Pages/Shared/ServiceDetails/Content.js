import React from 'react';
import { FaStar } from 'react-icons/fa';
import title_bg from "../../../assets/img/service_title_bg.jpg"
const Content = ({ serviceDetails }) => {
    const { service_name, price, img, summary, description, visa_types, documents, age_limit, ratting } = serviceDetails;
    return (
        <div className='lg:w-[70%] w-[90%] mx-auto'>
            <div className="title-area">
                <div className="hero mt-4" style={{ backgroundImage: `url(${title_bg})`, height: "250px" }}>
                    <div className="hero-overlay bg-opacity-30"></div>
                    <div className="hero-content text-center text-neutral-content">
                        <h1 className="mb-5 text-5xl font-bold">{service_name}</h1>
                    </div>
                </div>
            </div>
            <div className='mt-6 flex justify-center'>
                <div className='col-span-2' >
                    <img src={img} alt={service_name} />
                </div>
            </div>
            <div className='py-8'>
                <div>
                    <h2 className='text-3xl font-semibold mb-2'>Summary</h2>
                    <p className='text-xl'>{summary}</p>
                    <h3 className='font-semibold text-2xl text-primary mt-4'>Service Charge: {price}</h3>
                </div>
                <div className=' py-4'>
                    <h4 className='text-3xl'>Customer Ratting : {ratting} <FaStar className='inline-block text-yellow-400'></FaStar> </h4>
                    <p className='mt-4 font-bold text-2xl'>Prefered Age : {age_limit}</p>
                </div>
                <div>
                    <h2 className='text-4xl font-semibold my-4'>What will client  get from Consultant & why should choose that type of visa ? </h2>
                    <p className='text-xl text-justify'>{description}</p>
                    <h2 className='text-3xl font-semibold mt-3'>Available Visa Type You can Choose : </h2>
                    <ul className='list-decimal pl-4 mt-3'>
                        {
                            visa_types.map((vtype, idx) => <li className='text-xl mb-2' key={idx}>{vtype}</li>)
                        }
                    </ul>
                </div>
                <div>
                    <h2 className='text-4xl font-semibold my-4'>Required Documents for smooth migration process </h2>
                    <ul className='list-decimal pl-4'>
                        {
                            documents.map((doc, idx) => <li className='text-xl mb-2' key={idx}>{doc}</li>)
                        }
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default Content;