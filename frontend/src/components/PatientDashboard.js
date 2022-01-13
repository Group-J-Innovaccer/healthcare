import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "./App.css";
import { MDBNavItem } from 'mdbreact';

const PatientDashboard = () =>{
    
        return(
        <div>
            <Header />
            <div class="container-fluid" style={{
            width: "100%",
            height: "110vh",
            backgroundImage: "url(" + "https://muslimaid.storage.googleapis.com/upload/img_cache/file-2540-c3140610843658e55343c899d6b4d6f5.jpg" + ")",
            backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}> 
            <div class="text-center p-3">
            <h1>Patient Details</h1>
            </div>
            <div class="row ">
                <div class="col-lg-8 mx-auto">
                    <div class="card mt-2 mx-auto p-4 bg-light">
                        <div class="card-body bg-light">
                            <div class="container">
                                <div class="row">
                                <div class="col">
                                   
                                    <ul>
                                        <li>Patient ID: </li>
                                        <li>Patient Name: </li>
                                        <li>Patient Date of Birth: </li>
                                        <li>Patient Age: </li>
                                        <li>Patient Gender:</li>
                                        <li>Patient Mobile No: </li>
                                        <li>Patient Address: </li>
                                        <li>Patient Height: </li>
                                        <li>Patient Weight: </li>
                                        <li>Diagnosis: </li>
                                    </ul>
                                </div>
                                <div class="col"><img src="patient.png"></img></div>
                                </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>
                            </div>

            <Footer />
        </div>
        );
}
export default PatientDashboard;

