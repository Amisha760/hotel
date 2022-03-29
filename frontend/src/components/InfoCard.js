import React,{useState} from 'react'
import {useNavigate} from 'react-router-dom';
import BrandList from './HotelList';
import validator from 'validator';
import { width } from '@mui/system';

function InfoCard() {
    const [user,setUser]=useState({
        location:"",
        checkin:"",
        checkout:"",
        adults:"",
        children:"",
        room:"",
    })
    const history=useNavigate();
    let id,value;
    const handleInputs=(e)=>{
        
        id=e.target.id;
        value=e.target.value;
        setUser({ ...user, [id]:value});
        
    };
    const alert=(e)=>{

        e.preventDefault();
        const {location,adults,children,room}=user;
        //console.log(location);
        var error = document.getElementById("error");
        var error1 = document.getElementById("error1");
        var error2=document.getElementById("error2");
        var error3=document.getElementById("error3");
        if(location === "" ){
            error.textContent="Location Should Not Be Empty";
            error.style.fontSize="14px"
            error.style.color = "red";
          }
        else if(location!==""){
          error.textContent="";
        }
        if(adults.length===0){
          error1.textContent="Adults should be more than zero";
          error1.style.fontSize="14px"
            error1.style.color = "red";
        }
        else if(adults.length>0){
          error1.textContent="";
        }
        if(room.length===0){
          error3.textContent="Room Should Be More than zero";
          error3.style.fontSize="14px"
          error3.style.color = "red";
        }
        else if(room.length>0){
          error3.textContent="";
        }
          if(error.textContent===""&&error1.textContent===""&&error2.textContent===""&&error3.textContent===""){ 
          history("/hotels", {state : {"locations": `${location}`,"room":`${room}`}});
        }
    }
  return (
    
    <div class="card" id="card12">
  <div class="card-body">
  <form>
  <div class="mb-3">
    <label for="location" class="form-label">Where</label>
    <input type="text" class="form-control" id="location" value={user.location} onChange={handleInputs}/>
    <span id="error"></span>
  </div>
  
  <div class="row">
  <div class="col-sm-6">
      <div class="mb-3">
  <label for="checkin" class="form-label">Check-IN</label>
    <input type="date" class="form-control" id="checkin" value={user.checkin} onChange={handleInputs} />
    </div>
    
  </div>
  <div class="col-sm-6">
      <div class="mb-3">
  <label for="checkout" class="form-label">Check-OUT</label>
    <input type="date" class="form-control" id="checkout" value={user.checkout} onChange={handleInputs}/>
    </div>
    </div>
</div>
<div class="row">
  <div class="col-sm-6">
      <div class="mb-3">
  <label for="number" class="form-label">Adults(12+ yr)</label>
    <input type="number" class="form-control" id="adults" value={user.adults} onChange={handleInputs} />
    <span id="error1"></span>
    </div>
  </div>
  
  <div class="col-sm-6">
      <div class="mb-3">
  <label for="number" class="form-label">Children(0-12 yr)</label>
    <input type="number" class="form-control" id="children" value={user.children} onChange={handleInputs} />
    <span id="error2"></span>
    </div>
    </div>
    
</div>
<div style={{display:"flex",flexDirection:"row"}}>
<div class="col-sm-6">
      <div class="mb-3">
  <label for="number" class="form-label">No Of Rooms</label>
    <input type="number" class="form-control" id="room" value={user.room} onChange={handleInputs} />
    <span id="error3"></span>
    </div>
    
    </div>
  
  <div class="col-sm-6">
      <div class="mb-3">
      <input type="submit" class="form-control" id="submit" onClick={alert} style={{marginTop:"16.2%",backgroundColor:"gray",color:"whitesmoke",marginLeft:"3%"}}/>
     
    </div>
    </div>
    
</div>
<div class="row">

    
  
  </div>
</form>
  </div>
</div>
    
  )
}
export default InfoCard;