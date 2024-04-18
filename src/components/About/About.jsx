import { Helmet } from "react-helmet-async";
import AboutBg from '../../assets/about-bg-.jpg'
import aboutImg from '../../assets/AboutImg.jpg'
import { Link } from "react-router-dom";
import Testimonials from "../Testimonials/Testimonials";

const About = () => {
    return (
        <div className="">
            <Helmet>
                <title>About - Home Park React Template</title>
            </Helmet>
            <div className="text-center text-6xl py-52" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.1), rgba(0,0,0,0.1)), url(${AboutBg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0">
                    <h1 data-aos="fade-down" data-aos-duration="1700" className="text-white font-bold" >About Us</h1>
                </div>
            </div>

            <div className="py-32">
                <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-10">
                        <div className="flex-1">
                            <h2 data-aos="fade-right" data-aos-duration="1800" className="text-5xl font-bold mb-6">Who we are</h2>

                            <p data-aos="fade-right" data-aos-duration="1900" className="mb-5">Home Park Corp., Manhattan’s largest office landlord, is a fully integrated real estate investment trust, or REIT, that is focused primarily on acquiring</p>

                            <p data-aos="fade-right" data-aos-duration="2000" className="mb-6">Weaving contemporary design and exceptional amenities into its accessible Astoria location, Fabric Astoria offers two towers, one each for condominiums or rentals. Featuring brand-new quality construction, with a robust collection of shared indoor and outdoor amenities, this one-of-a-kind residence elevates the concept of Queens living with a full lifestyle offering of quality design, shared community, and a culturally vibrant neighborhood.</p>

                            <Link data-aos="fade-right" data-aos-duration="2200" className="btn text-white rounded-full px-9 text-xl bg-[#007bff] hover:bg-[#007bffee]">Contact Us</Link>
                        </div>
                        <div className="flex-1">
                            <img data-aos="fade-left" data-aos-duration="2300" src={aboutImg} alt="" />
                        </div>
                    </div>
                </div>
            </div>
            <Testimonials></Testimonials>
        </div>
    );
};

export default About;