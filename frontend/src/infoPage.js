import React from 'react'
import InfoCard from './InfoCard';
import Navbar from './navbar'
import './App.css'
function InfoPage() {
  return (<>
        <Navbar/>
        <div class="row">
  <div class="col-lg-6 col-md-6 col-sm-6">
    <div id="info2"><strong>Experience the greatest for your Holidays</strong>
     </div>
     </div>
  <div class="col-lg-6 col-md-6 col-sm-6"><InfoCard/></div>
</div>
       </>
   
  )
}
export default InfoPage;