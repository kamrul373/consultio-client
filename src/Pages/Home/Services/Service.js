import React from 'react';

const Service = ({ service }) => {
    const { service_name, img, summary, price, ratting } = service;
    return (
        <div className='service-card'>
            <div className="card  bg-base-100 shadow-xl">
                <figure><img src={img} alt={service_name} style={{ height: "220px" }} /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {service_name}
                        <div className="badge badge-primary">{ratting}</div>
                    </h2>
                    <p>{summary.length > 100 ? summary.slice(0, 100) : summary}</p>
                    <div className="card-actions justify-end">
                        <div className="badge badge-outline">Fashion</div>
                        <div className="badge badge-outline">Products</div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;