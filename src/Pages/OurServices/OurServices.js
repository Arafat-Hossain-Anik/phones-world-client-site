import React, { useEffect, useState } from 'react';
import Footer from '../../components/Footer/Footer';
import Header from '../../components/Header/Header';
import Service from '../../components/Service/Service';

const OurServices = () => {
    const [services, setOurServices] = useState([])
    useEffect(() => {
        fetch('http://localhost:5000/services')
            .then(result => result.json())
            .then(data => setOurServices(data))
    }, []);
    return (
        <div className=''>
            <Header></Header>
            <div className="container">
                <div className="text-center p-3 fw-fold">
                    <h1 className='fw-bold'>All Products</h1>
                </div>
                <div className="row  row-cols-1 row-cols-md-3 row-cols-lg-4 gy-4" >
                    {
                        services.map(service => <Service key={service._id} service={service}></Service>)
                    }
                </div>
            </div>
            <Footer></Footer>

        </div>
    );
};

export default OurServices;