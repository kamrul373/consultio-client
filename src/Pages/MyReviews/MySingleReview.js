import React, { useEffect, useState } from 'react';
import { FaEdit, FaTrashAlt } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const MySingleReview = ({ review, id, handleReviewDelete }) => {
    // destructuring single review
    const { serviceId, _id, customerReview, customerRating } = review;

    // service state
    const [service, setService] = useState();
    useEffect(() => {
        fetch(`https://consultio-server.vercel.app/services/${serviceId}`)
            .then(response => response.json())
            .then(data => setService(data))
    }, [serviceId]);

    return (
        <tr>
            <th>{id + 1}</th>
            <td>
                <Link
                    className='text-primary'
                    to={`/services/${serviceId}`}>{service?.service_name}
                </Link>
            </td>
            <td>{customerReview}</td>
            <td>{customerRating}</td>
            <td>
                <Link to={`/edit/${_id}`} className="mr-2">
                    <button className='btn text-xl btn-primary mb-2 lg:mb-0'>
                        <FaEdit></FaEdit>
                    </button>
                </Link>
                <button onClick={() => handleReviewDelete(_id)} className='btn btn-error  mb-2 lg:mb-0'>
                    <FaTrashAlt className='text-xl'></FaTrashAlt>
                </button>
            </td>

        </tr>
    );
};

export default MySingleReview;