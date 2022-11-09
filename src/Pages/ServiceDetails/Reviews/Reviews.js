import React, { useEffect, useState } from 'react';
import Review from '../Review/Review';

const Reviews = ({ serviceId }) => {
    const [customerReviews, setCustomerReviews] = useState([]);
    useEffect(() => {
        fetch(`http://localhost:5000/reviews/${serviceId}`)
            .then(response => response.json())
            .then(reviews => setCustomerReviews(reviews));
    }, [serviceId]);

    console.log(customerReviews);
    return (
        <div>
            <h2 className='text-3xl font-semibold'>Customer Reviews</h2>
            {
                customerReviews.map((review, idx) => <Review
                    key={idx}
                    review={review}
                ></Review>)
            }
        </div>
    );
};

export default Reviews;