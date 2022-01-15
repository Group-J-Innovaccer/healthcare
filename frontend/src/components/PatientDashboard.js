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
                height: "100vh",
                backgroundImage: "url('https://images.unsplash.com/photo-1615388248492-19ea9a40f115?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=870&q=80')",
                backgroundPosition: 'center',
                backgroundSize: 'cover',
                backgroundRepeat: 'no-repeat'
            }}> 

            <div className="text-center p-3">
                <h1>Patient Details</h1>
            </div>
            
            <div className="row "  style={{ borderRadius:'10px 10px 10px 10px'}}>
                <div className="col-lg-8 mx-auto">
                    <div className="card mt-3 mx-auto p-4 bg-light"  style={{ borderRadius:'10px 10px 10px 10px'}}>
                        <div className="card-body bg-light">
                            <div className="container">
                                <div className="row">
                                <div className="col p-2 mt-2">
                                   
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
                                </div>
                                <div className="col" >
                                    <img src="patient.png" alt="patient"  style={{ padding:'30px'}}></img>
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
                        <button variant="outline-primary" style={{width:"30vw", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"10px", color:"white", fontWeight:"bolder"}}>View Prescription</button>
                    </div>

                </form>
            </div>
    </div>

            <Footer />
        </div>
        );
}
export default PatientDashboard;

