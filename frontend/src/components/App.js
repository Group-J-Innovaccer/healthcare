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

  const [isAuthenticated, setIsAuthenticated] = useState(checkAuthenticated(false))

  const authenticate = async () => {

    const res = await checkAuthenticated();
    console.log(res)
    if (res) {
      setIsAuthenticated(localStorage.setItem('isAuthenticated'), true)
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
          <Route path="/" element={<Home isAuthenticated={isAuthenticated} setIsAuthenticated={setIsAuthenticated} />} />
          <Route path="about" element={<About />} />
          <Route path="addpatient" element={<AddPatient isAuthenticated={isAuthenticated} />} />
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
