import Home from './Home';
import AddPatient from './AddPatient';
import PatientLogin from './PatientLogin';
import PatientDashboard from './PatientDashboard';

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
