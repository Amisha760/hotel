import React from 'react'
import { useLocation,useNavigate } from 'react-router-dom';
import rooms from './json/rooms.json';
import './App.css';
export default function Rooms() {
    const {state} = useLocation();
    const {detail}=state;
    const history=useNavigate();
    const alert=(details)=>{
      console.log(details);
      history("/payment", {state: {
        "detail":details,
        // "image": `${detail.image}`,
        // "name": detail.name,
        // "address": detail.address,
        // "rating": detail.rating,
        // "price": detail.price
      }})
  }
    
  return (
    <div id="backgrounds">
    <div className="cart" id="room123"> 
    <h2 style={{textAlign: "center",marginTop:"20%",opacity:"0.7"}}>Room Type</h2> 
                  {rooms.map((details) => {
                      if(details.name===detail.name){ 
                        return  (<div className="outer">
                        <div style={{display:"flex",flexDirection:"column"}}>
                        <img src={details.image} id="img123" alt="..."/>
                                      <ul style={{marginTop:"10px",marginLeft:"0px"}}>
                                      <p><li>{details.num}</li>
                                    <li>{details.area}</li>
                                <li>View More Details</li></p>
                                </ul>
                               
                            
                      </div>

                        <div className="card-body" >
                            <div style={{display:"flex",flexDirection:"row"}}>
                                <div style={{display:"flex",flexDirection:"column",marginRight:"30%",marginTop:"10px",marginLeft:"40px"}}>
                                  <h4 class="card-title">{details.title}</h4>
                                  
                                  </div>
                                  
                                </div>
                                  <div style={{display:"flex",flexDirection:"column",float:"left",color:"gray",marginTop:"20px"}}>
                                      <ul>
                                      <div style={{display:"flex",flexDirection:"row"}}>
                                    <li><p class="card-title">{details.break}</p></li></div>
                                          <div style={{display:"flex",flexDirection:"row"}}>
                                    <li><p class="card-title">{details.info}</p></li></div>
                                  <div style={{display:"flex",flexDirection:"row"}}>
                                  
                                  <li><p>{details.wel}</p></li>
                                  </div>
                                  <div style={{display:"flex",flexDirection:"row"}}>
                                      
                                 <li><p>Pay At Hotel</p></li>
                                </div> 
                                <div style={{display:"flex",flexDirection:"row"}}>
                                    <li><p>Drinks Will Also Require Beer</p></li>
                                </div>
                                 </ul>
                                
                                </div>    
                                
                                <div style={{display: "flex", flexDirection:"column", justifyContent: "center"}} >
                                    
                                  <h6 class="card-title" style={{marginLeft:"30%",marginTop:"30%"}}>{details.price}</h6>
                                    <button style={{width: "200px",marginLeft:"45%",backgroundColor:"lightgray",color:'black',borderRadius:"15px"}} onClick={()=>alert(details)}>Book Now</button>
                                  </div>          
                        </div>
                    </div>
                    );
                      }
                    return [];   
                  }
                  )}
                </div>
                </div>
  )
}