
import './App.css';
import {Route,Routes} from 'react-router-dom'
import InfoPage from './infoPage';
import SearchByHotel from './searchByHotel';
import Info from './Info';
import SignUp from './SignUp.jsx';
import LogIn from './LogIn.jsx';
import ContactUs from './ContactUs';
import Aboutus from './Aboutus.jsx';
import Payment from './payment';
import Logout from './Logout';

function App() {
  return (
    <div>
  <Routes>
    <Route path="/" element={<InfoPage/>}/>
    <Route path="/hotels" element={<SearchByHotel/>}/>
    <Route path="/Info" element={<Info/>}/>
    <Route path="/signup" element={<SignUp/>} />  
  <Route path="/login" element={<LogIn/>} />  
  <Route path="/ContactUs" element={<ContactUs/>} /> 
  <Route path="/aboutus" element={<Aboutus/>} /> 
  <Route path="/payment" element={<Payment/>} />
  <Route path="/logout" element={<Logout/>}/>
  </Routes>
    </div>
  );
}

export default App;
