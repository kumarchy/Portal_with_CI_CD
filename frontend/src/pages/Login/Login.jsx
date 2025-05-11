import React, { useContext, useState } from 'react';
import './Login.css';
import { assets } from '../../assets/assets';
import { StoreContext } from '../../context/StoreContext';
import axios from 'axios';

const Login = ({ setShowLogin, type, loginNavigate }) => {
  const { url, setToken } = useContext(StoreContext);

  const [currState, setCurrState] = useState("Login");
  const [data, setData] = useState({
    name: "",
    email: "",
    password: ""
  });
  
  const onchangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data => ({ ...data, [name]: value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    try {
      let newUrl = url;
      if (currState === "Login") {
        newUrl += "/api/user/login";
      } else {
        newUrl += "/api/user/register";
      }

      const response = await axios.post(newUrl, data);
      
      if (response.data.success) {
        if (currState === 'Login') {
          setToken(response.data.token);
          localStorage.setItem("token", response.data.token);
          setShowLogin(false);
          loginNavigate(type);
        } else {
          setCurrState("Login");
          setData({
            name: "", 
            email: "",
            password: "" 
          });
        }
      } else {
        alert(response.data.message);
      }
    } catch (error) {
      console.error("Login/Signup Error:", error);
      alert(error.response?.data?.message || "An error occurred during authentication");
    }
  };
  
  return (
    <div className="login">
      <form className="login-container" onSubmit={handleSubmit}>
        <div className="login-title">
          <h2>{currState}</h2>
          <img onClick={() => setShowLogin(false)} src={assets.cross_icon} alt="" />
        </div>
        
        <div className="thumb-image">
          {type === "parent" ? 
            <img src={assets.parent_thumb} alt="Parent Thumbnail" /> : 
            <img src={assets.student_thumb} alt="Student Thumbnail" />
          }
        </div>

        <div className="login-inputs">
          {currState === "Login" ? null : 
            <input 
              name="name" 
              onChange={onchangeHandler} 
              value={data.name} 
              type="text" 
              placeholder="Your Name" 
              required 
              autoComplete="name"
            />
          }
          <input 
            name="email" 
            onChange={onchangeHandler} 
            value={data.email} 
            type="email" 
            placeholder="Your email" 
            required 
            autoComplete="username"
          />
          <input 
            name="password" 
            onChange={onchangeHandler} 
            value={data.password} 
            type="password" 
            placeholder="Password" 
            required 
            autoComplete="current-password"
          />
        </div>
        
        <button type="submit">{currState === "Sign Up" ? "Create account" : "Login"}</button>

        <div className="login-condition">
          <input type="checkbox" required />
          <p>By Continuing, I agree to the terms of use & privacy policy.</p>
        </div>

        {currState === "Login" ? (
          <p>Create a new account? <span onClick={() => setCurrState("Sign Up")}>Click here</span></p>
        ) : (
          <p>Already have an account? <span onClick={() => setCurrState("Login")}>Login here</span></p>
        )}
      </form>
    </div>
  );
};

export default Login;