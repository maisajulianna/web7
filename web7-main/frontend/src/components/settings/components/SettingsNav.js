import { Outlet, Link } from 'react-router-dom';

const SettingsNav = () => {
  return (
      <>
      <nav className="setnav">
        <ul className="all-navs">
          <li>
            <Link to="/settings/account">Account</Link>
          </li>
          <li>
            <Link to="/settings/notifs">Notifications</Link>
          </li>
          <li>
            <Link to="/settings/blocked">Blocked</Link>
          </li>
          <li>
              <Link to="/settings/privacy">Privacy and Security</Link>
          </li>
          <li>
              <Link to="/settings/terms">Terms of Use</Link>
          </li>
          <li>
              <Link to="/settings/help">Help</Link>
          </li>
          <li>
              <Link id="nav-home" to="/home">Go Back</Link>
          </li>
        </ul>
      </nav>

      <Outlet />
      </>
  );
}

export default SettingsNav;

