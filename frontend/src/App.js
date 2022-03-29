
import './css/App.css';
import {Route,Routes} from 'react-router-dom'
import InfoPage from './components/infoPage';
import SearchByHotel from './components/searchByHotel';
import Info from './components/Info';
import SignUp from './components/SignUp.jsx';
import LogIn from './components/LogIn.jsx';
import ContactUs from './components/ContactUs';
import Aboutus from './components/Aboutus.jsx';
import Payment from './components/payment';
import Logout from './components/Logout';

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
