import React, { useState, useEffect } from "react";
import "./Register.css";
import { Link, useHistory } from "react-router-dom";
import AmazonLogo from "../../Amazon_Logo.png";
import { useSelector, useDispatch } from "react-redux";
import { registerInitiate } from "../../redux/actions";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let dispatch = useDispatch();
  const { user } = useSelector((state) => state.data);
  const history = useHistory();
  // console.log("state=>", state.data);
  useEffect(() => {
    if (user) {
      history.push("/");
    }
  }, [user, dispatch]);
  const register = (e) => {
    e.preventDefault();
    dispatch(registerInitiate(email, password));
    setEmail("");
    setPassword("");
  };
  return (
    <div className="register">
      <Link to="/">
        <img src={AmazonLogo} alt="ref?nav_logo" className="register-logo" />
      </Link>
      <div className="register-container">
        <h1>Create Account</h1>
        <form>
          <h5>E-Mail</h5>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type="submit" onClick={register} className="continue">
            Continue
          </button>
          <div className="detail">
            <p>Already have an Account ? </p>
            <Link to="/login" className="signin-link">
              <p>Sign In</p>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
