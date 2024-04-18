import { Outlet } from 'react-router-dom';
import Navigation from './Header/Navigation';
import Footer from './Footer/Footer';

const Root = () => {
    return (
        <div>
            <Navigation></Navigation>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default Root;