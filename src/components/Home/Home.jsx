import { Helmet } from "react-helmet-async";
import Propertie from "../Propertie/Propertie";
import Testimonials from "../Testimonials/Testimonials";
import Banner from "./Banner";
import LatestPost from "../LatestPost/LatestPost";

const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Home Park - React Template</title>
            </Helmet>
            <Banner></Banner>
            <Propertie></Propertie>
            <LatestPost></LatestPost>
        </div>
    );
};

export default Home;