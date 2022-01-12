import Home from './Home';
import Signup from './Signup';
import Login from './Login';
import PatientSignUp from './PatientSignUp';

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
      <Route path="patientsignup" element={<PatientSignUp />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
