import React from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

// import required modules
import { Autoplay, Navigation, Pagination } from 'swiper/modules';


const Testimonials = () => {
    return (
        
        <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 py-20">
            <Swiper
                spaceBetween={30}
                centeredSlides={true}
                autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                }}
                pagination={{
                    clickable: true,
                }}
                navigation={true}
                modules={[Autoplay, Pagination, Navigation]}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="h-[500px] flex items-center text-blck"  >
                        <div className="w-full md:w-5/6 xl:w-8/12 text-center mx-auto ">
                            <h1 data-aos="fade-down" data-aos-duration="2200" className='text-3xl md:text-5xl px-10 pb-10 font-bold '>Client Testimonials</h1>
                            <p data-aos="fade-left" data-aos-duration="2300" className='text-base md:text-3xl px-12 mb-11'>A beautiful central space for entrepreneurs, freelancers, non-profits and remote employees to work, meet and network. It’s a modern & shared office experience with private and open concept facilities that include all amenities for work-life balance in our city. </p>
                            <h3 data-aos="fade-up" data-aos-duration="2400" className='text-lg font-bold'>John S.</h3>
                            <p data-aos="fade-up" data-aos-duration="2400" className="text-sm font-medium text-gray-400">Neighborhood</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[500px] flex items-center text-blck"  >
                        <div className="w-full md:w-5/6 xl:w-8/12 text-center mx-auto ">
                            <h1 data-aos="fade-down" data-aos-duration="2200" className='text-3xl md:text-5xl px-10 pb-10 font-bold '>Client Testimonials</h1>
                            <p data-aos="fade-left" data-aos-duration="2300" className='text-base md:text-3xl px-12 mb-11'>A beautiful central space for entrepreneurs, freelancers, non-profits and remote employees to work, meet and network. It’s a modern & shared office experience with private and open concept facilities that include all amenities for work-life balance in our city. </p>
                            <h3 data-aos="fade-up" data-aos-duration="2400" className='text-lg font-bold'>John S.</h3>
                            <p data-aos="fade-up" data-aos-duration="2400" className="text-sm font-medium text-gray-400">Neighborhood</p>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="h-[500px] flex items-center text-blck"  >
                        <div className="w-full md:w-5/6 xl:w-8/12 text-center mx-auto ">
                            <h1 data-aos="fade-down" data-aos-duration="2200" className='text-3xl md:text-5xl px-10 pb-10 font-bold '>Client Testimonials</h1>
                            <p data-aos="fade-left" data-aos-duration="2300" className='text-base md:text-3xl px-12 mb-11'>A beautiful central space for entrepreneurs, freelancers, non-profits and remote employees to work, meet and network. It’s a modern & shared office experience with private and open concept facilities that include all amenities for work-life balance in our city. </p>
                            <h3 data-aos="fade-up" data-aos-duration="2400" className='text-lg font-bold'>John S.</h3>
                            <p data-aos="fade-up" data-aos-duration="2400" className="text-sm font-medium text-gray-400">Neighborhood</p>
                        </div>
                    </div>
                </SwiperSlide>


            </Swiper >
        </div>
    );
};

export default Testimonials;