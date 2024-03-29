import { Outlet, useLocation } from 'react-router-dom';
import Footer from '../pages/Shared/Footer/Footer';
import Navbar from '../pages/Shared/Navbar/Navbar';
import TopNav from '../pages/Home/TopNav/TopNav';

const Main = () => {
    const location = useLocation();

    const removeNavFooter = location.pathname.includes('login') || location.pathname.includes('signup');

    return (
        <div>
            { removeNavFooter || <TopNav></TopNav>}
            { removeNavFooter || <Navbar></Navbar>}
            <Outlet />
            { removeNavFooter || <Footer></Footer>}
        </div>
    );
};

export default Main;