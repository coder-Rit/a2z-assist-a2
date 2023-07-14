import React, { useState } from "react";
import "./LoginPage.css";
import Navbar from "../Navgator/Navbar";
 

const LoginPage = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [forgotPassword, setForgotPassword] = useState(false);

  //   const handleLogin = (e) => {
  //     e.preventDefault();
  //     // Perform login logic here
  //     // Example: validate credentials, redirect user, etc.
  //     if (username === 'admin' && password === 'password') {
  //       // Successful login
  //       console.log('Logged in!');
  //     } else {
  //       // Failed login
  //       setErrorMessage('Invalid username or password');
  //     }
  //   };

  //   const handleForgotPassword = () => {
  //     setForgotPassword(true);
  //   };

  //   const handleBackToLogin = () => {
  //     setForgotPassword(false);
  //     setErrorMessage('');
  //   };

  const [rotation, setRotation] = useState(0);

  const changePositionTo = (deg) => {
    setRotation(deg);
  };

  return (
    // <div className="login-page">
    //   <div className="login-container">
    //     <h2 className="login-heading">{forgotPassword ? 'Forgot Password' : 'Login'}</h2>
    //     {errorMessage && <p className="login-error-message">{errorMessage}</p>}
    //     {forgotPassword ? (
    //       <div>
    //         <p className="forgot-password-text">Please enter your email address:</p>
    //         <input type="email" placeholder="Email" className="forgot-password-input" />
    //         <button onClick={handleBackToLogin} className="back-to-login-button">
    //           Back to Login
    //         </button>
    //       </div>
    //     ) : (

    //     )}
    //     <div className="register-link">
    //       Don't have an account? <a href="/register" className="register-anchor">Register</a>
    //     </div>
    //   </div>
    // </div>
<div>
<Navbar currentPage ="auth"></Navbar>

    <div className="cube-menu">
      <div className="cube" style={{ transform: `rotateY(${rotation}deg) ` }}>
        <div className="cube-face front">
          <div className="login-container auth-container normalizeScale"  >
            <h1 className="form-title">Login</h1>
            <form autocomplete="off">
              <label htmlFor="username" >Username</label>
              <input type="text" id="username" name="username"   maxLength={14} required />
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" required />
              <a style={{textAlign:"right",fontSize:"14px",color:"#dbdbdb  ",marginBottom:"20px"}} onClick={() => changePositionTo(90)}>
                Forgot Password ?
              </a>

              <button type="submit" style={{backgroundColor: "rgba(136, 0, 255, 0.738)" ,color:"white"}}>Log in</button>
              <button type="submit">  <img src="./Images/g-logo.png" alt="g-logo"></img> Log in with Google</button>
            </form>
            <p>
              <a href="" style={{fontSize:"14px",color:"#dbdbdb "}}  >

              Don't have an account?{" "}
              </a>
              <a
               
                id="signup-link"
                onClick={() => changePositionTo(-90)}
              >
                Sign up
              </a>
            </p>
          </div>  

          {/* <span onClick={()=>changePositionTo(90)}>forgotpass</span> */}

          {/* <div>
            <p className="forgot-password-text">Please enter your email address:</p>
            <input type="email" placeholder="Email" className="forgot-password-input" />
            <button onClick={handleBackToLogin} className="back-to-login-button">
              Back to Login
            </button>
          </div> */}
        </div>

        <div className="cube-face right">
           
          <div className="signup-container  auth-container normalizeScale"  >
            <h1 className="form-title">Sign up</h1>
            <form autocomplete="off">
              <label htmlFor="new-username">Username</label>
              <input
                type="text"
                id="new-username"
                name="new-username"
                maxLength={14}
                required
              />
              <label htmlFor="new-email">Email</label>
              <input type="email" id="new-email" name="new-email" required />
              <label htmlFor="new-password">Password</label>
              <input
                type="password"
                id="new-password"
                name="new-password"
                required
              />
              <button type="submit">Sign up</button>
              <button type="submit"> <img src="./Images/g-logo.png" alt="g-logo"></img>  Sign up with Google</button>
            </form>
            <p>
              <a style={{fontSize:"14px",color:"#dbdbdb "}} >


              Already have an account?{" "}
              </a>
              <a   id="login-link" onClick={() => changePositionTo(0)}>
                Login
              </a>
            </p>
          </div>
        </div>
        <div className="cube-face left">
          <div className="login-container  auth-container normalizeScale"  >
            <h1 className="form-title">Forgot Password</h1>
            <form autocomplete="off">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" required  />
              <button type="submit">Send OTP</button>
            </form>
            <p>
              <a style={{fontSize:"14px",color:"#dbdbdb "}} >

              Remember your password?{" "}
              </a>
              <a   id="login-link" onClick={() => changePositionTo(0)}>
                Login
              </a>
            </p>
          </div>
        </div>
      </div>
    </div></div>
  );
};

export default LoginPage;
