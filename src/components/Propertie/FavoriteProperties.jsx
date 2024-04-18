import { CiLocationOn } from "react-icons/ci";
import { NavLink } from "react-router-dom";

const FavoriteProperties = ({ wishlistCard }) => {
    const { id, image, estate_title, segment_name, price, status, area, location, facilities } = wishlistCard;
    return (
        <div className="flex flex-col md:flex-row items-center gap-3 md:gap-10 border p-6 mb-6 rounded-xl">
            <div className="bg-gray-100 rounded-2xl flex items-center justify-center p-10">
                <img className="max-w-64 max-h-60 rounded" src={image} data-aos="fade-right" data-aos-duration="2300" alt="" />
            </div>
            <div className="">
                <h2 data-aos="fade-left" data-aos-duration="2300" className="text-3xl font-bold mb-2">{estate_title}</h2>
                <p data-aos="fade-left" data-aos-duration="2300" className='font-bold mb-4 text-xl text-blue-500'>{price} per month</p>
                <p data-aos="fade-left" data-aos-duration="2300" className=" flex items-center gap-2 pb-3 text-gray-400"><span className="text-blue-500"><CiLocationOn /></span>{location}</p>

                <div className="flex gap-4 items-center pb-4 mb-4 border-b">
                    <p data-aos="fade-left" data-aos-duration="2300" className="font-medium">Area: <span className='bg-yellow-500 text-white text-base font-bold rounded-lg capitalize px-3'>{area}</span></p>

                    <p data-aos="fade-left" data-aos-duration="2300" className="font-medium">Category: <span className='bg-yellow-500 text-white text-base font-bold rounded-lg capitalize px-3'>{status}</span></p>

                    <p data-aos="fade-left" data-aos-duration="2300" className="font-medium">Segment: <span className='bg-yellow-500 text-white text-base font-bold rounded-lg capitalize px-3'>{segment_name}</span></p>
                </div>

                <div className="flex flex-col md:flex-row gap-4 md:items-center mb-4">
                    {
                        facilities?.map((tag, index) => <span key={index} data-aos="fade-left" data-aos-duration="2300" className='bg-green-100 rounded-full font-medium text-green-500 px-4 py-1'>#{tag}</span>)
                    }
                </div>
                <NavLink data-aos="fade-left" data-aos-duration="2300" to="/" className="btn btn-sm bg-green-400 text-white">Back To Home</NavLink>
            </div>
        </div>
    );
};

export default FavoriteProperties;