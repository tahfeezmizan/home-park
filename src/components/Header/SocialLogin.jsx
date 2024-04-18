import { useLocation, useNavigate } from 'react-router-dom';
import UseAuth from '../../Hooks/UseAuth';

const SocialLogin = () => {
    const { user, googleLogin, githubLogin } = UseAuth();
    const location = useLocation();
    const navigate = useNavigate()
    console.log("Social Login", user)
    console.log(location)

    googleLogin(auth, provider){
        
    }

    return (
        <div className=''>
            <button
                onClick={() => googleLogin()}
                className='btn mr-3'>Google
                
            </button>

            <button
                onClick={() => githubLogin()}
                className='btn ml-3'>GitHbu
            </button>
        </div>
    );
};

export default SocialLogin;