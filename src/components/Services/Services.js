import React, { useEffect, useState } from 'react';
import Service from '../Service/Service';
import './Services.css';

const Services = () => {

    const [services, setOurServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(result => result.json())
            .then(data => setOurServices(data))
    }, [])
    return (
        <div>
            <h1 className='fw-bold text-center mt-5'>Best Selling Phones</h1>
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-4 p-5 mb-5 gy-4" >
                {
                    services.slice(0, 4).map(service => <Service key={service._id} service={service}></Service>)
                }
            </div>
        </div>
    );
};

export default Services;