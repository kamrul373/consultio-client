import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';

const MySingleReview = ({ review, id, handleReviewDelete }) => {
    // destructuring single review
    const { serviceId, _id, customerReview, customerRating } = review;

    // service state
    const [service, setService] = useState();
    useEffect(() => {
        fetch(`http://localhost:5000/services/${serviceId}`)
            .then(response => response.json())
            .then(data => setService(data))
    }, [serviceId]);

    return (
        <tr>
            <th>{id + 1}</th>
            <td>{service?.service_name}</td>
            <td>{customerReview}</td>
            <td>{customerRating}</td>
            <td>
                <Link to={`/editreview/${_id}`} className="mr-2">
                    <button className='badge'>Edit</button>
                </Link>
                <button onClick={() => handleReviewDelete(_id)} className='badge badge-error '>Delete</button>
            </td>

        </tr>
    );
};

export default MySingleReview;