import React from 'react';
import Header from './Header';
import Medication from './Medication';

function ViewPrescription() {
    return (
        <div>
            <Header />
            <div className="container-fluid" style={{
            width: "100%",
            height: "100%",
            backgroundImage: "url(" + "https://images.squarespace-cdn.com/content/v1/5be5e281a2772c7d09a59f72/1543717647231-K09VTNN3BGXZMEXNYIH7/blu.jpg" + ")",
            backgroundPosition: 'center',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat'
      }}> 
            <div className=" text-center p-4">
            <h1>Prescriptions</h1>
            </div>
            
            <div className="row ">
                <div className="col-lg-8 mx-auto">
                    <div className="card mt-2 mx-auto p-4 bg-light">
                        <div className="card-body bg-light">
                            <div className="container">
                                {/* <form id="contact-form" type="submit" role="form" method="post" action=""> */}
                                    <div className="controls">
                                        <div className="row">
                                            <div className="col-md-6">
                                                Doctor ID : <b>d_id</b>
                                            </div>
                                            <div className="col-md-6">
                                                Doctor Name : <b>d_name</b>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-md-6">
                                            Patient's ID : <b>p_id</b>
                                            </div>
                                            <div className="col-md-6">
                                            Patient's Name : <b>p_name</b>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-md-6">
                                            Chief Complaints : <b>chief_complaints</b>
                                            </div>
                                            <div className="col-md-6">
                                            Clinical Features : <b>clinical_features</b>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-md-6">
                                            Examination : <b>examination</b>
                                            </div>
                                            <div className="col-md-6">
                                            Investigations : <b>investigations</b>
                                            </div>
                                        </div><br />
                                        <div className="row">
                                            <div className="col-md-6">
                                            Advice/Referrals : <b>advices</b>
                                            </div>
                                            <div className="col-md-6">
                                            Notes : <b>notes</b>
                                            </div>
                                        </div><br />
                                        
                                        <div className="row">
                                        <center>
                                            {/* <div className="col-md-6">
                                                <div className="form-group"> <button variant="outline-primary" style={{width:"100%", height:"40px", backgroundColor:"#2a8fc7", border:"none", borderRadius:"20px", color:"white", fontWeight:"bolder"}}>Add Drug</button></div>
                                            </div> */}
                                        </center>
                                        </div>
                                        
                                    </div>

                                {/* </form> */}
                                <div className="row">
                                    <div className="col-md-12 text-center">
                                        <h5><b>Drugs</b></h5>
                                    </div>
                                </div>
                                <Medication />
                                <button className="btn-primary mt-4" for="contact-form" style={{width:"100%", border:"3px solid blue", borderRadius:"5px"}}>Submit Prescription</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>


            </div>
        </div>

    )
}

export default ViewPrescription
