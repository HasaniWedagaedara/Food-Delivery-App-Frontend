import React,{useState} from 'react'
import './LoginPopup.css'
import { assets } from '../../assets/frontend_assets/assets';
import { useContext } from 'react';
import { StoreContext } from '../../context/StoreContext';
import axios from "axios";

const LoginPopup = ({setShowLogin}) => {

  const {url,setToken}=useContext(StoreContext)
const [currentState, setCurrentState] = useState('Login');
const [data,setData]=useState({
  name:"",
  email:"",
  password:""
})

const OnchangeeHandler =(event)=>{
  const name = event.target.name;
  const value= event.target.value;
  setData(data=>({...data,[name]:value}))
}

const onLogin = async (event)=>{
  event.preventDefault()

  let newUrl = url;
  if(currentState==="Login"){
    newUrl += "/api/user/login"
  }
  else{
    newUrl += "/api/user/register"
  }

  const response = await axios.post(newUrl,data);
  if(response.data.success){
     setToken(response.data.token);
     localStorage.setItem("token",response.data.token);
     setShowLogin(false);
  }
  else{
    alert(response.data.message);
  }
}


  return (
    <div className="login-popup">
      <form onSubmit={onLogin} className="login-popup-container">
        <div className="login-popup-title">
          <h2>{currentState}</h2>
          <img
            src={assets.cross_icon}
            alt="close"
            onClick={() => setShowLogin(false)}
          />
        </div>
        <div className="login-popup-input">
          {currentState === "Login" ? (
            <> </>
          ) : (
            <input
              name="name"
              onChange={OnchangeeHandler}
              value={data.name}
              type="text"
              placeholder="Your Name"
              required
            />
          )}
          <input
            name="email"
            onChange={OnchangeeHandler}
            value={data.email}
            type="email"
            placeholder="Your Email"
            required
          />
          <input
            name="password"
            onChange={OnchangeeHandler}
            value={data.password}
            type="password"
            placeholder="Password"
            required
          />
        </div>
        <button type="submit">
          {currentState === "Login" ? "Login" : "Create Account"}
        </button>
        <div className="login-popup-condition">
          <input type="checkbox" required />
          <p>I agree to the Terms of Service and Privacy Policy</p>
        </div>
        {currentState === "Login" ? (
          <p>
            Create a new account ?{" "}
            <span onClick={() => setCurrentState("Sign Up")}>Click Here</span>
          </p>
        ) : (
          <p>
            Already have an account ?{" "}
            <span onClick={() => setCurrentState("Login")}>Login Here</span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup
