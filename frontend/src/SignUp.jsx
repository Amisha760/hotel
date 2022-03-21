import "./Signup.css";
import Navbar from './navbar'
import { useState } from "react";
import { useNavigate } from "react-router-dom";
function SignUp(){
  const navigate=useNavigate();
  const [user,setUser]=useState({
    name:"",email:"",password:"",cpassword:""
  })
  let name,value;
 const handleInput=(e)=>{
   console.log(e);
   name=e.target.name;
   value=e.target.value;

   setUser({...user,[name]:value});
 }
 
 const postData=async(e)=>{
   e.preventDefault();
    const {name,email,password,cpassword}=user;
   const res=await fetch("/register",{
     method:"POST",
     headers:{
       "Content-Type":"application/json"
     },
     body:JSON.stringify({
      name,email,password,cpassword
     })
   });
  //verify response ,not show pending state
   const data=await res.json();
     if(res.status===422 || !data){
       window.alert("invalid registration");
     }
     else{
      window.alert("registration sucessfull");
      navigate("/login");
     }

    
 }
    return (
      <>
      <div id="nav">
      <Navbar/>
      </div>
    <div>
  <form className="main">

	  <div className="register"><h3>Register Here</h3></div>
	  <div className="mb-3">
    <label for="Name" className="form-label"  >Name</label>
    <input type="name" className="form-control" id="name" name="name" value={user.name} onChange={handleInput} />
  
  </div>
  <div className="mb-3">
    <label for="exampleInputEmail1" className="form-label">Email address</label>
    <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" name="email" value={user.email} onChange={handleInput}/>
    <div id="emailHelp" className="form-text">We'll never share your email with anyone else.</div>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword1" className="form-label">Password</label>
    <input type="password" className="form-control" id="exampleInputPassword1" name="password" value={user.password} onChange={handleInput}/>
  </div>
  <div className="mb-3">
    <label for="exampleInputPassword2" className="form-label" >Confirm Password</label>
    <input type="password" className="form-control" id="exampleInputPassword2"  name="cpassword" value={user.cpassword} onChange={handleInput}/>
  </div>
  <div className="mb-3 form-check">
    <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
    <label className="form-check-label" for="exampleCheck1">Check me out</label>
    
  </div>
  <button type="submit" className="btn btn-dark" onClick={postData}>Register</button>
  <br/>
  <br/>
  <a href="/login">Already have an account</a> 
</form>
</div>
</>
	);
	}
export default SignUp;