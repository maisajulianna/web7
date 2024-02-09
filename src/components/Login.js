// components/Login.js
import { Outlet, Link } from 'react-router-dom';

function Login() {
  return (
    <section className="login-box">
      <h2>Login</h2>
      <p>Welcome to our website!</p>
      <form action="/submit_registration" method="post">
        <label htmlFor="username">Username: </label>
        <input type="text" id="username" required/><br />

        <label htmlFor="email">Email: </label>
        <input type="email" id="email" name="email" required/><br />

        <label htmlFor="password">Password: </label>
        <input type="password" id="password" name="password" required/><br />

        <div className="buttons">
          <button type="submit" id="turq-btn">Login</button>
        </div>
      </form>
      <p>Dont have an account?<br />
      <Link className="link-btn" to="/register">Register here!</Link>
      </p>
    </section>
  );
}


export default Login;