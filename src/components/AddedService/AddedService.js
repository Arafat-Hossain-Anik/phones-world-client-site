import React from 'react';
import { useForm } from "react-hook-form";
import axios from 'axios';
import './AddedService.css';

const AddedService = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data);
        axios.post('http://localhost:5000/services/', data)
            .then(res => {
                if (res.data.insertedId) {
                    alert('Added successfully');
                    reset();
                }
            })
    }
    return (
        <>
            <div className='add-service pb-5' style={{ height: '50vh' }}>
                <h2 className='text-center p-3 fw-bold text-dark'>Add New Place</h2>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <input {...register("name", { required: true, maxLength: 20 })} placeholder='write name' />
                    <textarea {...register("description")} placeholder='description' />
                    <input type="number" {...register("price")} placeholder='added price' />
                    <input type="number" {...register("rating")} placeholder='added rating' />
                    <input {...register("img")} placeholder='image url' />
                    <input className='sub' style={{ background: '#161E54' }} type="submit" />
                </form>
            </div>
        </>
    );
};

export default AddedService;