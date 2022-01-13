import Home from './Home';
import Prescription from './Prescription';
import Doctor_login from './Doctor_login.js';
import Doctor_register from './Doctor_register';
import Doctor_dashboard from './Doctor_dashboard';

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
      <Route path="login" element={<Doctor_login />} />
      <Route path="signup" element={<Doctor_register />} />
      <Route path="dashboard" element={<Doctor_dashboard />} />
      <Route path="prescription" element={<Prescription />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
