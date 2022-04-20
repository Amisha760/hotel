import Navbar from './navbar'
import "../css/Aboutus.css";
import  Harshit from "../images/harshit.jpg";
import  Amisha from "../images/Amisha1.jpg";
function Aboutus(){
    return (

        <>
        <Navbar/>
        <div className='aboutus'> 
        <div className='left_aboutus'>
        <div className="card">
  <img className="card-img-top" src={Amisha} alt="Card image cap" width={"5px"} height={"25px"}/>
  <div className="card-body">
 
    <p className="card-text">
        
        Amisha
        <br></br>Contribution: </p>
        <ul>
            <li>
                Back-end development
            </li>
            <li>
               Mongodb,ExpressJS
            </li>
            <li>
               Authentication using JWT
            </li>
            </ul>
    <a href="https://github.com/Amisha760"><button className='btn_aboutus'>Github</button></a>
  </div>
</div>
</div>


<div className='right_aboutus'>
        <div className="card">
  <img className="card-img-top" src={Harshit} alt="Card image cap" width={"5px"} height={"50px"}/>
  <div className="card-body">
  
   
    <p className="card-text"> Harshit kansal 
    <br></br>Contribution:</p>
        <ul>
            <li>
                Front-End development
            </li>
            <li>
            Designing,CSS
            </li>
            <li>
              ReactJS
            </li>
            </ul>
    <a href="https://github.com/harshitkansal16"><button className='btn_aboutus'>Github</button></a>
  </div>
</div>
</div>
</div>
        </>
    );
}

export default Aboutus;

