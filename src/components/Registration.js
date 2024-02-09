// components/Registration.js
import { Outlet, Link } from 'react-router-dom';

function Registration() {
    return (
      <section className="login-box">
        <h2>Register</h2>
        <p>Please fill the form to register.</p>
        <form action="/submit_registration" method="post">
          <label htmlFor="username">Username: </label>
          <input type="text" id="username" required/><br />

          <label htmlFor="email">Email: </label>
          <input type="email" id="email" name="email" required/><br />

          <label htmlFor="password">Password: </label>
          <input type="password" id="password" name="password" required/><br />

          <label htmlFor="confirmPassword">Confirm Password: </label>
          <input type="password" id="confirmPassword" name="confirmPassword" required/><br />

          <div className="buttons">
            <button type="submit" id="turq-btn">Sign up</button>
          </div>
          <p>Already have an account?<br />
          <Link className="link-btn" to="/">Login here!</Link>
          </p>
        </form>
      </section>
    );
  }
  
  export default Registration; 