import React, { useContext, useState } from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import { AuthContext } from '../../context/AuthContextProvider';
import Content from './Content/Content';
import ReviewForm from './ReviewForm/ReviewForm';
import Reviews from './Reviews/Reviews';


const ServiceDetails = () => {
    // loading data
    const serviceDetails = useLoaderData();
    // auth
    const { user } = useContext(AuthContext);
    // all customer reviews for single service state 
    const [customerReviews, setCustomerReviews] = useState([]);

    const numberOfCustomerGiveReview = customerReviews.length;

    return (
        <div className='lg:w-[75%] w-[90%] mx-auto'>
            <Content serviceDetails={serviceDetails}></Content>
            <Reviews
                customerReviews={customerReviews}
                setCustomerReviews={setCustomerReviews}
                serviceId={serviceDetails._id}></Reviews>
            {
                user?.uid || user?.email ?
                    <ReviewForm
                        numberOfCustomerGiveReview={numberOfCustomerGiveReview}
                        currentRatting={serviceDetails.ratting}
                        serviceId={serviceDetails._id}></ReviewForm>
                    : <h2 className='text-2xl my-8 font-semibold'>Please <Link to="/signin" className='text-primary'>Login</Link>  to add a review. </h2>
            }

        </div>
    );
};

export default ServiceDetails;