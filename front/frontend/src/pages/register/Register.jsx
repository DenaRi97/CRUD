// import Login from "../login/Login"
import "./register.css"
import { Link } from 'react-router-dom';

export default function Register() {
//function to redirect to login in register form, delete after figuring out routes in app.jsx
  // const history = useHistory();
  // const handleLoginClick = () => {
  //   // Redirect to the login page
  //   history.push('/login');
  // };

  return (
      <div className="register">
    <span className="registerTitle">Register</span>
    <form className="registerForm">
      <label>Username</label>
      <input className="registerInput" type="text" placeholder="Enter your username..." />
      <label>Email</label>
      <input className="registerInput" type="text" placeholder="Enter your email..." />
      <label>Password</label>
      <input className="registerInput" type="password" placeholder="Enter your password..." />
      <button className="registerButton">Register</button>
    </form>
    <Link to="/login" className="registerLoginButton">Login</Link>
  </div>
  )
}