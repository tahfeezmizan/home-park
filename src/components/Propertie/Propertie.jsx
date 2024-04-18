import { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import SinglePropertie from "./SinglePropertie";
import Testimonials from "../Testimonials/Testimonials";

const Propertie = () => {
    const [properties, setPropertie] = useState([]);

    useEffect(() => {
        fetch('residential.json')
            .then(res => res.json())
            .then(data => setPropertie(data))
    }, [])

    return (
        <div className="bg-gray-100">
            <Helmet>
                {/* <title>Properties - Home Park </title> */}
            </Helmet>
            <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 py-10 md:py-12 lg:py-20">
                <h2 data-aos="fade-left" data-aos-duration="1700" className="text-4xl md:text-5xl font-semibold text-center pb-4">Featured Properties</h2>

                <p data-aos="fade-left" data-aos-duration="1800" className="text-center pb-10 font-normal px-2 lg:px-32  xl:px-56">Few word argue that, ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur excepteur sint occaecat cupidatat non proident, sunt in culpa qui</p>
                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-10">
                    {
                        properties?.map(card => <SinglePropertie key={card.id} cards={card}></SinglePropertie>)
                    }
                </div>
            </div>
            <Testimonials></Testimonials>
        </div>
    );
};

export default Propertie;
