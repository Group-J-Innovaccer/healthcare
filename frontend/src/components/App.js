import React, { useState } from 'react';
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import { checkAuthenticated } from '../api/auth';
import Home from './Home';
import AddPatient from './AddPatient';
import PatientLogin from './PatientLogin';
import PatientDashboard from './PatientDashboard';
import DoctorLogin from './DoctorLogin';
import About from './About';
import ViewPrescription from './ViewPrescription';
import DoctorDashboard from './DoctorDashboard';
import "./App.css";
import Prescription from './Prescription';


const App = () => {

  const [isAuthenticated, setIsAuthenticated] = useState('')

  const authenticate = async () => {

    const res = await checkAuthenticated();
    if (res) {
      setIsAuthenticated(localStorage.getItem('isAuthenticated'))
    } else {
      localStorage.clear()
      setIsAuthenticated(false)
    }
  }

  authenticate()

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
          <Route path="doctor_login" element={<DoctorLogin isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="doctor_dashboard" element={<DoctorDashboard isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="addprescription" element={<Prescription />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
