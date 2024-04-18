import React from 'react';
import { Helmet } from 'react-helmet-async';
import blogBanner from '../../assets/blog.jpg'

const LatestPostBanner = () => {
    return (
        <div className="text-center text-6xl py-32" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${blogBanner})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <Helmet>
                <title>Latest Post - Home Park React Template</title>
            </Helmet>
            <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 text-white">
                <h1 data-aos="fade-down" data-aos-duration="1700" className="font-bold" >Blogs</h1>
            </div>
        </div>
    );
};

export default LatestPostBanner;