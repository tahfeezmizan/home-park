import { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";
import { getStoredProperties } from "../utlity/localStorage";
import FavoriteProperties from "./FavoriteProperties";
import { Helmet } from "react-helmet-async";
import wishlistBg from '../../assets/wishlist.jpg'

const WishlistProperties = () => {
    const properties = useLoaderData()
    const [propertieCard, setPropertieCard] = useState([]);

    useEffect(() => {
        const storedIbs = getStoredProperties()
        console.log(storedIbs)
        if (properties.length > 0) {
            const storedPropertie = properties.filter(card => storedIbs.includes(card.id));
            setPropertieCard(storedPropertie)
        }
    }, [properties]);

    console.log(propertieCard)


    return (
        <div >
            <div className="text-center text-6xl py-32" style={{
                backgroundImage: `linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url(${wishlistBg})`,
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}>
                <Helmet>
                    <title>Wishlist - Home Park React Template</title>
                </Helmet>
                <div className="w-full lg:w-5/6 xl:w-8/12 mx-auto px-2 lg:px-0 text-white">
                    <h1 data-aos="fade-down" data-aos-duration="1700" className="font-bold" >Favorite  Properties</h1>
                </div>
            </div>

            <div className='w-full lg:w-11/12 xl:w-8/12 mx-auto px-4 md:px-6 lg:px-0 py-20'>
                <div className="">
                    {

                        propertieCard.map(card => <FavoriteProperties wishlistCard={card} key={card.id}></FavoriteProperties>)
                    }
                </div>
            </div>

        </div>
    );
};

export default WishlistProperties;