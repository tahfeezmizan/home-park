import React from 'react';
import AboutBg from '../../assets/about-bg-.jpg'
import { FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa6';
import { Helmet } from 'react-helmet-async';
import LocationImg from '../../assets/map-icon.png'
import emailImg from '../../assets/gmail-icon.png'
import phoneImg from '../../assets/phone-icon.png'

const Contact = () => {
    return (
        <div>
            <Helmet>
                <title>Contact - Home Park React Template</title>
            </Helmet>
            <div className="text-center text-6xl py-32" style={{ backgroundImage: `url(${AboutBg})` }}>
                <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0">
                    <h1 data-aos="fade-down" data-aos-duration="1700" className="text-white font-bold" >About Us</h1>
                </div>
            </div>

            <div className="w-full px-4 py-20 md:px-0 md:w-8/12 mx-auto">
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-extrabold mb-6">Connect With Us</h1>
                    <p className="font-medium text-gray-400 lg:w-1/2 mx-auto">Sign up for a hassle-free journey, and log in with ease to stay connected to a tailored platform that understands and caters to your preferences.</p>
                </div>

                <div className="grid grid-cols-1 xl:grid-cols-12 gap-10 xl:gap-6 mb-12 justify-between items-center">

                    <div className="contact-from xl:col-span-7">
                        <div className="flex flex-col xl:flex-row gap-6 mb-6">
                            <div className="w-full xl:w-1/2">
                                <label htmlFor="name" className="text-black text-xl font-bold">Your Name</label>
                                <input type="text" placeholder="Enter your full name" id="name"
                                    className="w-full p-5 rounded-xl bg-gray-50 mt-4 outline-none" />
                            </div>
                            <div className="w-full xl:w-1/2">
                                <label htmlFor="email" className="text-black text-xl font-bold">Your Email</label>
                                <input type="email" placeholder="Enter your email" id="email"
                                    className="w-full p-5 rounded-xl bg-gray-50 mt-4 outline-none" />
                            </div>
                        </div>
                        <div className="flex flex-col xl:flex-row gap-6 mb-6">
                            <div className="w-full xl:w-1/2">
                                <label htmlFor="subject" className="text-black text-xl font-bold">Subject</label>
                                <input type="text" placeholder="Enter your subject" id="subject"
                                    className="w-full p-5 rounded-xl bg-gray-50 mt-4 outline-none" />
                            </div>
                            <div className="w-full xl:w-1/2">
                                <label htmlFor="number" className="text-black text-xl font-bold">Your Number</label>
                                <input type="number" placeholder="Enter your phone number" id="number"
                                    className="w-full p-5 rounded-xl bg-gray-50 mt-4 outline-none" />
                            </div>
                        </div>
                        <div className="mb-8">
                            <label htmlFor="message" className="text-black text-xl font-bold">Message</label>
                            <textarea placeholder="Write your message" id="message" cols="30" rows="10"
                                className="w-full p-5 rounded-xl bg-gray-50 mt-4 outline-none"></textarea>
                        </div>
                        <button
                            className="btn border-none rounded-8 w-full bg-green-500 text-white text-xl font-semibold hover:bg-green-600">Send
                            Message</button>
                    </div>


                    <div className="address-bar xl:col-span-5 p-5 md:p-10 border-2 rounded-xl">
                        {/* <div className="phone-number py-10 px-8 rounded-2xl mb-6 bg-green-300 bg-opacity-10">
                            <img src={phoneImg} className="mb-6" alt="" />
                            <p className="text-gray-400 text-base">Phone Number :</p>
                            <h4 className="text-black text-lg font-extrabold">(+62) 123-321-543</h4>
                        </div>
                        <div className="email py-10 px-8 rounded-2xl mb-6 bg-yellow-300 bg-opacity-10">
                            <img src={emailImg} className="mb-6" alt="" />
                            <p className="text-gray-400 text-base">Email :</p>
                            <h4 className="text-black text-lg font-extrabold">bookszone@support.com</h4>
                        </div>
                        <div className="location py-10 px-8 rounded-2xl bg-blue-400 bg-opacity-10">
                            <img src={LocationImg} className="mb-6" alt="" />
                            <p className="text-gray-400 text-base">Location :</p>
                            <h4 className="text-black text-lg font-extrabold">152/1 Mirpur-1 Mazar Road, Dhaka</h4>
                        </div> */}

                        <div className="">
                            <h1 className="text-5xl">Area map</h1>
                        </div>

                    </div>

                </div>


                {/* social icon */}
                <div className="grid justify-center items-center bg-gray-50 py-10 rounded-xl">
                    <h1 className="text-xl font-extrabold mb-6">Social Media</h1>
                    <div className="icons flex gap-5 justify-center items-center">

                        <span className='text-2xl text-blue-600'><FaTwitter /></span>
                        <span className='text-2xl text-[#0077b5]'><FaLinkedin /></span>
                        <span className='text-2xl text-[#1877F2]'><FaFacebook /></span>
                    </div>
                </div>

            </div>


        </div>
    );
};

export default Contact;