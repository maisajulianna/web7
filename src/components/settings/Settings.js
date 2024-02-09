import { Outlet, Link } from 'react-router-dom';
import "../Navigation.css";

function Settings() {
    return (
      <>
      <section className="settings-box">
        <div className="setting-info">
            <button id="account">Account</button>
            <button id="notifs">Notifications</button>
            <button id="blocks">Blocked</button>
            <button id="privacy">Privacy and Security</button>
            <button id="terms">Terms Of Use</button>
            <button id="help">Help</button>
        </div>
      </section>

      <main className="page-content">
        <Outlet />
      </main>
      </>
    );
  }
  
  export default Settings;
