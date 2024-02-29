// components/Login.js
import { Link } from 'react-router-dom';
import React from 'react';
import useLogin  from "../hooks/useLogin";
import useField from "../hooks/useField";

const Login = ({ setIsAuthenticated }) => {
  // const emailInput = useField("");
  const usernameInput = useField("");
  const passwordInput = useField("");

  const { handleLogin } = useLogin(setIsAuthenticated);

  const handler = () => {
    handleLogin(usernameInput.value, passwordInput.value);
  };
  
  return (
    <div className="login-box">
      <h2>Login</h2>
      <p>Welcome to our website!</p>
      <label>
        <input type="text" id="username" placeholder="Username" required {...usernameInput}/>     
      </label>
      <br />

      <label>
        Password:
        <input
          type="password" placeholder="Password" {...passwordInput}/>
      </label>
      <br />
      
      <div className="buttons">
        <button type="submit" className="turq-btn" onClick={handler}>Log in</button>
      </div>
      
      <p>Don't have an account?<br />
        <Link className="link-btn" to="/register">Register here!</Link>
      </p>

    </div>
  );
};

export default Login;

/*
<label>
        email:
        <input type="email" id="email" name="email" placeholder="Email" required {...emailInput} />
      </label>*/
// function Login() {
//   return (
//     <div className="login-box">
//       <h2>Log in</h2>
//       <p>Welcome to our website!</p>
//       <form action="/submit_registration" method="post">

//         <input type="text" id="username" placeholder="Username" required/><br />
//         <input type="email" id="email" name="email" placeholder="Email" required/><br />
//         <input type="password" id="password" name="password" placeholder="Password" required/><br />

//         <div className="buttons">
//           <button type="submit" className="turq-btn">Log in</button>
//         </div>

//       </form>

//       <p>Don't have an account?<br />
//         <Link className="link-btn" to="/register">Register here!</Link>
//       </p>
//     </div>
//   );
// }


// export default Login;