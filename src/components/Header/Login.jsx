import { useState } from "react";
import { Helmet } from "react-helmet-async";
import { useForm } from "react-hook-form";
import { FaRegEye, FaRegEyeSlash } from "react-icons/fa6";
import { NavLink, useLocation, useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import UseAuth from "../../Hooks/UseAuth";
import AboutBg from '../../assets/about-bg-.jpg'
import './Navigation.css';

const Login = () => {
    const { singInUser, googleLogin, githubLogin } = UseAuth();
    const [showPassword, setShowPassword] = useState(false);
    const navigate = useNavigate()
    const location = useLocation();
    console.log('Login Location', location)

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const onSubmit = (data) => {
        const { email, password } = data;

        singInUser(email, password)
            .then(result => {
                const user = result.user;
                navigate(location?.state ? location.state : '/');
                toast.success('Congrs! Login Sucessfull');
            })
            .catch(error => {
                const errorText = error.message;
                const errorMessage = errorText.slice(22, 40);
                toast.error(`${errorMessage}`)
            });
    }

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div className="glass hero min-h-screen bg-base-200" style={{
            backgroundImage: `url(${AboutBg})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
        }}>
            <Helmet>
                <title>Login - Home Park React Template</title>
            </Helmet>
            <div className="card shrink-0 w-full max-w-lg p-10 shadow-2xl bg-base-100">
                <h1 className="text-5xl text-center font-bold pt-10">Login now!</h1>
                <form onSubmit={handleSubmit(onSubmit)} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Email</span>
                        </label>
                        <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email"
                            className="input input-bordered"

                            {...register("email", { required: true })}
                        />
                        {errors.email && <span className="text-xs text-red-500">Email is required</span>}
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Password</span>
                        </label>
                        <div className="relative input input-bordered flex items-center">
                            <input
                                type={showPassword ? "text" : "password"}
                                name="password"
                                placeholder="Enter Your Password"
                                className="w-4/5"
                                {...register("password", { required: true })}
                            />
                            <button
                                type="button"
                                onClick={togglePasswordVisibility}
                                className="absolute inset-y-0 right-4 flex items-center"
                            >
                                {showPassword ? <FaRegEyeSlash className="h-6 w-6 text-gray-500" /> : <FaRegEye className="h-6 w-6 text-gray-500" />}
                            </button>
                        </div>
                        {errors.password && <span className="text-xs text-red-500">Password is required</span>}
                    </div>
                    <div className="form-control my-6">
                        <button className="btn  bg-[#007AFF] hover:bg-[#007bffde] text-white text-xl font-bold">Login</button>
                    </div>
                </form>
                <div className="text-center">
                    <h2 className="mb-5 -mt-6"> Login With</h2>
                    <div className=''>
                        <button
                            onClick={() => googleLogin()
                                .then(result => {
                                    toast.success('Congrs! Login Sucessfull');
                                    navigate(location?.state ? location.state : '/');
                                })
                                .catch((error) => {
                                    const errorText = error.message;
                                    const errorMessage = errorText.slice(22, 40);
                                    toast.error(errorMessage)
                                })
                            }
                            className='btn mr-3'>Google

                        </button>

                        <button
                            onClick={() => githubLogin()
                                .then(result => {
                                    toast.success('Congrs! Login Sucessfull');
                                    navigate(location?.state ? location.state : '/');
                                })
                                .catch((error) => {
                                    const errorText = error.message;
                                    console.log(errorText)
                                    const errorMessage = errorText.slice(22, 62);
                                    toast.error(errorMessage)
                                })
                            }
                            className='btn ml-3'>GitHub
                        </button>
                    </div>
                </div>
                <h3 className="text-black text-center pt-3">Don't have an account? <NavLink to="/register" className="text-[#007AFF] font-bold">Create Account</NavLink></h3>
            </div>
        </div>
    );
};

export default Login;