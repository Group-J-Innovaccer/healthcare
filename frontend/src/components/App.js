<<<<<<< HEAD
import React from 'react';
=======
import Home from './Home';
import AddPatient from './AddPatient';
import PatientLogin from './PatientLogin';
import PatientDashboard from './PatientDashboard';

import "./App.css";

>>>>>>> shivangi_branch
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import Home from './Home';
import About from './About';
import AddPatient from './AddPatient';
import PatientLogin from './PatientLogin';
import PatientDashboard from './PatientDashboard';
import ViewPrescription from './ViewPrescription';
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
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
