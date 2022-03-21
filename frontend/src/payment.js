import React,{useEffect, useState} from 'react'
import { useLocation } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import swal from 'sweetalert';

export default function Payment() {



    const {state} = useLocation();
    const {detail}=state;
    const history = useNavigate();

  const callpaymentpage= async()=>{
     try{
          const res=await fetch("/paymentb",{
              method:"GET",
              headers:{
                  Accept:"application/json",
                  "Content-Type":"application/json",
              },
              credentials:"include"//imp to write this, help to take data from cokkies to backend
         
            });
        
           const data=await res.json();
        //    console.log(data);
            if(!res.status=== 200||!data){
              const err=new Error(res.error());
              throw err;
            }
     }
            catch(err){
              
            history("/signup");
            window.alert("You are not signed in");
            }
      
    
  }
    useEffect(()=>{
        callpaymentpage();
    });
    const [user,setUser] = useState({
        cn:"",
        ex:"",
        chn:"",
        cvc:""
    });
    let id, value;
    const handleInputs = (e) => {
      id = e.target.id;
    value = e.target.value;
    setUser({ ...user, [id]: value });
    };
    const alert=()=>{
        const {cn,ex,chn,cvc} = user;
        var error=document.getElementById("error");
        var error1 = document.getElementById("error1");
        var error2 = document.getElementById("error2");
        var error3 = document.getElementById("error3");

        if(cn.length===0 || cn.length!==16){
            error.textContent = "Card Number should be of 16 Numbers";
            error.style.color = "red";
        }
        else if(cn.length===16){
            error.textContent="";
        }
        if(ex.length!==7 || ex.length===0){
            error1.textContent = "Card Number should be of 16 Numbers";
            error1.style.color = "red";
        }
        else if(ex.length===7 || ex.length!==0){
            error1.textContent = "";  
        }
        if(chn.length<=3  || chn.length>=16 || chn.length===0){
            error2.textContent = "Card Number should be of 16 Numbers";
            error2.style.color = "red";
        }
        else if(ex.length===7 || ex.length!==0){
            error2.textContent = "";  
        }
        if(cvc.length<3  || cvc.length>3 || cvc.length===0){
            error3.textContent = "Card Number should be of 16 Numbers";
            error3.style.color = "red";
        }
        else if(cvc.length===3){
            error3.textContent = "";  
        }
        if(error.textContent===""&&error1.textContent===""&&error2.textContent===""&&error3.textContent===""){
            swal({
                title: "Payment Succesfull ",
                text: "Your Room Had Been Booked, You will Be Redirected to Home Page",
                confirmButtonText: "Cool",
              }).then((res)=>{
                history("/");
        })
        
    }}

  return (
    <div class="container" >
        <form method='GET'>
    <div class="row m-0">
        <div class="col-lg-7 pb-5 pe-lg-5">
            <div class="row">
                <div class="col-12 p-5"> <img src={detail.image} alt=""/> </div>
                <div class="row m-0 bg-light">
                    <div class="col-md-6 col-6 ps-30 pe-0 my-4">
                        <p class="text-muted">Room Type</p>
                        <p class="h5">{detail.title}<span class="ps-1"></span></p>
                    </div>
                    <div class="col-md-6 col-6 ps-30 my-4">
                        <p class="text-muted">Parking</p>
                        <p class="h5 m-0">Available</p>
                    </div>
                    <div class="col-md-6 col-6 ps-30 my-4">
                        <p class="text-muted">Air Conditioning</p>
                        <p class="h5 m-0">Yes</p>
                    </div>
                    <div class="col-md-6 col-6 ps-30 my-4">
                        <p class="text-muted">Welcome Drinks</p>
                        <p class="h5 m-0">Offered At Hotel</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="col-lg-5 p-0 ps-lg-4">
            <div class="row m-0">
                <div class="col-12 px-4">
                    <div class="d-flex align-items-end mt-4 mb-2">
                        <p class="h4 m-0"><span class="pe-1">{detail.name}</span></p>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                        <p class="textmuted">Rooms</p>
                        <p class="fs-14 fw-bold">1</p>
                    </div>
                    <div class="d-flex justify-content-between mb-2">
                        <p class="textmuted">Subtotal</p>
                        <p class="fs-14 fw-bold">{detail.price}</p>
                    </div>
                    
                    <div class="d-flex justify-content-between mb-3">
                        <p class="textmuted fw-bold">Total</p>
                        <div class="d-flex align-text-top "><span class="h4">{detail.price}</span> </div>
                    </div>
                </div>
                <div class="col-12 px-0">
                    <div class="row bg-light m-0">
                        <div class="col-12 px-4 my-4">
                            <p class="fw-bold">Payment detail</p>
                        </div>
                        <div class="col-12 px-4">
                            <div class="d-flex mb-4"> <span class="">
                                    <p class="text-muted">Card number</p> <input class="form-control" type="number" id="cn" onChange={handleInputs}/>
                                </span>
                                <span id = "error"></span>
                                <div class=" w-100 d-flex flex-column align-items-end">
                                    <p class="text-muted">Expires Month</p> <input class="form-control2" type="text" id="ex" onChange={handleInputs}/>
                                </div>
                                <span id = "error1"></span>
                            </div>
                            <div class="d-flex mb-5"> <span class="me-5">
                                    <p class="text-muted">Cardholder name</p> <input class="form-control" type="text" id="chn" onChange={handleInputs}/>
                                </span>
                                <span id = "error2"></span>
                                <div class="w-100 d-flex flex-column align-items-end">
                                    <p class="text-muted">CVC</p> <input class="form-control3" type="number" id="cvc" onChange={handleInputs}/>
                                </div>
                                <span id = "error3"></span>
                            </div>
                            
                            
                        </div>
                    </div>
                    <div class="row m-0">
                        <div class="col-12 mb-4 p-0">
                            <div class="btn btn-primary" onClick={alert}>Book Order<span class="fas fa-arrow-right ps-2"></span> </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
    </form>
</div>
  )
  }