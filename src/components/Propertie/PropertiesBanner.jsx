import React from 'react';
import { Helmet } from 'react-helmet-async';
import bannerImg from '../../assets/properties.jpg'

const PropertiesBanner = () => {

    return (
        <div className="text-center text-6xl py-52" style={{
            backgroundImage: `linear-gradient(rgba(0,0,0,0.4), rgba(0,0,0,0.4)), url(${bannerImg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <Helmet>
                <title>Properties - Home Park React Template</title>
            </Helmet>
            <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 text-white">
                <h1 data-aos="fade-down" data-aos-duration="1700" className="font-bold" >Properties</h1>
            </div>
        </div>
    );
};

export default PropertiesBanner;