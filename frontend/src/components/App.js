import React from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home';
import AddPatient from './AddPatient';
import PatientLogin from './PatientLogin';
import PatientDashboard from './PatientDashboard';
import Prescription from './Prescription';
import DoctorLogin from './DoctorLogin';
import About from './About';
import ViewPrescription from './ViewPrescription';
import DoctorDashboard from './DoctorDashboard';
import "./App.css";



const App = () => {
  return (
    <div>   
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="addpatient" element={<AddPatient />} />
          <Route path="patientlogin" element={<PatientLogin />} />
          <Route path="patientdashboard" element={<PatientDashboard/>} />
          <Route path="viewprescription" element={<ViewPrescription />} />
          <Route path="doctor_login" element={<DoctorLogin />} />
          <Route path="doctor_dashboard" element={<DoctorDashboard />} />
          <Route path="prescription" element={<Prescription />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
