import { NavLink } from "react-router-dom";
import errorImg from '../../assets/error-image.svg'
import { Helmet } from "react-helmet-async";

const ErrorPage = () => {
    return (
        <div className='w-full lg:w-11/12 xl:w-8/12 mx-auto px-4 md:px-6 lg:px-0 py-10'>
            <Helmet>
                <title>404 Error Page - Home Park</title>
            </Helmet>
            <div className="flex flex-col justify-center items-center">
                <img src={errorImg} className='max-w-prose' alt="" />
                <NavLink to="/" className="btn bg-green-400 text-white">Back To Home</NavLink>
            </div>
        </div>
    );
};

export default ErrorPage;