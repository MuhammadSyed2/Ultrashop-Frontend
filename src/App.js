import './App.css';
import Loginform from './components/login';
import {BrowserRouter,Route,Routes} from "react-router-dom";
import Registration from './components/registration';
import Homepage from './components/Homepage';
import Profile from './components/profile';
import Forgotpassword from './components/forgotpassword.js';
import MerchantDash from './components/merchantDashboard';

function App() {
  return (
    <div className="App">
       <BrowserRouter>     
        <Routes>
                <Route exact path = "/" element={<Loginform/>}></Route>
                <Route path = "/register" element={<Registration/>}></Route>
                <Route path = "/homepage" element={<Homepage/>}></Route>
                <Route path = "/profile" element={<Profile/>}></Route>
                <Route path = "/forgotpassword" element={<Forgotpassword/>}></Route>
                <Route path = "/merchantdashboard" element={<MerchantDash/>}></Route>
        </Routes>
        </BrowserRouter>
                
    </div>
  );
}

export default App;
