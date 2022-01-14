import Home from './Home';
import PatientSignUp from './PatientSignUp';
import PatientLogin from './PatientLogin';
import PatientDashboard from './PatientDashboard';
import About from './About';
import "./App.css";

import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import ViewPrescription from './ViewPrescription';


const App = () => {
  return (
    <div>
       <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="patientsignup" element={<PatientSignUp />} />
      <Route path="patientlogin" element={<PatientLogin />} />
      <Route path="patientdashboard" element={<PatientDashboard/>} />
      <Route path="viewprescription" element={<ViewPrescription />} />
      <Route path="about" element={<About />} />
    </Routes>
  </BrowserRouter>
    </div>
  );
}

export default App;
