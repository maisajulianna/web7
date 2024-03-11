import { Link } from "react-router-dom";
import logo from '../logo_small.png';

function Navbar({ setIsAuthenticated, isAuthenticated }) {  
  const handleClick = () => {
    // remove user from storage
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    setIsAuthenticated(false);
  };

  return (
    <nav className="navbar">
    <ul>
        {isAuthenticated && (
        <li>
            <Link id="logo-link" to="/">
                    <img id="nav-logo" src={logo} alt="logo" />
            </Link>
        </li>
        )}
    </ul>
    </nav>
  );
}

/* after </link>: <button onClick={handleClick}>Log out</button>*/
/*         )}
        {!isAuthenticated && (
        <li>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
        </li>
      )}
*/

export default Navbar;