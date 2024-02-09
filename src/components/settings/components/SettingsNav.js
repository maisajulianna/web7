import { Outlet, Link } from 'react-router-dom';
import "../../Navigation.css";

const SettingsNav = () => {
  return (
      <>
      <nav className="setnav">
        <ul>
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
              <Link to="/home">Go Back</Link>
          </li>
        </ul>
      </nav>

      <main className="settings-content">
        <Outlet />
      </main>
      </>
  );
}

export default SettingsNav;

