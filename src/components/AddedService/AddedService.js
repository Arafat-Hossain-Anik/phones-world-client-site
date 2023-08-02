import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddedService.css';

const AddedService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('https://phones-world-server-site.onrender.com/services/', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }
    return (
        <div className='body-banner'>
            <div className='add-service pt-5' style={{ height: '50vh' }}>
                <h2 className='text-center fs-1 p-3 fw-bold text-dark text-shadow'>Add New Product</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input className="form-control" {...register("name", { required: true, maxLength: 20 })} placeholder='Product name' />
                    <textarea className="form-control" {...register("description")} placeholder='Product description' style={{ width: "40%" }} />
                    <input className="form-control" type="number" {...register("price")} placeholder='Product Price' />
                    <input className="form-control" type="text" {...register("rating")} placeholder='Product Rating' />
                    <input className="form-control" {...register("img")} placeholder='Product Image url' />
                    <input className='btn btn-success' style={{ color: 'white', padding: '8px 0' }} type="submit" />
                </form>
            </div>
        </div>
    );
};

export default AddedService;