import React from 'react';
import { Link } from 'react-router-dom';
import Rating from 'react-rating';
import './Services.css';

const Service = (props) => {
    const { service } = props;
    return (
        <div className="col">
            <div className="card h-100">
                {/* course image */}
                <Link className='more-img' to={`/more/${service._id}`}>
                    <img src={service.img} className="card-img-top" alt="PhoneImage" />
                </Link>
                <div className="card-body card-footer text-start">
                    {/* course details */}
                    <Link className='card-text-link' to={`/more/${service._id}`}>
                        <span className="card-title fw-bold">{service.name}</span>
                    </Link>
                    <div className=''>
                        <span className=" fw-bold"><i className="fas fa-dollar-sign"></i> {service.price}.00</span><br />
                        <Rating placeholderRating={service.rating}
                            emptySymbol={<i className="far fa-star"></i>}
                            placeholderSymbol={<i className="fas fa-star"></i>}
                            fullSymbol={<i className="fas fa-star"></i>}
                            readonly
                        />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Service;