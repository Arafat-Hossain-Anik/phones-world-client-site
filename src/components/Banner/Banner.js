import React from 'react';
import './Banner.css';
const Banner = () => {
    return (
        // <div className='row row-cols-1 row-cols-md-2 mt-5'>
        // <div className='col text-center'>

        //     <h3>Wanna buy a phone</h3>
        //     <h1 className='banner-heading fw-bold'>Check Out <br /> Phone's World</h1>
        //     <p className='mt-3'>World best features and exclusive phone now is in your hand. Click order and enjoy.</p>
        // </div>
        //     <div className='col'>
        //         <img className='img-fluid pe-4' src="https://images.unsplash.com/photo-1532356884227-66d7c0e9e4c2?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=870&q=80" alt="" />
        //     </div>
        // </div>
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
                                <div className='text-center'>

                                    <h3>Iphone 14 Pro Max</h3>
                                    <h1 className='banner-heading fw-bold'>Check Out <br /> Phone's World</h1>
                                    <p className='mt-3'>World best features and exclusive phone now is in your hand. Click order and enjoy.</p>
                                </div>
                            </div>
                            {/* <div className="col-md-6">
                                <img className='img-fluid' src="https://image-cdn.hypb.st/https%3A%2F%2Fhypebeast.com%2Fimage%2F2022%2F12%2FApple-Reportedly-Scrapped-iPhone-14-Pros-Next-Gen-Chip-Due-to-Unprecedented-Mistake-0.jpg?fit=max&cbr=1&q=90&w=750&h=500" alt="" />
                            </div> */}
                            <div className="col-md-6">
                                <img className='img-fluid' src="https://asia-exstatic-vivofs.vivo.com/PSee2l50xoirPK7y/1677571104137/afee365e27ec71ce13a2b6664ecde107.png" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item rounded">
                        <div className="row">
                            <div className="col-md-6">
                                <div className='text-center'>

                                    <h3>Samsung Galaxy S23 Ultra</h3>
                                    <h1 className='banner-heading fw-bold'>Check Out <br /> Phone's World</h1>
                                    <p className='mt-3'>World best features and exclusive phone now is in your hand. Click order and enjoy.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img className='img-fluid' src="https://www.custommacbd.com/cdn/shop/products/Galaxy-S23-Ultra-Phantom-Black-Custom-Mac-BD.jpg?v=1675423377" alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="carousel-item rounded">
                        <div className="row">
                            <div className="col-md-6">
                                <div className='text-center'>

                                    <h3>Xiaomi 13 Ultra</h3>
                                    <h1 className='banner-heading fw-bold'>Check Out <br /> Phone's World</h1>
                                    <p className='mt-3'>World best features and exclusive phone now is in your hand. Click order and enjoy.</p>
                                </div>
                            </div>
                            <div className="col-md-6">
                                <img className='img-fluid' src="https://m-cdn.phonearena.com/images/article/133869-wide-two_1200/The-best-Xiaomi-phones---our-top-10-list.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;