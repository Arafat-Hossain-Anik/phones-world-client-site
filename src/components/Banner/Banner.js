import React from 'react';
import './Banner.css';
import AppleImg from '../../images/banner/apple.png';
import GalaxyImg from '../../images/banner/galaxy.png';
import { Link } from 'react-router-dom';
const Banner = () => {
    return (
        <div className="container mt-5">
            <div id="carouselExampleCaptions" className="carousel slide" data-bs-ride="carousel">
                <div className="carousel-indicators">
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="1" aria-label="Slide 2"></button>
                    <button type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide-to="2" aria-label="Slide 3"></button>
                </div>
                <div className="carousel-inner">
                    <div className="carousel-item rounded active">
                        <div className="row">
                            <div className="col-md-6">
                                <div className='ms-5'>
                                    <h1 className='banner-heading fw-bold'>Baishakhi Super hot Sale</h1>
                                    <h2 className='text-danger fw-bold'>UP TO 15% OFF</h2>
                                    <h3 className='banner-sub-heading'>Under Favourable Phone's World</h3>
                                    <br />
                                    <Link className='btn btn-outline-danger mt-2 fw-bold' to={`/allproducts`}>
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 text-center">
                                <img className='banner-img img-fluid' src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1677571104137/afee365e27ec71ce13a2b6664ecde107.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item rounded">
                        <div className="row">
                            <div className="col-md-6">
                                <div className='ms-5'>
                                    <h1 className='banner-heading fw-bold'>Exclusive Launch With <br /><span className='text-danger'>Mind Blowing Discount</span></h1>
                                    <h3 className='banner-sub-heading'>Under Favourable Phone's World</h3>
                                    <br />
                                    <Link className='btn btn-outline-danger mt-2 fw-bold' to={`/allproducts`}>
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 text-center">
                                <img className='banner-img img-fluid' src={GalaxyImg} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item rounded">
                        <div className="row">
                            <div className="col-md-6">
                                <div className='ms-5'>
                                    <h1 className='banner-heading fw-bold'>Stock Clearanse Sale</h1>
                                    <h2 className='text-danger fw-bold'>UP TO 30% OFF</h2>
                                    <h3 className='banner-sub-heading'>Under Favourable Phone's World</h3>
                                    <br />
                                    <Link className='btn btn-outline-danger mt-2 fw-bold' to={`/allproducts`}>
                                        Buy Now
                                    </Link>
                                </div>
                            </div>
                            <div className="col-md-6 text-center">
                                <img className='banner-img img-fluid' src={AppleImg} alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;