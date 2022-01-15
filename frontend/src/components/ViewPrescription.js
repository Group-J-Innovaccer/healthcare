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
            backgroundImage: "url(" + "https://healthcareacademycalifornia.com/wp-content/uploads/2018/11/Free-Downlaod-Light-Blue-Wallpaper-HD.jpeg" + ")",
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
                                        </div><br /><br />
                                        
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
                                </div><br />
                                <div className="row">
                                    <div className="col-md-6">
                                        Medicine : <b>m_name</b>
                                    </div>
                                    <div className="col-md-6">
                                        Strength : <b>m_strength</b>
                                    </div>
                                </div><br />
                                <div className="row">
                                    <div className="col-md-6">
                                        Preparation : <b>m_preparation</b>
                                    </div>
                                    <div className="col-md-6">
                                        Route : <b>m_route</b>
                                    </div>
                                </div><br />
                                <div className="row">
                                    <div className="col-md-6">
                                        Dosage : <b>m_dosage</b>
                                    </div>
                                    <div className="col-md-6">
                                        Direction : <b>m_direction</b>
                                    </div>
                                </div><br />
                                <div className="row">
                                    <div className="col-md-6">
                                        Frequency : <b>m_frequency</b>
                                    </div>
                                    <div className="col-md-6">
                                        Duration : <b>m_duration</b>
                                    </div>
                                </div><br />
                                <div className="row">
                                    <div className="col-md-6">
                                        Total Quantity : <b>m_quant</b>
                                    </div>
                                </div><br />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className=" text-center p-4">
            <h1></h1>
            </div>


            </div>
        </div>

    )
}

export default ViewPrescription

