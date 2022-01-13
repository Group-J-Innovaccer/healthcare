import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import Prescription from './Prescription';
import Doctor_login from './Doctor_login';
import Doctor_register from './Doctor_register';
import Doctor_dashboard from './Doctor_dashboard';
import Add_medication from './Add_medication';

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";


const App = () => {
  return (
    <div>
       <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="signup" element={<Signup />} />
      <Route path="doctor_login" element={<Doctor_login />} />
      <Route path="doctor_register" element={<Doctor_register />} />
      <Route path="doctor_dashboard" element={<Doctor_dashboard />} />
      <Route path="add_medication" element={<Add_medication />} />
      <Route path="prescription" element={<Prescription />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
