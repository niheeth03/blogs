import React, { useState,useEffect } from 'react';
import{Link,useNavigate} from 'react-router-dom'
import './Register.css'
import axios from "axios"

function Register() {
  const [username,setUsername] = useState('') ;
  const [email,setEmail] = useState('');
  const [password,setPassword] =useState('');
  const [Error,setError]=useState(false);
  const Navigate=useNavigate()
  const handleSubmit=async(e)=>{
    e.preventDefault();
    setError(false);
    try{
      const res = await axios.post("/auth/register",{
        username,email,password
      });
      console.log(res);

     if(res?.data){
      localStorage.setItem("user", JSON.stringify(res.data));
      Navigate("/login")
     }
    } catch (err) {
      setError(true);
    }
    
  }
  return (
    <div className="register">
        <span className="registerTitle">Register</span>
      <form action="" className="registerForm" onSubmit={handleSubmit}>
      <label>UserName</label>
        <input type="text" className="registerInput" placeholder="Enter your UserName...."   onChange={(e)=>setUsername(e.target.value)}></input>
        <label>Email</label>
        <input type="email" className="registerInput" placeholder="Enter your Email...." onChange={(e)=>setEmail(e.target.value)}></input>
        <label>Password</label>
        <input type="password" className="registerInput" placeholder="Enter your Password...." pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" onChange={(e)=>setPassword(e.target.value)}></input>
        <button className="registerButton" type="submit">Register</button>
      </form>
      <button className="registerLoginButton">
        <Link to='/login' className="link">Login</Link>
      </button>
      {Error && <span style={{color:"red" ,marginTop:"10px"}}>Something went wrong!</span>}
    </div>
  );
}

export default Register;
