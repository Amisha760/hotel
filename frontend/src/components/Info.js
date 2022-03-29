import React from 'react'
import Navbar from './navbar';
import HotelIcon from '@mui/icons-material/Hotel';
import LocalParkingIcon from '@mui/icons-material/LocalParking';
import AirIcon from '@mui/icons-material/Air';
import {useLocation} from 'react-router-dom';
import Rooms from './Rooms';
export default function Info(props) {
    //console.log(props);
    const {state} = useLocation();
    const {detail}=state;
    console.log(state);
    
  return (
    <>
    <div >
    <Navbar/>
    <div className="cart" id="background"> 
    
               <h2 style={{textAlign: "center",marginTop:"10px",opacity:"0.7"}}>Hotels According to Your Search</h2>               
                    <div className="outer">
                        <div >
                        <img src={detail.image} class="card-img-top1" alt="..."/>
                      </div>

                        <div className="card-body" >
                                <div style={{display:"flex",flexDirection:"column",marginRight:"40%",marginTop:"25px"}}>
                                  <h4 class="card-title">{detail.name}</h4>
                                  <h5 class="card-title">{detail.address}</h5>
                                  <h6 class="card-title">{detail.rating}</h6>
                                  </div>
                                  <div style={{display:"flex",flexDirection:"column",float:"left",color:"gray"}}>
                                  <div style={{display:"flex",flexDirection:"row"}}>
                                  <HotelIcon style={{marginRight:"10px",marginTop:"2px"}}/><p>Deluxe Rooms</p>
                                  </div>
                                  <div style={{display:"flex",flexDirection:"row"}}>
                                 <LocalParkingIcon style={{marginRight:"10px",marginTop:"2px"}}/><p>Parking Available</p>
                                </div> 
                                <div style={{display:"flex",flexDirection:"row"}}>
                                    <AirIcon style={{marginRight:"10px",marginTop:"2px"}}/><p>Air Conditioning</p>
                                </div>
                                </div>
                                  <h6 class="card-title" style={{marginLeft:"70%",marginTop:"5%"}}>{detail.price}</h6>   
                                  <div style={{display: "flex", justifyContent: "center"}} >
                                    <button onClick={()=>alert(detail)} style={{width: "200px",marginLeft:"70%",backgroundColor:"lightgray",color:'black',borderRadius:"15px"}}>Book Now</button>
                                  </div>     
                        </div>
                   
                    </div>
                    
                </div>
                </div>
                <Rooms/>
               </>
                
                
  )
}
