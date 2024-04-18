import { CiLocationOn } from "react-icons/ci";
import { Link } from "react-router-dom";

const SinglePropertie = ({ cards }) => {

    const { id, image, estate_title, segment_name, price, status, area, location, button_text } = cards;

    // console.log('Estate Title', cards)

    return (
        <div data-aos="fade-right" data-aos-duration="1800" className="bg-white rounded-xl flex justify-around flex-col overflow-hidden">
            <div className="relative">
                <span className='absolute right-4 top-4 z-50 bg-yellow-500 text-white text-base font-medium rounded-lg capitalize px-3'>{status}</span>
                <img className="w-full h-full object-cover transition-transform transform hover:scale-105 duration-500 ease-in-out" src={image} alt="" />
            </div>
            <div className="p-5 pb-0">
                <p className="text-blue-500 text-xl font-semibold pb-4">{price} <span className="text-base">per month</span></p>
                <h2 className="text-lg font-medium">{estate_title}</h2>
                <p className=" flex items-center gap-2 pb-3 text-gray-400"><span className="text-blue-500"><CiLocationOn /></span>{location}</p>

                <div className="flex items-center gap-24 mb-3">
                    <p><span className="bg-">{segment_name}</span></p>
                    <p className="text-gray-400 text-base">Sq ft <span className="font-bold text-black">{area}</span></p>
                </div>
            </div>
            <div className="p-5 pt-0">
                <Link to={`/cards/${id}`} className="btn text-white bg-[#007bff] hover:bg-[#007bffee]">{button_text}</Link>
            </div>
        </div>
    );
};

export default SinglePropertie;