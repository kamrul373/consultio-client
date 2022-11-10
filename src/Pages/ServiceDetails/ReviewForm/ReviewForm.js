import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import ReactStars from 'react-rating-stars-component';
import { AuthContext } from '../../../context/AuthContextProvider';
import todayDate from '../../../utility/formateDate';

const ReviewForm = ({ serviceId, customerReviews, setCustomerReviews }) => {
    // context
    const { user } = useContext(AuthContext);
    // rating state
    const [serviceRating, setServiceRating] = useState(0)
    // states for user email and name if auth have those 
    // so we can disalbe those field 
    const [toggleEmail, setEmailToggle] = useState(true)
    const [toggleName, setNameToggle] = useState(true);
    // sideeffect to maintain disable state of fields
    const date = todayDate();
    useEffect(() => {
        if (!user?.displayName) {
            setNameToggle(false)
        }
        if (!user?.email) {
            setEmailToggle(false);
        }
    }, [user]);
    // rating event handler
    const handleRating = (value) => {
        setServiceRating(value);
    }
    // form submit event handler
    const handleCustomerReview = (e) => {
        e.preventDefault();
        const form = e.target;
        const name = user.displayName ? user.displayName : form.name.value;
        const email = user.email ? user.email : form.email.value;
        const customerRating = serviceRating;
        const customerReview = form.reviewText.value;
        const uid = user?.uid;
        const photoURL = user?.photoURL;
        // customer data along with required data
        const reviewData = {
            name, email, customerRating, customerReview, uid, serviceId, photoURL,
            date
        }
        const newReviewsCollection = [...customerReviews, reviewData];
        setCustomerReviews(newReviewsCollection)

        // posting review
        fetch("http://localhost:5000/reviewpost", {
            method: "POST",
            headers: {
                "content-type": "application/json"
            },
            body: JSON.stringify(reviewData)
        })
            .then(response => response.json())
            .then(data => {

                console.log(data)
                toast.success("Review Published!");
                form.reset();

            })
            .catch(error => {
                console.log(error)
                return;
            });

        // console.log(name, email, customerRating, customerReview, uid, serviceId,);
    }
    return (
        <div className='py-8'>
            <h2 className='text-2xl font-semibold mb-4'>Write a Review</h2>
            <form onSubmit={handleCustomerReview}>
                <div className="user-intro">
                    <div className="form-control ">
                        <label className="label">
                            <span className="label-text">Your name</span>
                        </label>
                        <input name="name" type="text" placeholder="Your Name" className="input input-bordered input-primary w-full "
                            defaultValue={user?.displayName} disabled={toggleName} />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Email</span>
                        </label>
                        <input name="email" type="email" placeholder="Your Email" className="input input-bordered input-primary w-full  "
                            defaultValue={user?.email} disabled={toggleEmail} required />
                    </div>
                    <div className='my-3'>
                        <h2 className='text-xl font-semibold'>Service Rating</h2>
                        <ReactStars
                            count={5}
                            onChange={handleRating}
                            size={40}
                            activeColor="#ffd700"
                            isHalf={true}
                        ></ReactStars>
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Your Review</span>
                        </label>
                        <textarea name="reviewText" className="textarea textarea-primary" placeholder="Your Review" required></textarea>
                    </div>
                    <div className="form-control mt-4">
                        <button type='submit' className='btn btn-primary text-xl'>Post Review</button>
                    </div>
                </div>
            </form>
        </div>
    );
};

export default ReviewForm;