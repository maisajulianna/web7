// components/Start.js
import { Outlet, Link } from 'react-router-dom';

function Start() {
  return (
    <div className="start">
      <h1>Welcome to AMACEN!</h1>
      <p>Here we believe in the power of connection to enhance your academic journey.
      Join us to discover new friendships, share knowledge, and create meaningful 
      connections that extend beyond the classroom.</p>

      <p><br />Want to join us?<br />
      <Link className="link-btn" to="/signup">Register here!</Link>
      </p>

      <p><br />Or<br /><br />
      <Link className="turq-btn" id="start-btn" to="/login">Log in</Link>
      </p>
    </div>
  );
}

export default Start;