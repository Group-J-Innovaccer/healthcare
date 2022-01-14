import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "./App.css";

const ViewPrescription = () =>{
    
        return(
        <div>
            <Header />

            <div class="container-fluid" style={{
            width: "100%",
            height: "120vh",
            backgroundImage: "url('https://cutewallpaper.org/21/healthcare-wallpapers/Health-Care-Wallpapers-Top-Free-Health-Care-Backgrounds-.jpg')",
            backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}> 
            <div class="text-center p-4">
            <h1>Prescription Details</h1>
            </div>
            
            <div class="container" style={{ display:"flex", justifyContent:"center"}}>
            <div class="card" style={{width: "40vw",height:"90vh"}}>
                <div class="card-body">
                <h6>Drug name : <b>drug_name</b></h6><br />
                <h6>Strength : <b>drug_strength</b></h6><br />
                <h6>Preparation : <b>drug_prepration</b></h6><br />
                <h6>Route : <b>drug_route</b></h6><br />
                <h6>Dose : <b>drug_dose</b></h6><br />
                <h6>Frequency : <b>drug_frequency</b></h6><br />
                <h6>Duration : <b>drug_duration</b></h6><br />
                <h6>Total Quantity : <b>drug_quantity</b></h6><br />
                <h6>Other Instructions : <b>drug_instruction</b></h6><br />
                
                <form id="contact-form">
                <div class="form-group"> <button variant="outline-primary" style={{width:"50%", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"20px", color:"white", fontWeight:"bolder"}}>Logout</button></div>

                </form>
                </div>
            </div>
            <div class="card" style={{height:"90vh", width: "30vw"}}>
                <center><img src="prescription.png" alt="Card-cap"  style={{height:"100%", width:"100%"}}/></center>
                
            </div>
            </div>
            

        </div>
            <Footer />
        </div>
        );
        }
export default ViewPrescription;