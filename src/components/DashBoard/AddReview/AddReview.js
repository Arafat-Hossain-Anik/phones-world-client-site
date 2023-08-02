import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
const AddReview = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://phones-world-server-site.onrender.com/reviews/', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }
    return (
        <div className='body-banner'>
            <div className='body-banner-text-container pt-5'>
                <div className='add-service' style={{ width: "100%" }}>
                    <h2 className='text-center fs-1 p-3 fw-bold text-dark' style={{
                        textShadow: " 0px 1px 7px #6f7070"
                    }}>Rate Our Service</h2>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <input className="form-control" {...register("name", { required: true, maxLength: 20 })} placeholder='Write Name' />
                        <textarea className="form-control" {...register("review")} placeholder='Write yours review' style={{ width: "40%" }} />
                        <input className="form-control" {...register("rating")} placeholder='Add rating' />
                        <input className="form-control" {...register("img")} placeholder='Give Your Image url' />
                        <input className='btn btn-success' style={{ color: '#fff' }} type="submit" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default AddReview;