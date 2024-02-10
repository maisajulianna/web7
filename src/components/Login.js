// components/Login.js
import { Outlet, Link } from 'react-router-dom';

function Login() {
  return (
    <section className="login-box">
      <h2>Log in</h2>
      <p>Welcome to our website!</p>
      <form action="/submit_registration" method="post">

        <input type="text" id="username" placeholder="Username" required/><br />
        <input type="email" id="email" name="email" placeholder="Email" required/><br />
        <input type="password" id="password" name="password" placeholder="Password" required/><br />

        <div className="buttons">
          <button type="submit" id="turq-btn">Log in</button>
        </div>

      </form>

      <p>Don't have an account?<br />
        <Link className="link-btn" to="/register">Register here!</Link>
      </p>
    </section>
  );
}


export default Login;