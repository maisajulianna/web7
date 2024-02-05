import { Outlet, Link } from 'react-router-dom';
import "./Navigation.css";

const Navigation = () => {
    return (
        <>
        <nav className="navbar">
            <ul>
            <li>
                <Link to="/">Login</Link>
            </li>
            <li>
                <Link to="/home">Home</Link>
            </li>
            <li>
                <Link to="/profile">Profile</Link>
            </li>
            </ul>
        </nav>
    
        <main className="page-content">
            <Outlet />
        </main>

        </>
    );
};

export default Navigation;