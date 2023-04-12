import React, { useState } from "react";
import Axios from 'axios';
import { useNavigate } from "react-router-dom";
import App from "../App";
import "./style/login.css"


function Login(){
  
const [userNameRegistration, setUsernameRegistration] = useState('');
const [passwordRegistration, setPasswordRegistration] = useState('');

const [userName, setUsername] = useState('');
const [password, setPassword] = useState('');

const [loginStatus, setLoginStatus] = useState('');

let navigate = useNavigate();

const register = () => {
  Axios.post('http://localhost:3002/register', {
    username: userNameRegistration,
     password: passwordRegistration,
    }).then((response) => {
       console.log(response);
    });
}

const login = () => {
  Axios.post('http://localhost:3002/login', {
    username: userName,
     password: password,
    }).then((response) => {
      if (response.data.message){
        setLoginStatus(response.data.message)
      } else{
        navigate('../Home');
      }
    });
}

  return(
    <div className="loginPage">
        <div className="registration">
            <h1 className="registration-label">Registration</h1>
            <label> Username</label>
            <input type="text" onChange={(e)=>
               {setUsernameRegistration(e.target.value)}}></input>
            <label> Password</label>
            <input type="password" onChange={(e)=> 
              {setPasswordRegistration(e.target.value)}}></input>
            <button onClick={register}>Register</button>
        </div>
        <div className="login">
            <h1 className="login-label">Login</h1>
            <input type="text" placeholder="Username"
            onChange={(e) => {
              setUsername(e.target.value);
            }}/>
            <input type="password" placeholder="Password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            />
            <button onClick={login}>Login</button>
        </div>

        <h1>{loginStatus}</h1>
    </div>
  )
  };


export default Login;