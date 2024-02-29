// components/Registration.js
import { Outlet, Link } from 'react-router-dom';
import React from 'react';
import useSignup from "../hooks/useSignup";
import useField from "../hooks/useField";

const SignupComponent = ({ setIsAuthenticated }) => {
  const emailInput = useField("email");
  const passwordInput = useField("password");
  const password2Input = useField("password");
  const usernameInput = useField("text");

  const { handleSignup } = useSignup(setIsAuthenticated);

  const handler = () => {
    handleSignup(emailInput.value, passwordInput.value, usernameInput.value);
  };
  
  return (
    <div className="login-box">
      <h2>Register</h2>
      <p>Please fill the form to register.</p>
      <label>
        <input type="text" id="username" placeholder="Username" required {...usernameInput}/>     
      </label>
      <br />
      <label>
        email:
        <input type="email" id="email" name="email" placeholder="Email" required {...emailInput} />
      </label>
      <br />
      <label>
        Password:
        <input
          type="password" placeholder='Password' {...passwordInput}/>
      </label>
      <label>
        Repeat Password:
        <input
          type="password2" placeholder='Again' {...passwordInput}/>
      </label>
      <br />
      
      <div className="buttons">
        <button type="submit" className="turq-btn" onClick={handler}>Register</button>
      </div>
      <p>Already have an account?<br />
        <Link className="link-btn" to="/login">Login here!</Link>
        </p>

</div>
);
};

export default SignupComponent;

/*
function confirmPassword (
  document.getElementById("signupForm").addEventListener("submit", function(event){
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    if (password !== confirmPassword) {
      alert("Passwords do not match");
      event.preventDefault();
    }
  });
);
*/

// function Registration() {

//     return (
//       <div className="login-box">
//         <h2>Register</h2>
//         <p>Please fill the form to register.</p>
//         <form action="/submit_registration" method="post">

//           <input type="text" id="username" placeholder="Username" required/><br />
//           <input type="email" id="email" name="email" placeholder="Email" required/><br />
//           <input type="password" id="password" name="password" placeholder="Password" required/><br />
//           <input type="password" id="confirmPassword" name="confirmPassword" placeholder="Confirm Password" required/><br />

//           <div className="buttons">
//             <button type="submit" className="turq-btn">Sign up</button>
//           </div>

//         </form>

//         <script>
//           confirmPassword();
//         </script>

//         <p>Already have an account?<br />
//         <Link className="link-btn" to="/login">Login here!</Link>
//         </p>
//       </div>
//     );
//   }

//   /* this can be used to create a label before an input box:
//   <label htmlFor="username"> </label> */
  
//   export default Registration;