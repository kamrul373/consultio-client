import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router-dom';
import ReactStars from 'react-rating-stars-component';
import { toast } from 'react-hot-toast';
import pageTitle from '../../utility/pageTitle';
const Edit = () => {
    // page title
    pageTitle("Edit Review");
    // loader
    const reviewData = useLoaderData();
    // rating state
    const [serviceRating, setServiceRating] = useState(reviewData?.customerRating)

    const navigate = useNavigate();

    // service state
    const [service, setService] = useState();
    useEffect(() => {
        fetch(`https://consultio-server.vercel.app/services/${reviewData.serviceId}`)
            .then(response => response.json())
            .then(data => setService(data))
    }, [reviewData.serviceId]);

    const handleRating = (value) => {
        setServiceRating(value);
    }
    // update review event handler
    const handleUpdateReview = (e) => {
        e.preventDefault();
        const review = e.target.reviewText.value;
        const rating = serviceRating;
        const data = {
            customerReview: review,
            customerRating: rating
        }

        fetch(`https://consultio-server.vercel.app/update/${reviewData._id}`, {
            method: "PATCH",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(data)
        })
            .then(response => response.json())
            .then(data => {
                console.log(data);
                toast.success("Review Successfully Updated !");
                navigate("/myreviews")
            })
    }
    return (
        <div className='lg:px-32 px-12 mb-8 mt-32'>
            <h3 className='text-lg font-semibold'>Update Review</h3>
            <h2 className='text-2xl'>Service Name : {service?.service_name}</h2>
            <form onSubmit={handleUpdateReview}>
                <div className="form-control">
                    <label className="label">
                        <span className="label-text">Your Review</span>
                    </label>
                    <textarea name="reviewText" className="textarea textarea-primary" defaultValue={reviewData.customerReview}></textarea>
                </div>
                <div>
                    <label className="label">
                        <span className="label-text">Your Given Rating : {reviewData.customerRating}</span>
                    </label>
                    <ReactStars
                        count={5}
                        onChange={handleRating}
                        size={40}
                        activeColor="#ffd700"
                        isHalf={true}
                    ></ReactStars>
                </div>
                <div>
                    <button type='submit' className='btn btn-primary'>Update</button>
                </div>
            </form>
        </div>
    );
};

export default Edit;