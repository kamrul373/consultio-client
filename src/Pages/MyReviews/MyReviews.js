import React, { useContext, useEffect, useState } from 'react';
import { toast } from 'react-hot-toast';
import { AuthContext } from '../../context/AuthContextProvider';
import pageTitle from '../../utility/pageTitle';
import MySingleReview from './MySingleReview';

const MyReviews = () => {
    // page title
    pageTitle("My Reviews");
    const { user } = useContext(AuthContext)
    // getting single user reviews
    const [reviews, setReviews] = useState([]);
    const url = user?.email ? `http://localhost:5000/userreviews?email=${user?.email}` : `http://localhost:5000/userreviews?uid=${user?.uid}`;

    useEffect(() => {
        fetch(url)
            .then(response => response.json())
            .then(data => setReviews(data));
    }, [url]);

    // single review delete event handler 
    const handleReviewDelete = (id) => {
        const confirm = window.confirm("Are you sure you want to delete");
        console.log(id);
        if (confirm) {
            fetch(`http://localhost:5000/delete/${id}`, {
                method: "DELETE"
            })
                .then(response => response.json())
                .then(data => {
                    console.log(data)
                    if (data.deletedCount > 0) {
                        const remainingReviews = reviews.filter(rev => rev._id !== id)
                        setReviews(remainingReviews);
                        toast.error("Review Deleted Successfully");
                    }

                })
                .catch(error => console.log(error))
        }
    }
    return (
        <div>
            {
                reviews.length > 0 ?

                    <div className="mt-32">
                        <h2 className='text-4xl font-semibold text-center my-8'>My Reviews</h2>
                        <table className="lg:table lg:table-zebra table-auto w-full overflow-x-hidden ">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Service Name</th>
                                    <th>Review</th>
                                    <th>Rating</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody className='lg:text-xl'>
                                {
                                    reviews.map((review, idx) => <MySingleReview
                                        key={review._id}
                                        id={idx}
                                        review={review}
                                        handleReviewDelete={handleReviewDelete}
                                    ></MySingleReview>)
                                }
                            </tbody>
                        </table>
                    </div>

                    : <div className='flex justify-center items-center h-screen '>
                        <h2 className='text-4xl italic'>No reviews were added</h2>
                    </div>
            }

        </div>
    );
};

export default MyReviews;