import React, { useState } from "react";
import "../css/LogIn.css";

import { useNavigate } from "react-router-dom";
import Navbar from './navbar'

function LogIn()
{
    const navigate=useNavigate();
    const [email,setEmail]=useState('');
    const [password,setPassword]=useState('');
      
    const loginUser= async (e)=>{
          e.preventDefault();
            const res=await fetch('/login',
            {
              method:"POST",
              headers:{
                "Content-Type":"application/json"
              },
              body:JSON.stringify({
               email,password
              })
            });
            const data= await res.json();
            if(res.status===400|| !data){
                window.alert("invalid credentials,Try again");
               
            }
            else{
                window.alert("user signed in sucessfully");
                navigate("/");
            } 
            
            
    
        }
    return(
    <>
     {/* <div className="heading">Log In</div> */}

     <Navbar/>
    <div className="card">
        
      <div class="login"> <strong><h3>Login Here</h3></strong></div>
  
    <div>
        <div className="inputbox"> <span>Email</span> <input type="text" style={{width:"100%"}} name="email" className="form-control" required="required" value={email} onChange={(e)=>setEmail(e.target.value)}/> </div>
        <div className="inputbox">
            <div className="d-flex justify-content-between align-items-center"> <span>Password</span> <a href="#">Forgot your password?</a> </div> <input type="text" style={{width:"100%"}} name="password" className="form-control" required="required" value={password} onChange={(e)=>setPassword(e.target.value)}/>
        </div>
    </div>
    <div class="mt-2 proceed">
        <div className="form-check mb-1"> <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/> <label className="form-check-label" for="flexCheckDefault"> I have read and agree to the <a href="#">Terms of service</a> </label> </div>
         <button className="btn btn-dark" onClick={loginUser}> Login </button>
    </div>
</div>
</>
    );
}


export default LogIn;