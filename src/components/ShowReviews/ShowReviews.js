import React, { useEffect, useState } from 'react';
import ShowReview from '../ShowReview/ShowReview';

const ShowReviews = () => {
    const [reviews, setReviews] = useState([]);
    useEffect(() => {
        fetch('https://phones-world-server-site.onrender.com/reviews')
            .then(res => res.json())
            .then(data => setReviews(data));
    }, [])
    return (
        <>
            <h1 className='fw-bold text-center mt-5'>Our Customer's Review</h1>
            <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 p-5 mb-5 gy-4" >
                {
                    reviews.map(review => <ShowReview key={review._id} review={review}></ShowReview>)
                }
            </div>
        </>
    );
};

export default ShowReviews;