import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "./App.css";

const PatientDashboard = () =>{
    
        return(
        <div>
            <Header />
            <div className="container-fluid" style={{
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
            
            <div className="row ">
                <div className="col-lg-8 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                        <div className="card-body bg-light">
                            <div className="container">
                                <div className="row">
                                <div className="col">
                                   
                                    <ul>
                                        <li>Patient ID: </li>
                                        <li>Patient Name: </li>
                                        <li>Patient Date of Birth: </li>
                                        <li>Patient Email: </li>
                                        <li>Patient Gender:</li>
                                        <li>Patient Mobile No: </li>
                                        <li>Patient Address: </li>
                                        <li>Patient Height: </li>
                                        <li>Patient Weight: </li>
                                        
                                    </ul>
                                    <form id="contact-form" action='patientlogin'>
                                        <div className="form-group"> <button variant="outline-primary"  style={{width:"50%", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"20px", color:"white", fontWeight:"bolder"}}>Logout</button></div>

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

            <div className="container p-4" style={{ display:"flex", justifyContent:"center"}}>
                <form id="contact-form" method="get" action="viewprescription">
                    <div className="form-group">
                        <button variant="outline-primary" style={{width:"50vw", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"5px", color:"white", fontWeight:"bolder"}}>View Prescription</button>
                    </div>

                </form>
            </div>
    </div>

            <Footer />
        </div>
        );
}
export default PatientDashboard;

