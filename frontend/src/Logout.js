import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';


const Logout=()=>{
    const history=useNavigate();
       useEffect(()=>{
        fetch('/logout',{
            method:"GET",
            headers:{
         
                "Content-Type":"application/json",
            },
       
          }).then((res)=>{
       //    const data=await res.json();
     
          history('/login',{replace:true});
          
          window.alert("sucessfully logout");
        
          if(!res.status=== 200){
            const err=new Error(res.error);
            throw err;
          }
          }).catch((err)=>{
              console.log(err);
          });
          
   
       
            
       });
    return (

        <div> 
            Logout 
        </div>
    )
}
export default Logout