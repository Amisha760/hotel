import { useState ,useEffect} from "react";
import Navbar from "./navbar";
import { useNavigate } from "react-router-dom";
 function ContactUs(){
//    const history=useNavigate();
//    const [userData,setUserData]=useState({});
//   const UserContact= async()=>{

//     try{
//          const res=await fetch('/getData',{
//              method:"GET",
//              headers:{
             
//                  "Content-Type":"application/json",
//              },
             
        
//            });
       
//           const data=await res.json();
//           console.log(data);
//           setUserData(data);
//            if(!res.status=== 200){
//              const err=new Error(res.error);
//              throw err;
//            }
//     }
//            catch(err){
             
//            history("/signup");
//            window.alert("You are not signed in");
//            }
     
   
//  }
//    useEffect(()=>{
//        UserContact();
//    });
     return (
         <>
         
         <Navbar/>
         <div id="contactmain"> 
         <div id="getintouch"><h3>Get in Touch</h3></div>
         <div class="row g-3" >
  <div className="col">
    <input type="text" class="form-control" placeholder="Your name" aria-label="First name" name="name"/>
  </div>
  <div className="col">
    <input type="text" class="form-control" placeholder="Your Email" name="email"/>
  </div>
  <div className="col">
    <input type="text" class="form-control" placeholder=" your phonenumber" name="phone" />
  </div>
  </div>
  <div id="textarea">
  <div className="col-md-12">
    <textarea type="text" id="messagebox" className="form-control" placeholder=" your message here..." name="message"  />
  </div>
</div>
<button type="submit" className="btn btn-dark" >Submit</button>
</div>
{/* <div className="form-floating">
  <textarea className="form-control" placeholder="Leave a comment here" id="floatingTextarea2" style="height: 100px"></textarea>
  <label for="floatingTextarea2">Comments</label>
</div> */}

         </>
     );
 }
 export default ContactUs;