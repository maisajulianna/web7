import { Outlet, Link } from 'react-router-dom';
import logo from '../logo_small.png';

const Navigation = () => {
    return (
        <>
        <nav className="navbar">
            <ul>
            <li>
                <Link id="logo-link" to="/">
                    <img id="nav-logo" src={logo} alt="logo" />
                </Link>
            </li>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            <li>
                <Link to="/settings">Settings</Link>
            </li>
            <li>
                <Link id="nav-login" to="/login">Login</Link>
            </li>
            </ul>
        </nav>
    
        <Outlet />
        </>
    );
};

/* login is here for navigation, to be removed */

export default Navigation;

/*
<main className="page-content">
<Outlet />
</main>*/