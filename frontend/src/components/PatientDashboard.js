import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "./App.css";
// import { MDBNavItem } from 'mdbreact';
import ViewPrescription from './ViewPrescription';

const PatientDashboard = () =>{
    
        return(
        <div>
            <Header />
            <div class="container-fluid" style={{
                width: "100%",
                height: "110vh",
                backgroundImage: "url('https://muslimaid.storage.googleapis.com/upload/img_cache/file-2540-c3140610843658e55343c899d6b4d6f5.jpg')",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}> 

            <div className="text-center p-3">
                <h1>Patient Details</h1>
            </div>
            
            <div cclassName="row ">
                <div className="col-lg-8 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                        <div cclassName="card-body bg-light">
                            <div className="container">
                                <div className="row">
                                <div className="col">
                                   
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
                                    <form id="contact-form">
                                        <div className="form-group"> <button variant="outline-primary" style={{width:"50%", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"20px", color:"white", fontWeight:"bolder"}}>Logout</button></div>

                                    </form>
                                </div>
                                <div className="col">
                                    <img src="patient.png" alt="patient"></img>
                                </div>
                                </div>

                             </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="container p-4" style={{ display:"flex", justifyContent:"center"}}>
                <form id="contact-form" method="get" action="prescription">
                    <div class="form-group">
                        <button variant="outline-primary" style={{width:"50vw", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"5px", color:"white", fontWeight:"bolder"}}  onClick={<ViewPrescription />}>View Prescription</button>
                    </div>

                </form>
            </div>
    </div>

            <Footer />
        </div>
        );
}
export default PatientDashboard;

