import React from 'react';
import { FaStar } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Service = ({ service }) => {
    const { service_name, img, summary, price, ratting, _id } = service;
    return (
        <div className='service-card'>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={img} alt={service_name} style={{ height: "220px" }} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {service_name}
                        <div className="badge badge-secondary"><span>{ratting}</span></div>
                    </h2>
                    <p>{summary.length > 100 ? summary.slice(0, 100) + "..." : summary}</p>
                    <div className="my-4 text-center">
                        <p className='text-2xl font-semibold'>Service Charge : $ {price}</p>
                    </div>
                    <div className="card-actions justify-center">
                        <Link to={`/services/${_id}`}>
                            <button className='btn btn-primary btn-wide'>Details</button>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;