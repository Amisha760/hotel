import React from 'react'
import {Link} from 'react-router-dom';
import logo from '../images/BB 2.png'
function Navbar() {
  return (<> 
      
        <nav class="navbar navbar-expand-lg" >
  <div class="container-fluid">
    <Link to="#"><img src={logo} alt="logo" /></Link>
    <div id="nav1" class="container-fluid" style={{float:"right"}} >
    <Link to="/" className="navbar-brand">Home</Link>
    <Link to="/Aboutus" className="navbar-brand" >About Us</Link>
    <Link to="/ContactUs" className="navbar-brand">Contact Us</Link>
    <Link to="/signup" className="navbar-brand" >Sign Up</Link>
    <Link to="/login" className="navbar-brand" >Login</Link>
    <Link to="/logout" className="navbar-brand" >Logout</Link>
   
   
    
    
    
    
    </div>
    </div>
</nav>
    </>
  )
}
export default Navbar;