import React from 'react';
import Header from './Header';
import Footer from './Footer';
import "./App.css";

const ViewPrescription = () => {
    
        return(
        <div>
            <Header />

            <div className="container-fluid" style={{
            width: "100%",
            height: "120vh",
            backgroundImage: "url('https://images.unsplash.com/photo-1522441815192-d9f04eb0615c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=327&q=80')",
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'
            }}> 

                <div className="text-center p-4">
                    <h1>Prescription Details</h1>
                </div>
            
                <div className="container" style={{ display:"flex", justifyContent:"center", }}>
                    <div className="card" style={{width: "40vw",height:"80vh", borderRadius:'10px 0 0 10px'}}>
                        <div className="card-body">
                            <h6>Drug name : <b>drug_name</b></h6><br />
                            <h6>Strength : <b>drug_strength</b></h6><br />
                            <h6>Preparation : <b>drug_prepration</b></h6><br />
                            <h6>Route : <b>drug_route</b></h6><br />
                            <h6>Dose : <b>drug_dose</b></h6><br />
                            <h6>Frequency : <b>drug_frequency</b></h6><br />
                            <h6>Duration : <b>drug_duration</b></h6><br />
                            <h6>Total Quantity : <b>drug_quantity</b></h6><br />
                            <h6>Other Instructions : <b>drug_instruction</b></h6><br />
                
                        </div>
                    </div>
                    <div className="card" style={{height:"80vh", width: "30vw", borderRadius:'0 10px 10px 0'}}>
                        <center>
                            <img src="prescription.png" alt="Card-cap"  style={{height:"100%", width:"100%", borderRadius:'0 10px 10px 0'}}/>
                        </center>
                
                    </div>
                </div>
            

            </div>
            <Footer />
        </div>
    );
}
export default ViewPrescription;