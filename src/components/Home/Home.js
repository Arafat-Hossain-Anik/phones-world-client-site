import React from 'react';
import Banner from '../Banner/Banner';
import WhyUs from '../Extra/WhyUs'
import Footer from '../Footer/Footer';
import Header from '../Header/Header';
import Services from '../Services/Services';
import ShowReviews from '../ShowReviews/ShowReviews';
import './Home.css'
import Blogs from '../Extra/Blogs';

const Home = () => {
    return (
        <div className='home'>
            <Header></Header>
            <Banner></Banner>
            <div className="container">
                <WhyUs></WhyUs>
                <Services></Services>
                <ShowReviews></ShowReviews>
                <Blogs></Blogs>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default Home;