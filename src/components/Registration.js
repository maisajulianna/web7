// components/Registration.js
import { Outlet, Link } from 'react-router-dom';

function Registration() {
    return (
      <section className="login-box">
        <h2>Register</h2>
        <p>Please fill the form to register.</p>
        <form action="/submit_registration" method="post">

          <input type="text" id="username" placeholder="Username" required/><br />
          <input type="email" id="email" name="email" placeholder="Email" required/><br />
          <input type="password" id="password" name="password" placeholder="Password" required/><br />
          <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required/><br />

          <div className="buttons">
            <button type="submit" id="turq-btn">Sign up</button>
          </div>

        </form>
        <p>Already have an account?<br />
        <Link className="link-btn" to="/login">Login here!</Link>
        </p>
      </section>
    );
  }

  /* this can be used to create a label before an input box:
  <label htmlFor="username"> </label> */
  
  export default Registration; 